package com.smydata.payable.controller;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.PayableReceivable;
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class PayableController {
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(PayableController.class);
	
	@PostMapping("/savePayables/{action}/{paymentFlag}")
	public List<PayableReceivable> savePayables(@RequestBody List<Payable> payables,@PathVariable("action") String action, @PathVariable("paymentFlag") String paymentFlag,HttpServletRequest request){
		
		logger.info("***Begin Execution of savePayable***");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		String actionVal = "";
		
		double balanceAmount = 0.0;
		List<PayableReceivable> payableReceivables = new ArrayList<>();
		List<Payable> deleteList = new ArrayList<>();
		
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
//			if(reg != null){
//				logger.info("===>savePayables mob no===>"+reg.getMobile());
//				mobile = reg.getMobile();
				Calendar currenttime = Calendar.getInstance();
				for(int i=0;i<payables.size();i++){
					Payable payable = payables.get(i);
					if(mobile.isEmpty()){
						mobile = payable.getMobile();
					}
					payable.setDate(new Date((currenttime.getTime()).getTime()));
//					payable.setMobile(mobile);
					if("payable".equalsIgnoreCase(action)){
						payable.setCode("PAYBL"); //CODE FOR PAYABLE
						actionVal = "PAYBL";
					} else if("receivable".equalsIgnoreCase(action)) {
						payable.setCode("RCVBL");//CODE FOR RECEIVABLE
						actionVal = "RCVBL";
					} 
					//for payment/payoff
					if(Boolean.valueOf(paymentFlag)){
						List<Payable> paybleList = payableService.getOwnerPayables(mobile,actionVal);
						for(int j=0;j<paybleList.size();j++){
							Payable payable1 = payables.get(j);
								if(payable.getInvoiceNumber() == payable1.getInvoiceNumber()){
									if(payable1.getAmount()==payable.getReceived()){
										deleteList.add(payable);
										break;
									} else {
										payable.setAmount(payable1.getAmount()-payable.getReceived());
										break;
									}
								}
						}	
					}
							
					payables.set(i, payable);
				}
				if(deleteList != null && deleteList.size()>0){
					payableService.deletePaidInvoice(deleteList);//Delete payable/Receivable which are paid/received completely
					payables.removeAll(deleteList);//Remove before save from actual list
				}
				payableService.saveOwnerPayables(payables);
				List<Payable> latestPayables = payableService.getOwnerPayables(mobile,actionVal);//get updated data
				PayableReceivable payableReceivable = new PayableReceivable();
				balanceAmount = getBalanceAmount(latestPayables);
				payableReceivable.setBalAmount(balanceAmount);
				payableReceivable.setPaybleReceivables(latestPayables);
				payableReceivables.add(payableReceivable);
	//		}
		}
		catch(Exception e){
			logger.error("Error occured while saving Payables for owner mobile::[{}] and error is: {}",mobile,e);
		}
		logger.info("***End Execution of savePayable***");
		return payableReceivables;
	}
	
	@GetMapping("/getPayables/{action}/{mob}")
	public List<PayableReceivable> getPayables(@PathVariable("action") String action, @PathVariable("mob") String mob, HttpServletRequest request){
		
		logger.info("***Begin Execution of getPayable***");
		HttpSession session = request.getSession();
//		Registration reg = null;
		String mobile = "";
		double balanceAmount = 0.0;
		List<PayableReceivable> payableReceivables = new ArrayList<>();
		try{
			/*if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}*/
//			if(reg != null){
//				logger.info("===>getPayables mob no===>"+reg.getMobile());
//				mobile = reg.getMobile();
				if("payable".equalsIgnoreCase(action)){
					action = "PAYBL"; //CODE FOR PAYABLE
				} else {
					action = "RCVBL";//CODE FOR RECEIVABLE
				}
				List<Payable> payables = payableService.getOwnerPayables(mob,action);
				PayableReceivable payableReceivable = new PayableReceivable();
					balanceAmount = getBalanceAmount(payables);
				payableReceivable.setBalAmount(balanceAmount);
				payableReceivable.setPaybleReceivables(payables);
				payableReceivables.add(payableReceivable);
//			}
		}
		catch(Exception e){
			logger.error("Error occured while getting Payables for owner mobile::[{}] and error is: {}",mobile,e);
		}
		logger.info("***End Execution of getPayable***");
		return payableReceivables;
	}
	
	private double getBalanceAmount(List<Payable> payables){
		double balAmount = 0.0;
		for(Payable payable : payables){
			balAmount = balAmount + payable.getAmount();
		}
		return balAmount;
	}
	
}

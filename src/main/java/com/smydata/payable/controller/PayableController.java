package com.smydata.payable.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class PayableController {
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(PayableController.class);
	
	@PostMapping("/savePayables/{flag}")
	public List<Payable> savePayables(@RequestBody List<Payable> payables,@PathVariable("flag") String flag, HttpServletRequest request){
		
		logger.info("***Begin Execution of savePayable***");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>savePayables mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
				SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
				String date = sdf.format(new Date());
				for(int i=0;i<payables.size();i++){
					Payable payable = payables.get(i);
//					payable.setDate(date); //To do
					payable.setMobile(mobile);
					if("payable".equalsIgnoreCase(flag)){
						payable.setCode("PAYBL"); //CODE FOR PAYABLE
					} else if("receivable".equalsIgnoreCase(flag)) {
						payable.setCode("RCVBL");//CODE FOR RECEIVABLE
					} else {//for payment/payoff
						List<Payable> paybleList = payableService.getOwnerPayables(mobile,flag);
						for(int j=0;j<paybleList.size();j++){
							Payable payable1 = payables.get(j);
								if(payable.getInvoiceNumber() == payable1.getInvoiceNumber()){
									payable.setAmount(payable1.getAmount()-payable.getAmount());
									break;
								}
						}
					}
					payables.set(i, payable);
				}
				payableService.saveOwnerPayables(payables);
			}
		}
		catch(Exception e){
			logger.error("Error occured while saving Payables for owner mobile::[{}] and error is: {}",mobile,e);
		}
		logger.info("***End Execution of savePayable***");
		return payables;
	}
	
	@GetMapping("/getPayables/{mob}/{flag}")
	public List<Payable> getPayables(@PathVariable("flag") String flag, @PathVariable("mob") String mob, HttpServletRequest request){
		
		logger.info("***Begin Execution of getPayable***");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		List<Payable> payables = null;
		
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
//			if(reg != null){
//				logger.info("===>getPayables mob no===>"+reg.getMobile());
//				mobile = reg.getMobile();
				if("payable".equalsIgnoreCase(flag)){
					flag = "PAYBL"; //CODE FOR PAYABLE
				} else {
					flag = "RCVBL";//CODE FOR RECEIVABLE
				}
				payables = payableService.getOwnerPayables(mob,flag);
//			}
		}
		catch(Exception e){
			logger.error("Error occured while getting Payables for owner mobile::[{}] and error is: {}",mobile,e);
		}
		logger.info("***End Execution of getPayable***");
		return payables;
	}
	
}

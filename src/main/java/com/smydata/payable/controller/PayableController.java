package com.smydata.payable.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.model.util.SmydataConstant;
import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.PayableReceivable;
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
@CrossOrigin
public class PayableController implements SmydataConstant{
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(PayableController.class);
	
	/**
	 * This method is used for both Payable and Receivables to save data
	 * @param payables
	 * @param action
	 * @param paymentFlag
	 * @param request
	 * @return
	 */
	@PostMapping("/savePayables/{action}/{paymentFlag}")
	public ResponseEntity<?> savePayables(@RequestBody List<Payable> payables,@PathVariable("action") String action, @PathVariable("paymentFlag") String paymentFlag,HttpServletRequest request){
		
		logger.info("===>Begin Execution of savePayable===>");
		String boMobile = "";
		String actionVal = "";
		ResponseEntity<?> results = null;
		Registration reg = null;
		double balanceAmount = 0.0;
		List<PayableReceivable> payableReceivables = new ArrayList<>();
		List<Payable> deleteList = new ArrayList<>();
		try{
				Calendar currenttime = Calendar.getInstance();
				HttpSession session = request.getSession();
				if(session!=null){
					reg = (Registration) session.getAttribute("registration");
					if(reg != null)
						boMobile = reg.getMobile();
				}
				for(int i=0;i<payables.size();i++){
					Payable payable = payables.get(i);
					payable.setBoMobile(boMobile);//set BO Mobile number
					payable.setCreateDate(new Date((currenttime.getTime()).getTime()));
					if(PAYABLE.equalsIgnoreCase(action)){
						payable.setCode(PAYABLE_CODE); //CODE FOR PAYABLE
						actionVal = PAYABLE_CODE;
					} else if(RECEIVABLE.equalsIgnoreCase(action)) {
						payable.setCode(RECEIVABLE_CODE);//CODE FOR RECEIVABLE
						actionVal = RECEIVABLE_CODE;
					} 
					//for payment/payoff
					if(paymentFlag != null && Boolean.valueOf(paymentFlag)){
						List<Payable> paybleList = payableService.getPayablesByOwnerMobile(boMobile,actionVal);
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
				List<Payable> latestPayables = payableService.getPayablesByOwnerMobile(boMobile,actionVal);//get updated data
				if(latestPayables != null && !latestPayables.isEmpty()) {
					PayableReceivable payableReceivable = new PayableReceivable();
					balanceAmount = getBalanceAmount(latestPayables);
					payableReceivable.setBalAmount(balanceAmount);
					payableReceivable.setPaybleReceivables(latestPayables);
					payableReceivables.add(payableReceivable);	
				}
				
				if(payableReceivables != null && !payableReceivables.isEmpty()){
					results = new ResponseEntity<>(payableReceivables, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while saving Payables for owner mobile::[{}] and error is: {}",boMobile,e);
		}
		logger.info("===>End Execution of savePayable()===>");
		return results;
	}
	
	/**
	 * This method is used for both Payable and Receivables to fetch data
	 * @param action
	 * @param mob
	 * @param request
	 * @return
	 */
	@GetMapping("/getPayables/{action}")
	public ResponseEntity<?> getPayables(@PathVariable("action") String action, HttpServletRequest request){
		
		logger.info("***Begin Execution of getPayable***");
		String boMobile = "";
		double balanceAmount = 0.0;
		ResponseEntity<?> results = null;
		Registration reg = null;
		List<PayableReceivable> payableReceivables = new ArrayList<>();
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
				if(reg != null)
					boMobile = reg.getMobile();
			}
				if(PAYABLE.equalsIgnoreCase(action)){
					action = PAYABLE_CODE; //CODE FOR PAYABLE
				} else {
					action = RECEIVABLE_CODE;//CODE FOR RECEIVABLE
				}
				List<Payable> payables = payableService.getPayablesByOwnerMobile(boMobile, action);
				if(payables != null && !payables.isEmpty()){
					PayableReceivable payableReceivable = new PayableReceivable();
					balanceAmount = getBalanceAmount(payables);//Balance amount
					payableReceivable.setBalAmount(balanceAmount);
					payableReceivable.setPaybleReceivables(payables);
					payableReceivables.add(payableReceivable);
					results = new ResponseEntity<>(payableReceivables, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(payableReceivables,HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while getting Payables for owner mobile::[{}] and error is: {}",boMobile,e);
		}
		logger.info("***End Execution of getPayable***");
		return results;
	}
	
	private double getBalanceAmount(List<Payable> payables){
		double balAmount = 0.0;
		for(Payable payable : payables){
			balAmount = balAmount + payable.getAmount();
		}
		return balAmount;
	}
	
}

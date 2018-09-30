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
import com.smydata.registration.model.PayableResponse;
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes(value={"registration"})
@CrossOrigin
public class PayableController implements SmydataConstant{
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(PayableController.class);
	
	/**
	 * This method is used for Payable to save data
	 * @param payables
	 * @param action
	 * @param paymentFlag
	 * @param request
	 * @return
	 */
	@PostMapping("/savePayables/{paymentFlag}/{businessId}")
	public ResponseEntity<?> savePayables(@RequestBody List<Payable> payables, @PathVariable("paymentFlag") String paymentFlag, @PathVariable("businessId") long businessId, HttpServletRequest request){
		
		logger.info("===>Begin Execution of savePayable===>");
		String boMobile = "";
		ResponseEntity<?> results = null;
		Registration reg = null;
		double balanceAmount = 0.0;
		List<PayableResponse> payablesResList = new ArrayList<>();
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
					payable.setBusinessDetailId(businessId);//Set business Id of selected business
					payable.setCreateDate(new Date((currenttime.getTime()).getTime()));
					//for payment/payoff
					if(paymentFlag != null && Boolean.valueOf(paymentFlag)){
						List<Payable> paybleList = payableService.getPayables(businessId);
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
				if(deleteList != null && !deleteList.isEmpty()){
					payableService.deletePaidInvoice(deleteList);//Delete payable which are paid/received completely
					payables.removeAll(deleteList);//Remove before save from actual list
				}
				 payableService.saveOwnerPayables(payables);//save payable
				List<Payable> latestPayables = payableService.getPayables(businessId);//get updated data
				if(latestPayables != null && !latestPayables.isEmpty()) {
					PayableResponse payableResponse = new PayableResponse();
					balanceAmount = getBalanceAmount(latestPayables);
					payableResponse.setBalAmount(balanceAmount);
					payableResponse.setPaybles(latestPayables);
					payablesResList.add(payableResponse);	
				}
				
				if(payablesResList != null && !payablesResList.isEmpty()){
					results = new ResponseEntity<>(payablesResList, HttpStatus.OK);
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
	 * This method is used for Payable to fetch data
	 * @param action
	 * @param mob
	 * @param request
	 * @return
	 */
	@GetMapping("/getPayables/{businessId}")
	public ResponseEntity<?> getPayables(@PathVariable("businessId") long businessId, HttpServletRequest request){
		
		logger.info("===>Begin Execution of getPayable===>");
		String boMobile = "";
		double balanceAmount = 0.0;
		ResponseEntity<?> results = null;
		Registration reg = null;
		List<PayableResponse> payableResponseList = new ArrayList<>();
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
				if(reg != null) {
					boMobile = reg.getMobile();
					logger.info("===>In getPayables() BO mobile [{}] and business ID[{}]===>",boMobile,businessId);
				}
			}
				List<Payable> payables = payableService.getPayables(businessId);
				if(payables != null && !payables.isEmpty()){
					PayableResponse payableReceivable = new PayableResponse();
					balanceAmount = getBalanceAmount(payables);//Balance amount
					payableReceivable.setBalAmount(balanceAmount);
					payableReceivable.setPaybles(payables);
					payableResponseList.add(payableReceivable);
					results = new ResponseEntity<>(payableResponseList, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(payableResponseList,HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while getting Payables for owner mobile::[{}] and error is: {}",boMobile,e);
		}
		logger.info("===>End Execution of getPayable===>");
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

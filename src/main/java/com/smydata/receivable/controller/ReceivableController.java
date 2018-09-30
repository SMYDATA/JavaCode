package com.smydata.receivable.controller;

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
import com.smydata.receivable.service.ReceivableService;
import com.smydata.registration.model.Receivable;
import com.smydata.registration.model.ReceivableResponse;
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes(value={"registration"})
@CrossOrigin
public class ReceivableController implements SmydataConstant {


	
	@Autowired
	ReceivableService receivableService;
	
	private static final Logger logger = LoggerFactory.getLogger(ReceivableController.class);
	
	
	/**
	 * This method is used for Receivable to save data
	 * @param receivables
	 * @param paymentFlag
	 * @param businessId
	 * @param request
	 * @return
	 */
	@PostMapping("/saveReceivables/{paymentFlag}/{businessId}")
	public ResponseEntity<?> saveReceivables(@RequestBody List<Receivable> receivables, @PathVariable("paymentFlag") String paymentFlag, @PathVariable("businessId") long businessId, HttpServletRequest request){
		
		logger.info("===>Begin Execution of saveReceivables===>");
		String boMobile = "";
		ResponseEntity<?> results = null;
		Registration reg = null;
		double balanceAmount = 0.0;
		List<ReceivableResponse> receivablesResList = new ArrayList<>();
		List<Receivable> deleteList = new ArrayList<>();
		try{
				Calendar currenttime = Calendar.getInstance();
				HttpSession session = request.getSession();
				if(session!=null){
					reg = (Registration) session.getAttribute("registration");
					if(reg != null)
						boMobile = reg.getMobile();
				}
				for(int i=0;i<receivables.size();i++){
					Receivable receivable = receivables.get(i);
					receivable.setBoMobile(boMobile);//set BO Mobile number
					receivable.setBusinessDetailId(businessId);//Set business Id of selected business
					receivable.setCreateDate(new Date((currenttime.getTime()).getTime()));
					//for payment/payoff
					if(paymentFlag != null && Boolean.valueOf(paymentFlag)){
						List<Receivable> receivableList = receivableService.getReceivables(businessId);
						for(int j=0;j<receivableList.size();j++){
							Receivable receivable1 = receivables.get(j);
								if(receivable1.getInvoiceNumber() == receivable.getInvoiceNumber()){
									if(receivable1.getAmount()==receivable.getReceived()){
										deleteList.add(receivable);
										break;
									} else {
										receivable.setAmount(receivable1.getAmount()-receivable.getReceived());
										break;
									}
								}
						}	
					}
							
					receivables.set(i, receivable);
				}
				if(deleteList != null && !deleteList.isEmpty()){
					receivableService.deletePaidReceivables(deleteList);//Delete receivable which are paid/received completely
					receivables.removeAll(deleteList);//Remove before save from actual list
				}
				receivableService.saveReceivables(receivables);//save payable
				List<Receivable> latestReceivables = receivableService.getReceivables(businessId);//get updated data
				if(latestReceivables != null && !latestReceivables.isEmpty()) {
					ReceivableResponse payableResponse = new ReceivableResponse();
					balanceAmount = getBalanceAmount(latestReceivables);
					payableResponse.setBalAmount(balanceAmount);
					payableResponse.setReceivables(latestReceivables);
					receivablesResList.add(payableResponse);	
				}
				
				if(receivablesResList != null && !receivablesResList.isEmpty()){
					results = new ResponseEntity<>(receivablesResList, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while saving Receivables for owner mobile::[{}] and error is: {}",boMobile,e);
		}
		logger.info("===>End Execution of saveReceivable()===>");
		return results;
	}
	
	
	/**
	 * This method is used for Receivable to fetch data
	 * @param businessId
	 * @param request
	 * @return
	 */
	@GetMapping("/getReceivables/{businessId}")
	public ResponseEntity<?> getReceivables(@PathVariable("businessId") long businessId, HttpServletRequest request){
		
		logger.info("===>Begin Execution of getReceivables===>");
		String boMobile = "";
		double balanceAmount = 0.0;
		ResponseEntity<?> results = null;
		Registration reg = null;
		List<ReceivableResponse> receivableResponseList = new ArrayList<>();
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
				if(reg != null) {
					boMobile = reg.getMobile();
					logger.info("===>In getReceivables() BO mobile [{}] and business ID[{}]===>",boMobile,businessId);
				}
			}
				List<Receivable> receivables = receivableService.getReceivables(businessId);
				if(receivables != null && !receivables.isEmpty()){
					ReceivableResponse receivableResponse = new ReceivableResponse();
					balanceAmount = getBalanceAmount(receivables);//Balance amount
					receivableResponse.setBalAmount(balanceAmount);
					receivableResponse.setReceivables(receivables);
					receivableResponseList.add(receivableResponse);
					results = new ResponseEntity<>(receivableResponseList, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(receivableResponseList,HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while getting Receivables for owner mobile::[{}] and error is: {}",boMobile,e);
		}
		logger.info("===>End Execution of getPayable===>");
		return results;
	}
	
	private double getBalanceAmount(List<Receivable> receivables){
		double balAmount = 0.0;
		for(Receivable receivable : receivables){
			balAmount = balAmount + receivable.getAmount();
		}
		return balAmount;
	}
	

}

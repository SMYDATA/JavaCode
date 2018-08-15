package com.smydata.customer.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.customer.service.CustomerService;
import com.smydata.registration.model.CustomerPayable;
import com.smydata.registration.model.CustomerReceivable;
import com.smydata.registration.model.User;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CustomerController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	CustomerService customerService;
	
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);

	@PostMapping("/saveCustomer")
	public ResponseEntity<?> saveCustomer(@RequestBody User user){
		
		logger.info("===>Begin Execution of saveCustomer===>");
		ResponseEntity<?> results = null;
		User savedUser = null;
		List<String> result = new ArrayList<>();
		try{
			
			if(user != null){
				Calendar currenttime = Calendar.getInstance();
				user.setCreateDate(new Date((currenttime.getTime()).getTime()));
				savedUser = userService.saveCustomer(user);
				if(savedUser != null) {
					result.add("success");
					results = new ResponseEntity<>(result, HttpStatus.OK);
				} else {
					result.add("Failed to save customer");
					results = new ResponseEntity<>(result, HttpStatus.OK);
				}
				
			} else {
				results = new ResponseEntity<>(savedUser,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while registering customer details and error is:  "+e);
		}
		logger.info("===>End Execution of saveCustomer===>");
		return results;
	}
	
	@PostMapping("/payable/add")
	public ResponseEntity<?> addCustPayables(@RequestBody List<CustomerPayable> customerPayables){
		
		logger.info("===>Begin Execution of addCustPayables===>");
		ResponseEntity<?> results = null;
		List<CustomerPayable> custPayables = null;
		try{
			
			if(customerPayables != null && !customerPayables.isEmpty()){
				custPayables = customerService.addCustPayables(customerPayables);
				if(custPayables != null && !custPayables.isEmpty()) {
					results = new ResponseEntity<>(custPayables, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(custPayables, HttpStatus.OK);
				}
				
			} else {
				results = new ResponseEntity<>(custPayables,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving customer payables and error is:  "+e);
		}
		logger.info("===>End Execution of addCustPayables===>");
		return results;
	}
	
	@GetMapping("/viewMyData")
	public ResponseEntity<?> getCustPayables(){
		
		logger.info("===>Begin Execution of getCustPayables===>");
		ResponseEntity<?> results = null;
		List<CustomerPayable> custPayables = null;
		try{
				custPayables = customerService.getCustPayables();
				if(custPayables != null && !custPayables.isEmpty()) {
					results = new ResponseEntity<>(custPayables, HttpStatus.OK);
				} else {
					logger.info("===>No records found for Payables===>");
					results = new ResponseEntity<>(custPayables, HttpStatus.OK);
				}
		}
		catch(Exception e){
			logger.error("Error occured while getting customer payables and error is:  "+e);
		}
		logger.info("===>End Execution of getCustPayables===>");
		return results;
	}
	
	@PostMapping("/receivable/add")
	public ResponseEntity<?> addCustReceivables(@RequestBody List<CustomerReceivable> customerReceivables){
		
		logger.info("===>Begin Execution of addCustReceivables===>");
		ResponseEntity<?> results = null;
		List<CustomerReceivable> custReceivables = null;
		try{
			
			if(customerReceivables != null && !customerReceivables.isEmpty()){
				custReceivables = customerService.addCustRecevables(customerReceivables);
				if(custReceivables != null && !custReceivables.isEmpty()) {
					results = new ResponseEntity<>(custReceivables, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(custReceivables, HttpStatus.OK);
				}
				
			} else {
				results = new ResponseEntity<>(custReceivables,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving customer recevables and error is:  "+e);
		}
		logger.info("===>End Execution of addCustReceivables===>");
		return results;
	}
	
	@GetMapping("/getReceiveData") 
	public ResponseEntity<?> getCustReceivables(){
		
		logger.info("===>Begin Execution of getCustReceivables===>");
		ResponseEntity<?> results = null;
		List<CustomerReceivable> custReceivables = null;
		try{
			custReceivables = customerService.getCustReceivables();
				if(custReceivables != null && !custReceivables.isEmpty()) {
					results = new ResponseEntity<>(custReceivables, HttpStatus.OK);
				} else {
					logger.info("===>No records found for Receivables===>");
					results = new ResponseEntity<>(custReceivables, HttpStatus.OK);
				}
		}
		catch(Exception e){
			logger.error("Error occured while getting customer receivables and error is:  "+e);
		}
		logger.info("===>End Execution of getCustReceivables===>");
		return results;
	}
}

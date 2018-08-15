package com.smydata.report.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.model.util.SmydataConstant;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.TicketBean;
import com.smydata.registration.model.User;
import com.smydata.report.service.ReportService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ReportController implements SmydataConstant{
	
	@Autowired
	ReportService reportService;

	private static final Logger logger = LoggerFactory.getLogger(ReportController.class);
	
	/**
	 * Get user details for provided date range
	 * @param strtDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/getUserDetails/{strtDate}/{endDate}")
	public ResponseEntity<?> getAllUserDetails(@PathVariable("strtDate") String strtDate,@PathVariable("endDate") String endDate){
		logger.info("====>Begin execution of  getAllUserDetails====> ");
		ResponseEntity<?> results = null;
		List<User> userData = null;
		try{
			userData = reportService.getAllCustomers(strtDate, endDate);
			if(userData != null){
				logger.info("====>Service returned user data size ====> "+userData.size());
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			} else {
				logger.info("====>Service returned user data size is empty====> ");
				results = new ResponseEntity<>(userData,HttpStatus.OK);
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting all User Details and error is: {}",e);
			return results;
		}
		
		return results;
	}
	
	/**
	 * Get Payable/Receivables details for provided date range based on action parameter
	 * @param action
	 * @param strtDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/{action}/{strtDate}/{endDate}")
	public ResponseEntity<?> getPayableReceivables(@PathVariable("action") String action,@PathVariable("strtDate") String strtDate,@PathVariable("endDate") String endDate){
		logger.info("====>Begin execution of  getPayableReceivables====> ");
		List<Payable> payableReceivables = null;
		ResponseEntity<?> results = null;
		try{
			if(PAYABLE.equalsIgnoreCase(action)){
				action = PAYABLE_CODE;
			} else{
				action = RECEIVABLE_CODE;
			}
			payableReceivables = reportService.getAllPayablesReceivables(action,strtDate, endDate);
			if(payableReceivables != null && payableReceivables.size() >0){
				results = new ResponseEntity<>(payableReceivables, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(payableReceivables,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while getting all User Details and error is: {}",e);
			return results;
		}
		return results;
	}
	
	/**
	 * Get invoice details for provided date range
	 * @param strtDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/getInvoice/{strtDate}/{endDate}")
	public ResponseEntity<?> getInvoiceDetails(@PathVariable("strtDate") String strtDate,@PathVariable("endDate") String endDate){
		logger.error("====>Begin execution of  getInvoiceDetails====> ");
		List<Invoice> invoiceData = null;
		ResponseEntity<?> results = null;
		try{
			
			invoiceData = reportService.getInvoiceDetails(strtDate, endDate);
			if(invoiceData != null && invoiceData.size() >0){
				results = new ResponseEntity<>(invoiceData, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(invoiceData,HttpStatus.OK);
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting all Invoice Details and error is: {}",e);
			return results;
		}
		return results;
	}
	
	/**
	 * Get Top customers details based on provided date range
	 * @param strtDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/getTopCustomer/{strtDate}/{endDate}")
	public ResponseEntity<?> getTopCustomers(@PathVariable("strtDate") String strtDate,@PathVariable("endDate") String endDate){
		logger.error("====>Begin execution of  getTopCustomers====> ");
		List<Invoice> invoiceData = null;
		ResponseEntity<?> results = null;
		try{
			invoiceData = reportService.getTopCustomers(strtDate, endDate);
			if(invoiceData != null && invoiceData.size() >0){
				results = new ResponseEntity<>(invoiceData, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(invoiceData,HttpStatus.OK);
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting Top customer Details and error is: {}",e);
			return results;
		}
		return results;
	}
	
	/**
	 * Get ticket details for provided date range
	 * @param strtDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/getTickets/{strtDate}/{endDate}")
	public ResponseEntity<?> getTicketDetails(@PathVariable("strtDate") String strtDate,@PathVariable("endDate") String endDate){
		logger.error("====>Begin execution of  getTicketDetails====> ");
		List<TicketBean> ticketsList = null;
		ResponseEntity<?> results = null;
		try{
			
			ticketsList = reportService.getAllTickets(strtDate, endDate);
			if(ticketsList != null && ticketsList.size() >0){
				results = new ResponseEntity<>(ticketsList, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(ticketsList,HttpStatus.OK);
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting ticket Details and error is: {}",e);
			return results;
		}
		return results;
	}
}

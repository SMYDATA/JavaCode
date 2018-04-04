package com.smydata.businessplan.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.businessplan.service.InvoiceService;
import com.smydata.registration.model.Invoice;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class InvoiceController {

	@Autowired
	InvoiceService invoiceService;
	
	private static final Logger logger = LoggerFactory.getLogger(InvoiceController.class);
	
	@GetMapping("/customerdetail/{mobile}")
	public Invoice getCustomerDetail(@PathVariable("mobile") String mobile){
		
		logger.info("***Begin Execution of getCustomerDetail***");
		Invoice invoice = null;
		try{
			if(mobile == null)
				return null;
			
			invoice = invoiceService.findCustomer(mobile);
		}
		catch(Exception e){
			logger.error("Error occured while getting customerdetails:: "+e);
		}
		
		return invoice;
	}
}

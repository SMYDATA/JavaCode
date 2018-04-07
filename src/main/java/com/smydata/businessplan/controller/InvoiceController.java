package com.smydata.businessplan.controller;

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

import com.smydata.businessplan.service.InvoiceDetailService;
import com.smydata.businessplan.service.InvoiceService;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.InvoiceDetail;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class InvoiceController {

	@Autowired
	InvoiceService invoiceService;
	
	@Autowired
	InvoiceDetailService invoiceDetailService;
	
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
	
	@PostMapping("/savecustomerdetail")
	public Invoice saveCustomerDetail(@RequestBody Invoice invoice){
		
		logger.info("***Begin Execution of saveCustomerDetail***");
		try{
			if(invoice != null){
				invoice = invoiceService.saveCustomer(invoice);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving customerdetails:: "+e);
		}
		
		return invoice;
	}
	
	@PostMapping("/saveinvoicedetail")
	public InvoiceDetail saveInvoiceDetails(@RequestBody InvoiceDetail invoiceDetail){
		
		logger.info("***Begin Execution of saveInvoiceDetails***");
		try{
			if(invoiceDetail != null){
				int totalVal = (invoiceDetail.getSubTotal() * invoiceDetail.getDiscount())/100;
				invoiceDetail.setTotal(totalVal);
				invoiceDetail = invoiceDetailService.saveInvoiceDetails(invoiceDetail);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving Invoice details:: "+e);
		}
		
		return invoiceDetail;
	}
}

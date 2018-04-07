package com.smydata.businessplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.businessplan.repository.InvoiceRepository;
import com.smydata.registration.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	InvoiceRepository invoiceRepository;
	
	@Override
	public Invoice findCustomer(String mobileNo) {
		return invoiceRepository.findByCustomerMobile(mobileNo);
	}

	@Override
	public Invoice saveCustomer(Invoice invoice) {
		return invoiceRepository.save(invoice);
	}

}

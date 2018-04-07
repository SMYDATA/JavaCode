package com.smydata.businessplan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.businessplan.repository.InvoiceDetailRepository;
import com.smydata.registration.model.InvoiceDetail;

@Service
public class InvoiceDetailServiceImpl implements InvoiceDetailService {

	@Autowired
	InvoiceDetailRepository invoiceDetailRepository;
	
	public InvoiceDetailServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public InvoiceDetail saveInvoiceDetails(InvoiceDetail invoiceDetail) {
		// TODO Auto-generated method stub
		return invoiceDetailRepository.save(invoiceDetail);
	}

}

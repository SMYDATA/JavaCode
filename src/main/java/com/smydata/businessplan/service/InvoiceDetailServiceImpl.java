package com.smydata.businessplan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.businessplan.repository.InvoiceDetailRepository;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.InvoiceDetail;

@Service
public class InvoiceDetailServiceImpl implements InvoiceDetailService {

	@Autowired
	InvoiceDetailRepository invoiceDetailRepository;
	
	public InvoiceDetailServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Invoice saveInvoiceDetails(Invoice invoice) {
		return invoiceDetailRepository.save(invoice);
	}

	@Override
	public List<Invoice> getInvoice(String mobile) {
		return invoiceDetailRepository.findByUserMobile(mobile);
	}

	@Override
	public Invoice getInvoiceDetails(Integer invId) {
		return invoiceDetailRepository.findByInvId(invId);
	}

}

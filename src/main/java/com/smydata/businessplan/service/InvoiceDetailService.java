package com.smydata.businessplan.service;

import java.util.List;

import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.InvoiceDetail;

public interface InvoiceDetailService {
	Invoice saveInvoiceDetails(Invoice invoice);
	List<Invoice> getInvoice(String mobile);
	Invoice getInvoiceDetails(Integer invId);
}

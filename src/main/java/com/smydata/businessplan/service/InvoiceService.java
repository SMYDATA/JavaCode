package com.smydata.businessplan.service;

import com.smydata.registration.model.Invoice;

public interface InvoiceService {

	Invoice findCustomer(String mobileNo);
	Invoice saveCustomer(Invoice invoice);
}

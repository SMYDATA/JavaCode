package com.smydata.report.service;

import java.util.List;

import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.User;

public interface ReportService {
	List<User> getAllCustomers(String startDate,String endDate);
	List<Payable> getAllPayablesReceivables(String startDate,String endDate);
	List<Invoice> getInvoiceDetails(String startDate,String endDate);

}

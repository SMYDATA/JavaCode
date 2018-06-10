package com.smydata.report.service;

import java.util.List;

import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.TicketBean;
import com.smydata.registration.model.User;

public interface ReportService {
	List<User> getAllCustomers(String startDate,String endDate);
	List<Payable> getAllPayablesReceivables(String action,String startDate,String endDate);
	List<Invoice> getInvoiceDetails(String startDate,String endDate);
	List<TicketBean>getAllTickets(String startDate,String endDate);
	List<Invoice> getTopCustomers(String startDate,String endDate);
}

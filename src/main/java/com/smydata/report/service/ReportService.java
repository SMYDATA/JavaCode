package com.smydata.report.service;

import java.util.List;

import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.Receivable;
import com.smydata.registration.model.TicketBean;
import com.smydata.registration.model.User;

public interface ReportService {
	List<User> getAllCustomers(String startDate,String endDate);
	List<Payable> getAllPayables(long businessId , String startDate,String endDate);
	List<Receivable> getAllReceivables(long businessId , String startDate,String endDate);
	List<Invoice> getInvoiceDetails(String startDate,String endDate,long businessId);
	List<TicketBean>getAllTickets(long businessId,String startDate,String endDate);
	List<Invoice> getTopCustomers(long businessId,String startDate,String endDate);
}

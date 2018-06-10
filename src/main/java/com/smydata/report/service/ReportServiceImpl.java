package com.smydata.report.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.TicketBean;
import com.smydata.registration.model.User;

@Service
public class ReportServiceImpl implements ReportService {

	@Autowired
	JdbcTemplate JdbcTemplate;
	
	private static final Logger logger = LoggerFactory.getLogger(ReportServiceImpl.class);
	
	@Override
	public List<User> getAllCustomers(String startDate, String endDate) {
		List<User> usersList = null;
		logger.info("====>Begin execution of  getAllCustomers====> ");
		try{
			usersList = JdbcTemplate.query("SELECT USER_MOBILE,USER_NAME,EMAIL,ADDRESS FROM USER WHERE CREATE_DATE BETWEEN ? AND ? ",new Object[]{startDate,endDate},new BeanPropertyRowMapper<User>(User.class));
		}
		catch(Exception e){
			logger.error("Error occured while getting all customer Details and error is: {}",e);
		}
		return usersList;
	}

	@Override
	public List<Payable> getAllPayablesReceivables(String action,String startDate, String endDate) {
		List<Payable> payableList = null;
		logger.info("====>Begin execution of  getAllPayablesReceivables====> ");
		try{
			payableList = JdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,DESCRIPTION,MOBILE FROM PAYABLE_RECEIVABLE WHERE CODE = ? AND CREATE_DATE BETWEEN ? AND ? ",new Object[]{action,startDate,endDate},new BeanPropertyRowMapper<Payable>(Payable.class));
		}
		catch(Exception e){
			logger.error("Error occured while getting Payables/Receivables and error is: {}",e);
		}
		logger.info("====>End execution of  getAllPayablesReceivables====> ");
		return payableList;
	}

	@Override
	public List<Invoice> getInvoiceDetails(String startDate, String endDate) {
		logger.info("====>Begin execution of  getInvoiceDetails====> ");
		List<Invoice> invoiceList = null;
		try{
			invoiceList = JdbcTemplate.query("SELECT INVOICE_ID AS INVID,TOTAL,DISCOUNT,EMAIL,USER_MOBILE,USER_NAME FROM INVOICE WHERE CREATE_DATE BETWEEN ? AND ? ",new Object[]{startDate,endDate},new BeanPropertyRowMapper<Invoice>(Invoice.class));
		}
		catch(Exception e){
			logger.error("Error occured while getting Invoice Details and error is: {}",e);
		}
		logger.info("====>End execution of  getInvoiceDetails====> ");
		return invoiceList;
	}

	@Override
	public List<TicketBean> getAllTickets(String startDate, String endDate) {
		logger.info("====>Begin execution of  getAllTickets====> ");
		List<TicketBean> ticketList = null;
		try{
			ticketList = JdbcTemplate.query("SELECT TICKET_ID,DESCRIPTION,SUBJECT,CREATE_DATE FROM TICKETS WHERE CREATE_DATE BETWEEN ? AND ? ",new Object[]{startDate,endDate},new BeanPropertyRowMapper<TicketBean>(TicketBean.class));
		}
		catch(Exception e){
		logger.error("Error occured while getting ticket detailes and error is: {}",e);	
		}
		logger.info("====>End execution of  getAllTickets====> ");
		 return ticketList;
	}

	@Override
	public List<Invoice> getTopCustomers(String startDate,String endDate) {
		logger.info("====>Begin execution of  getTopCustomers====> ");
		List<Invoice> invoiceList = null;
		try{
			invoiceList = JdbcTemplate.query("SELECT INVOICE_ID AS INVID,TOTAL AS BV,DISCOUNT,EMAIL,USER_MOBILE,USER_NAME FROM INVOICE WHERE CREATE_DATE BETWEEN ? AND ? ",new Object[]{startDate,endDate},new BeanPropertyRowMapper<Invoice>(Invoice.class));
		}
		catch(Exception e){
		logger.error("Error occured while getting Top Customer detailes and error is: {}",e);	
		}
		logger.info("====>End execution of  getTopCustomers====> ");
		return invoiceList;
	}

}

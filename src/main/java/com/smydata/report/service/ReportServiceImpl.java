package com.smydata.report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.User;

@Service
public class ReportServiceImpl implements ReportService {

	@Autowired
	JdbcTemplate JdbcTemplate;
	
	@Override
	public List<User> getAllCustomers(String startDate, String endDate) {
		return JdbcTemplate.query("SELECT USER_MOBILE,NAME,EMAIL,ADDRESS FROM USER WHERE CREATE_DATE BETWEEN ? AND ? ",new Object[]{startDate,endDate},new BeanPropertyRowMapper<User>(User.class));
	}

	@Override
	public List<Payable> getAllPayablesReceivables(String startDate,
			String endDate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Invoice> getInvoiceDetails(String startDate, String endDate) {
		// TODO Auto-generated method stub
		return null;
	}

}

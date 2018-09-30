package com.smydata.payable.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.smydata.payable.repository.PayableRepository;
import com.smydata.registration.model.Payable;

@Service
public class PayableServiceImpl implements PayableService{
	
	@Autowired
	PayableRepository payableRepository;
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public List<Payable> saveOwnerPayables(List<Payable> payables) {
		return payableRepository.saveAll(payables);
		
	}

	@Override
	public List<Payable> getUserPayables(String userMobile, long businessId) {
		return jdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,CREATE_DATE,MOBILE FROM PAYABLE WHERE MOBILE = ? AND BUSINESS_DETAIL_ID = ?",new Object[]{userMobile,businessId},new BeanPropertyRowMapper<Payable>(Payable.class));
	}

	@Override
	public void deletePaidInvoice(List<Payable> payables) {
		payableRepository.deleteAll(payables);		
	}

	@Override
	public List<Payable> getPayables(long businessId) {
		return payableRepository.findByBusinessDetailId(businessId);
	}
}

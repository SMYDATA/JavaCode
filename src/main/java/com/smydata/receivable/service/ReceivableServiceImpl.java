package com.smydata.receivable.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.smydata.receivable.repository.ReceivableRepository;
import com.smydata.registration.model.Receivable;

@Service
public class ReceivableServiceImpl implements ReceivableService {

	@Autowired
	ReceivableRepository receivableRepository;
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public List<Receivable> saveReceivables(List<Receivable> receivables) {
		return receivableRepository.saveAll(receivables);
	}

	@Override
	public List<Receivable> getUserReceivables(String userMobile, long businessId) {
		return jdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,CREATE_DATE,MOBILE FROM RECEIVABLE WHERE MOBILE = ? AND BUSINESS_DETAIL_ID = ?",new Object[]{userMobile,businessId},new BeanPropertyRowMapper<Receivable>(Receivable.class));
	}
	
	@Override
	public List<Receivable> getReceivables(long businessId) {
		return receivableRepository.findByBusinessDetailId(businessId);
	}

	@Override
	public void deletePaidReceivables(List<Receivable> receivables) {
		receivableRepository.deleteAll(receivables);
	}

}

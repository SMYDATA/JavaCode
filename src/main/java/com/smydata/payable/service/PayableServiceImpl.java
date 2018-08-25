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
	JdbcTemplate JdbcTemplate;

	@Override
	public List<Payable> saveOwnerPayables(List<Payable> payables) {
		return payableRepository.saveAll(payables);
		
	}

	@Override
	public List<Payable> getOwnerPayables(String userMobile, String code) {
		return JdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,CREATE_DATE,INVOICE_IMAGE,MOBILE FROM PAYABLE_RECEIVABLE WHERE MOBILE = ? AND CODE = ?",new Object[]{userMobile,code},new BeanPropertyRowMapper<Payable>(Payable.class));
	}

	@Override
	public void deletePaidInvoice(List<Payable> payables) {
		payableRepository.deleteAll(payables);		
	}

	@Override
	public List<Payable> getPayablesByOwnerMobile(String boMobile, String code) {
		return JdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,CREATE_DATE,DESCRIPTION AS DESC,INVOICE_IMAGE,MOBILE,BO_MOBILE FROM PAYABLE_RECEIVABLE WHERE BO_MOBILE = ? AND CODE = ?",new Object[]{boMobile,code},new BeanPropertyRowMapper<Payable>(Payable.class));
	}

}

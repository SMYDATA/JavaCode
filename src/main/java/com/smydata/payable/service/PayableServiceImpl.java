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
	public void saveOwnerPayables(List<Payable> payables) {
		payableRepository.saveAll(payables);
		
	}

	@Override
	public List<Payable> getOwnerPayables(String mobile, String code) {
		// TODO Auto-generated method stub
		return JdbcTemplate.query("SELECT INVOICE_NUMBER,AMOUNT,CREATE_DATE,INVOICE_IMAGE,MOBILE FROM PAYABLE_RECEIVABLE WHERE MOBILE = ? AND CODE = ?",new Object[]{mobile,code},new BeanPropertyRowMapper<Payable>(Payable.class));
//		return payableRepository.findByMobile(mobile);
	}

	@Override
	public void deletePaidInvoice(List<Payable> payables) {
		payableRepository.deleteAll(payables);		
	}

}

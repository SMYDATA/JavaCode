package com.smydata.payable.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return JdbcTemplate.queryForList("SELECT INVOICE_NUMBER,AMOUNT,DATE,INVOICE_IMAGE FROM PAYABLE WHERE MOBILE = ? AND CODE = ?",new Object[]{mobile,code},Payable.class);
//		return payableRepository.findByMobile(mobile);
	}

}

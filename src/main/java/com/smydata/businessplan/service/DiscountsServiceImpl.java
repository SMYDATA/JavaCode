package com.smydata.businessplan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smydata.businessplan.repository.DiscountsRepository;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Payable;

@Service
@Transactional
public class DiscountsServiceImpl implements DiscountsService {
	
	@Autowired
	DiscountsRepository discountsRepository;

	@Autowired
	JdbcTemplate JdbcTemplate;

	@Override
	public List<Discounts> saveDiscounts(List<Discounts> discounts) {
			return discountsRepository.saveAll(discounts);
	}

	@Override
	public List<Discounts> getDiscountDetails(String mobile, long businessId) {
//		return discountsRepository.findByMobile(mobile);
		return JdbcTemplate.query("SELECT DISCOUNT_ID ,DISCOUNT,ENABLE ,ENABLE_DISCOUNT ,END_DATE ,MAX_AMOUNT ,MIN_AMOUNT ,MOBILE ,START_DATE FROM DISCOUNTS WHERE MOBILE = ? AND BUSINESS_DETAIL_ID = ?",new Object[]{mobile,businessId},new BeanPropertyRowMapper<Discounts>(Discounts.class));
	}

	@Override
	public void deleteDiscounts(String mobile) {
		discountsRepository.deleteByMobile(mobile);
	}

}

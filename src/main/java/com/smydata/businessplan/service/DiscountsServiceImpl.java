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
	public List<Discounts> getDiscountDetails(long businessId) {
		return discountsRepository.findByBusinessDetailId(businessId);
	}

	@Override
	public void deleteDiscounts(long businessId) {
		discountsRepository.deleteByBusinessDetailId(businessId);
	}

}

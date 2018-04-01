package com.smydata.businessplan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smydata.businessplan.repository.DiscountsRepository;
import com.smydata.registration.model.Discounts;

@Service
@Transactional
public class DiscountsServiceImpl implements DiscountsService {
	
	@Autowired
	DiscountsRepository discountsRepository;

	@Override
	public List<Discounts> saveDiscounts(List<Discounts> discounts) {
			return discountsRepository.saveAll(discounts);
	}

	@Override
	public List<Discounts> getDiscountDetails(String mobile) {
		return discountsRepository.findByMobile(mobile);
	}

	@Override
	public void deleteDiscounts(String mobile) {
		discountsRepository.deleteByMobile(mobile);
	}

}

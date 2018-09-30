package com.smydata.businessplan.service;

import java.util.List;

import com.smydata.registration.model.Discounts;

public interface DiscountsService {

	List<Discounts> saveDiscounts(List<Discounts> discounts);
	List<Discounts> getDiscountDetails(long businessId);
	void deleteDiscounts(long businessId);
}

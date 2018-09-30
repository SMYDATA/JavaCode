package com.smydata.businessplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Discounts;

public interface DiscountsRepository extends JpaRepository<Discounts,String> {
	List<Discounts> findByMobile(String mobileNumber);
	List<Discounts> findByBusinessDetailId(long businessId);
	void deleteByBusinessDetailId(long businessId);

}

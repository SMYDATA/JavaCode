package com.smydata.businessplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Rewards;

public interface RewardsRepository extends JpaRepository<Rewards,String> {
	Rewards findByMobile(String mobileNumber);
	List<Rewards> findByBusinessDetailId(long businessId);
}

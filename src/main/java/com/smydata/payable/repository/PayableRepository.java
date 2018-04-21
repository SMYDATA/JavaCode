package com.smydata.payable.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Payable;


public interface PayableRepository extends JpaRepository<Payable,Long> {
	List<Payable> findByMobile(String mobileNumber);
}

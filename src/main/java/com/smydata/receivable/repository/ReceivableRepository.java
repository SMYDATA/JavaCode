package com.smydata.receivable.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.smydata.registration.model.Receivable;

public interface ReceivableRepository extends JpaRepository<Receivable,Long> {
	List<Receivable> findByMobile(String mobileNumber);
	List<Receivable> findByBusinessDetailId(long businessId);
}

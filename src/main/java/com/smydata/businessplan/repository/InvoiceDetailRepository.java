package com.smydata.businessplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Invoice;

public interface InvoiceDetailRepository extends JpaRepository<Invoice,Integer> {
	public List<Invoice> findByUserMobile(String userMobile);
	public Invoice findByInvId(Integer invId);

}

package com.smydata.businessplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Invoice;

public interface InvoiceDetailRepository extends JpaRepository<Invoice,Integer> {

}

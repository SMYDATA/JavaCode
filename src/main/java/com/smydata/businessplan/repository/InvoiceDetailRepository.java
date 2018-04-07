package com.smydata.businessplan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.InvoiceDetail;

public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetail,Long> {

}

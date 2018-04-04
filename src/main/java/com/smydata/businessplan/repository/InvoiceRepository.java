package com.smydata.businessplan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice,String> {
	Invoice findByCustomerMobile(String mobileNumber);

}

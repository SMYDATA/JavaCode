package com.smydata.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.CustomerReceivable;

public interface CustomerReceivableRepository extends JpaRepository<CustomerReceivable,Long> {

}

package com.smydata.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.CustomerPayable;

public interface CustomerPayableRepository extends JpaRepository<CustomerPayable,Long>{

}

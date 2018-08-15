package com.smydata.customer.service;

import java.util.List;

import com.smydata.registration.model.CustomerPayable;
import com.smydata.registration.model.CustomerReceivable;

public interface CustomerService {
	List<CustomerPayable> getCustPayables();
	List<CustomerPayable> addCustPayables(List<CustomerPayable> customerPayables);
	List<CustomerReceivable> getCustReceivables();
	List<CustomerReceivable> addCustRecevables(List<CustomerReceivable> customerReceivables);
	
}

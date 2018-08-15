package com.smydata.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.customer.repository.CustomerPayableRepository;
import com.smydata.customer.repository.CustomerReceivableRepository;
import com.smydata.registration.model.CustomerPayable;
import com.smydata.registration.model.CustomerReceivable;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerPayableRepository customerPayableRepository;
	
	@Autowired
	private CustomerReceivableRepository customerReceivableRepository;
	
	public CustomerServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<CustomerPayable> getCustPayables() {
		return customerPayableRepository.findAll();
	}

	@Override
	public List<CustomerPayable> addCustPayables(List<CustomerPayable> customerPayables) {
		return customerPayableRepository.saveAll(customerPayables);
	}

	@Override
	public List<CustomerReceivable> getCustReceivables() {
		return customerReceivableRepository.findAll();
	}

	@Override
	public List<CustomerReceivable> addCustRecevables(List<CustomerReceivable> customerReceivables) {
		return customerReceivableRepository.saveAll(customerReceivables);
	}

}

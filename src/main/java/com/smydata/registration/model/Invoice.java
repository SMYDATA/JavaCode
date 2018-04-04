package com.smydata.registration.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Invoice {
	
	@Id
	private  String customerMobile;
	
	private String customerName;
	
	private String email;
	
	private String address;
	

	public Invoice() {
		// TODO Auto-generated constructor stub
	}


	public String getCustomerMobile() {
		return customerMobile;
	}


	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
	}


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	

}

package com.smydata.registration.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Payable {

	private String mobile;
	private Date date;
	@Id
	private long invoiceNumber;
	private double amount;
	private byte[] invoiceImage;
	private String code;
	public Payable() {
		// TODO Auto-generated constructor stub
	}
	
	
	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public long getInvoiceNumber() {
		return invoiceNumber;
	}
	public void setInvoiceNumber(long invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public byte[] getInvoiceImage() {
		return invoiceImage;
	}
	public void setInvoiceImage(byte[] invoiceImage) {
		this.invoiceImage = invoiceImage;
	}
	
	

}

package com.smydata.registration.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Null;


@Table(name="Payable_Receivable")
@Entity
public class Payable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String mobile;
	private Date date;
	@Id
	private int invoiceNumber;
	private double amount;
	private double received;
	@Null
	private byte[] invoiceImage;
	@Column(name="description")
	private String desc;
	private String code;
	public Payable() {
		// TODO Auto-generated constructor stub
	}
	
	public double getReceived() {
		return received;
	}


	public void setReceived(double received) {
		this.received = received;
	}


	public String getDesc() {
		return desc;
	}


	public void setDesc(String desc) {
		this.desc = desc;
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
	
	public int getInvoiceNumber() {
		return invoiceNumber;
	}


	public void setInvoiceNumber(int invoiceNumber) {
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

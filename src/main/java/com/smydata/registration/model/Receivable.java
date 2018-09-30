package com.smydata.registration.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="receivable")
@Entity
public class Receivable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7133600846703889164L;
	@Column(name="bo_mobile")
	private String boMobile;//Business Owner mobile
	@Column(name="mobile")
	private String mobile;//user mobile
	@Column(name="create_date")
	private Date createDate;
	@Id
	@Column(name="invoice_number")
	private int invoiceNumber;
	@Column(name="amount")
	private double amount;
	@Column(name="received")
	private double received;
	@Column(name="description")
	private String desc;
	@Column(name="business_detail_id")
	private long businessDetailId;
	
	public Receivable() {
		super();
	}
	
	public String getBoMobile() {
		return boMobile;
	}
	public void setBoMobile(String boMobile) {
		this.boMobile = boMobile;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
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
	public long getBusinessDetailId() {
		return businessDetailId;
	}
	public void setBusinessDetailId(long businessDetailId) {
		this.businessDetailId = businessDetailId;
	}
	
}

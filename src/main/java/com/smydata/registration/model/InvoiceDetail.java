package com.smydata.registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class InvoiceDetail {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="invDetail_id")
	private long invDetailId;
	@Column(name="item_name")
	private String item;
	private int quantity;
	private int rate;
	private int discount;
	private int creditAmount;
	@Column(name="invoice_id")
	private Integer invId;
	
	public InvoiceDetail() {
		
	}
	
	public long getInvDetailId() {
		return invDetailId;
	}
	public void setInvDetailId(long invDetailId) {
		this.invDetailId = invDetailId;
	}


	public Integer getInvId() {
		return invId;
	}


	public void setInvId(Integer invId) {
		this.invId = invId;
	}
	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public int getCreditAmount() {
		return creditAmount;
	}

	public void setCreditAmount(int creditAmount) {
		this.creditAmount = creditAmount;
	}

	
	

}

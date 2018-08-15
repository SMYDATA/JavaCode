package com.smydata.registration.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer_receivable")
public class CustomerReceivable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4219307833425435672L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="receivable_id")
	private Long receivable_id;
	@Column(name="category")
	private String category;
	@Column(name="name")
	private String name;
	@Column(name="amount")
	private int amount;
	@Column(name="payment")
	private String payment;
	public CustomerReceivable() {
		// TODO Auto-generated constructor stub
	}
	public Long getReceivable_id() {
		return receivable_id;
	}
	public void setReceivable_id(Long receivable_id) {
		this.receivable_id = receivable_id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}

	
}

package com.smydata.registration.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer_payable")
public class CustomerPayable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5705660342148481808L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="payable_id")
	private Long payableId;
	@Column(name="category")
	private String category;
	@Column(name="name")
	private String name;
	@Column(name="start_date")
	private Date startDate;
	@Column(name="due_date")
	private Date dueDate;
	@Column(name="end_date")
	private Date endDate;
	@Column(name="repeats")
	private String repeats;
	@Column(name="amount")
	private int amount;
	public CustomerPayable() {
		// TODO Auto-generated constructor stub
	}
	public Long getPayableId() {
		return payableId;
	}
	public void setPayableId(Long payableId) {
		this.payableId = payableId;
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
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getRepeats() {
		return repeats;
	}
	public void setRepeats(String repeats) {
		this.repeats = repeats;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}

}

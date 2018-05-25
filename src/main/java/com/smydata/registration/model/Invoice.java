package com.smydata.registration.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Invoice {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="invoice_id")
	private Integer invId;
	@Column(name="sub_total")
	private double subTotal;
	@Column(name="total")
	private double total;
	@Column(name="discount")
	private double discount;
	private Timestamp createDate;
	private String userName;
	private String userMobile;
	private String email;
	private String address;
	private int rewards;
	private int credit;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="invoice_id",referencedColumnName = "invoice_id")
	private List<InvoiceDetail> invoiceDetail;
	
	public Invoice() {
		super();
	}
	
	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	public int getRewards() {
		return rewards;
	}

	public void setRewards(int rewards) {
		this.rewards = rewards;
	}
	public double getSubTotal() {
		return subTotal;
	}


	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}


	public double getDiscount() {
		return discount;
	}


	public void setDiscount(double discount) {
		this.discount = discount;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
	}


	public String getUserMobile() {
		return userMobile;
	}


	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
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


	public Timestamp getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public List<InvoiceDetail> getInvoiceDetail() {
		return invoiceDetail;
	}

	public void setInvoiceDetail(List<InvoiceDetail> invoiceDetail) {
		this.invoiceDetail = invoiceDetail;
	}

	public Integer getInvId() {
		return invId;
	}

	public void setInvId(Integer invId) {
		this.invId = invId;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	
}

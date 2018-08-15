package com.smydata.registration.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Business_Detail")
public class BusinessDetail implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Business_Detail_id")
	private long BusinessDetailId;
	/*@Column(name="mobile_number")
	private String mobile;*/
	@Column(name="registration_id")
	private Long registrationId;
	@Column(name="company_name")
	private String companyName;
	@Column(name="business_address")
	private String businessAddress;
	@Column(name="pinCode")
	private String pinCode;
	@Column(name="city")
	private String city;
	@Column(name="state")
	private String state;
	@Column(name="country")
	private String country;
	@Column(name="website")
	private String website;
	@Column(name="category")
	private String category;
	@Column(name="reg_proof_id")
	private String regProof;
	@Column(name="reg")
	private String reg;
	
	public BusinessDetail() {
		super();
	}
	public long getBusinessDetailId() {
		return BusinessDetailId;
	}
	public void setBusinessDetailId(long businessDetailId) {
		BusinessDetailId = businessDetailId;
	}
	
	public Long getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(Long registrationId) {
		this.registrationId = registrationId;
	}
	/*public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}*/
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getBusinessAddress() {
		return businessAddress;
	}
	public void setBusinessAddress(String businessAddress) {
		this.businessAddress = businessAddress;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getRegProof() {
		return regProof;
	}
	public void setRegProof(String regProof) {
		this.regProof = regProof;
	}
	public String getReg() {
		return reg;
	}
	public void setReg(String reg) {
		this.reg = reg;
	}
	
	
}

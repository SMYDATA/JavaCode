package com.smydata.registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "registration")
public class Registration {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long registrationid;
	@Column(name="owner_reg_id")
	private long ownerRegId;
	@Column(name="companyname")
	private String companyName;
	@Column(name="ownername")
	private String ownerName;
	@Column(name="mobilenumber")
	private String mobile;
	@Column(name="password")
	private String password;
	@Column(name="email")
	private String email;
	@Column(name="businessaddress")
	private String businessAddress;
	@Column(name="pincode")
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
	
	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public long getOwnerRegId() {
		return ownerRegId;
	}
	public void setOwnerRegId(long ownerRegId) {
		this.ownerRegId = ownerRegId;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getRegProof() {
		return regProof;
	}
	public void setRegProof(String regProof) {
		this.regProof = regProof;
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
	public String getReg() {
		return reg;
	}
	public void setReg(String reg) {
		this.reg = reg;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getRegistrationid() {
		return registrationid;
	}
	public void setRegistrationid(long registrationid) {
		this.registrationid = registrationid;
	}
	public String getBusinessAddress() {
		return businessAddress;
	}
	public void setBusinessAddress(String businessAddress) {
		this.businessAddress = businessAddress;
	}
	

}

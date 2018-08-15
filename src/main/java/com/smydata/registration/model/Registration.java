package com.smydata.registration.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "registration")
public class Registration implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="registration_id")
	private Long registrationId;
	@Column(name="owner_name")
	private String ownerName;
	@Column(name="mobile_number")
	private String mobile;
	@Column(name="password")
	private String password;
	@Column(name="email")
	private String email;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="registration_id",referencedColumnName = "registration_id")
	private List<BusinessDetail> businessDetails = new ArrayList<>();

	public Registration() {
		super();
	}

	
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	public Long getRegistrationId() {
		return registrationId;
	}


	public void setRegistrationId(Long registrationId) {
		this.registrationId = registrationId;
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

	public List<BusinessDetail> getBusinessDetails() {
		return businessDetails;
	}

	public void setBusinessDetails(List<BusinessDetail> businessDetails) {
		this.businessDetails = businessDetails;
	}

}

package com.smydata.registration.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	private  String userMobile;
	
	private String userName;
	
	private String email;
	
	private String address;
	
	private long rewardPoints;
	

	public User() {
		// TODO Auto-generated constructor stub
	}

	public long getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(long rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public String getUserMobile() {
		return userMobile;
	}


	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		this.userName = userName;
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

}
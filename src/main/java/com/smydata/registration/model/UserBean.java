package com.smydata.registration.model;

import java.io.Serializable;
import java.util.List;

public class UserBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private  String userMobile;
	
	private String userName;
	
	private String email;
	
	private String address;
	
	private int rewardPoints;
	
	private int businessVolume;
	
	private List<Discounts> discounts;
	
	private double totalPayable;
	
	private double totalReceivable;

	public double getTotalPayable() {
		return totalPayable;
	}

	public void setTotalPayable(double totalPayable) {
		this.totalPayable = totalPayable;
	}

	public double getTotalReceivable() {
		return totalReceivable;
	}

	public void setTotalReceivable(double totalReceivable) {
		this.totalReceivable = totalReceivable;
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

	public int getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public int getBusinessVolume() {
		return businessVolume;
	}

	public void setBusinessVolume(int businessVolume) {
		this.businessVolume = businessVolume;
	}

	public List<Discounts> getDiscounts() {
		return discounts;
	}

	public void setDiscounts(List<Discounts> discounts) {
		this.discounts = discounts;
	}
	
}

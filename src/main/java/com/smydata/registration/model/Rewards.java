package com.smydata.registration.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Rewards implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	private String mobile;
	private boolean enable;
	private boolean rewardPointEnable;
	private boolean bonusPointEnale;
	private int effectiveAmount;
	private int cashValue;
	private int bonusPoints;
	private Date rewardStartDate;
	private Date rewardEndDate;
	private Date bonusStartDate;
	private Date bonusEndDate;
	
	public Rewards() {
		super();
	}
	

	public int getBonusPoints() {
		return bonusPoints;
	}

	public void setBonusPoints(int bonusPoints) {
		this.bonusPoints = bonusPoints;
	}



	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public boolean isEnable() {
		return enable;
	}


	public void setEnable(boolean enable) {
		this.enable = enable;
	}


	public boolean isRewardPointEnable() {
		return rewardPointEnable;
	}


	public void setRewardPointEnable(boolean rewardPointEnable) {
		this.rewardPointEnable = rewardPointEnable;
	}


	public boolean isBonusPointEnale() {
		return bonusPointEnale;
	}


	public void setBonusPointEnale(boolean bonusPointEnale) {
		this.bonusPointEnale = bonusPointEnale;
	}


	public int getEffectiveAmount() {
		return effectiveAmount;
	}

	public void setEffectiveAmount(int effectiveAmount) {
		this.effectiveAmount = effectiveAmount;
	}

	public int getCashValue() {
		return cashValue;
	}

	public void setCashValue(int cashValue) {
		this.cashValue = cashValue;
	}

	public Date getRewardStartDate() {
		return rewardStartDate;
	}

	public void setRewardStartDate(Date rewardStartDate) {
		this.rewardStartDate = rewardStartDate;
	}

	public Date getRewardEndDate() {
		return rewardEndDate;
	}

	public void setRewardEndDate(Date rewardEndDate) {
		this.rewardEndDate = rewardEndDate;
	}

	public Date getBonusStartDate() {
		return bonusStartDate;
	}

	public void setBonusStartDate(Date bonusStartDate) {
		this.bonusStartDate = bonusStartDate;
	}

	public Date getBonusEndDate() {
		return bonusEndDate;
	}

	public void setBonusEndDate(Date bonusEndDate) {
		this.bonusEndDate = bonusEndDate;
	}
	
}
package com.smydata.registration.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Rewards implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(name="mobile")
	private String mobile;
	@Column(name="enable")
	private boolean enable;
	@Column(name="reward_point_enable")
	private boolean rewardPointEnable;
	@Column(name="bonus_point_enale")
	private boolean bonusPointEnale;
	@Column(name="effective_amount")
	private int effectiveAmount;
	@Column(name="cash_value")
	private int cashValue;
	@Column(name="bonus_points")
	private int bonusPoints;
	@Column(name="reward_start_date")
	private Date rewardStartDate;
	@Column(name="reward_end_date")
	private Date rewardEndDate;
	@Column(name="bonus_start_date")
	private Date bonusStartDate;
	@Column(name="bonus_end_date")
	private Date bonusEndDate;
	@Id
	@Column(name="business_detail_id")
	private long businessDetailId;
	
	public Rewards() {
		super();
	}

	public long getBusinessDetailId() {
		return businessDetailId;
	}


	public void setBusinessDetailId(long businessDetailId) {
		this.businessDetailId = businessDetailId;
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

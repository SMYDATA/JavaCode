package com.smydata.registration.model;

import java.io.Serializable;
import java.util.List;

public class PayableReceivable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private double balAmount;
	private List<Payable> paybleReceivables;
	
	public double getBalAmount() {
		return balAmount;
	}
	public void setBalAmount(double balAmount) {
		this.balAmount = balAmount;
	}
	public List<Payable> getPaybleReceivables() {
		return paybleReceivables;
	}
	public void setPaybleReceivables(List<Payable> paybleReceivables) {
		this.paybleReceivables = paybleReceivables;
	}

}

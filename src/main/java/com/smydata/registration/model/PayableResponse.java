package com.smydata.registration.model;

import java.io.Serializable;
import java.util.List;

public class PayableResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private double balAmount;
	private List<Payable> paybles;
	
	public double getBalAmount() {
		return balAmount;
	}
	public void setBalAmount(double balAmount) {
		this.balAmount = balAmount;
	}
	public List<Payable> getPaybles() {
		return paybles;
	}
	public void setPaybles(List<Payable> paybles) {
		this.paybles = paybles;
	}
}

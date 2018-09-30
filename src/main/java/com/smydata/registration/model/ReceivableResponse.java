package com.smydata.registration.model;

import java.io.Serializable;
import java.util.List;

public class ReceivableResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6728427290054915501L;

	public ReceivableResponse() {
		//Constructor
	}

	private double balAmount;
	private List<Receivable> receivables;
	
	public double getBalAmount() {
		return balAmount;
	}
	public void setBalAmount(double balAmount) {
		this.balAmount = balAmount;
	}
	public List<Receivable> getReceivables() {
		return receivables;
	}
	public void setReceivables(List<Receivable> receivables) {
		this.receivables = receivables;
	}
	
}

package com.smydata.receivable.service;

import java.util.List;

import com.smydata.registration.model.Receivable;

public interface ReceivableService {

	List<Receivable> saveReceivables(List<Receivable> receivables);
	List<Receivable> getUserReceivables(String userMobile,long businessId);
	List<Receivable> getReceivables(long businessId);
	void deletePaidReceivables(List<Receivable> payables);
}

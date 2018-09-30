package com.smydata.payable.service;

import java.util.List;

import com.smydata.registration.model.Payable;

public interface PayableService {

	List<Payable> saveOwnerPayables(List<Payable> payables);
	List<Payable> getUserPayables(String userMobile,long businessId);
	List<Payable> getPayables(long businessId);
	void deletePaidInvoice(List<Payable> payables);
}

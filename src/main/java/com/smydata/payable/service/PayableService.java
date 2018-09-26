package com.smydata.payable.service;

import java.util.List;

import com.smydata.registration.model.Payable;

public interface PayableService {

	List<Payable> saveOwnerPayables(List<Payable> payables);
	List<Payable> getOwnerPayables(String userMobile,String code);
	List<Payable> getPayablesByOwnerMobile(String boMobile,String code, long businessId);
	void deletePaidInvoice(List<Payable> payables);
}

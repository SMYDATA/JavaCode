package com.smydata.payable.service;

import java.util.List;

import com.smydata.registration.model.Payable;

public interface PayableService {

	void saveOwnerPayables(List<Payable> payables);
	List<Payable> getOwnerPayables(String mobile,String code);
}

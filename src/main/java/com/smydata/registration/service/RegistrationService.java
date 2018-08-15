package com.smydata.registration.service;

import java.util.List;

import com.smydata.registration.model.BusinessDetail;
import com.smydata.registration.model.Registration;

public interface RegistrationService {
	Registration saveUser(Registration registration);
	Registration findByMobileNumber(String mobileNumber);
	Registration findBusinessInfoByRegId(Long regstrationId);
	List<Registration> getAllRegisteredDetails();
	List<BusinessDetail> saveBusinessDetails(List<BusinessDetail> businessDetails);
}

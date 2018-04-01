package com.smydata.registration.service;

import java.util.List;

import com.smydata.registration.model.Registration;

public interface RegistrationService {
	public Registration saveUser(Registration registration);
	public List<Registration> findByMobileNumber(String mobileNumber);
}

package com.smydata.registration.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.Registration;
import com.smydata.registration.repository.RegistrationRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	RegistrationRepository registrationRepository;

	@Override
	public Registration saveUser(Registration registration) {
		
		return registrationRepository.save(registration);
		
	}

	@Override
	public List<Registration> findByMobileNumber(String mobileNumber) {
		return registrationRepository.findByMobile(mobileNumber);
	}
	

}

package com.smydata.registration.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.BusinessDetail;
import com.smydata.registration.model.Registration;
import com.smydata.registration.repository.BusinessDetailRepository;
import com.smydata.registration.repository.RegistrationRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	RegistrationRepository registrationRepository;
	
	@Autowired
	BusinessDetailRepository businessDetailRepository;

	@Override
	public Registration saveUser(Registration registration) {
		
		if(registration != null) {
			return registrationRepository.save(registration);
		}
		else return null;
		
	}

	@Override
	public Registration findByMobileNumber(String mobileNumber) {
		return registrationRepository.findByMobile(mobileNumber);
	}

	@Override
	public List<Registration> getAllRegisteredDetails() {
		return registrationRepository.findAll();
	}

	@Override
	public List<BusinessDetail> saveBusinessDetails(List<BusinessDetail> businessDetails) {
		return businessDetailRepository.saveAll(businessDetails);
	}

	@Override
	public Registration findBusinessInfoByRegId(Long regstrationId) {
		return registrationRepository.findByRegistrationId(regstrationId);
	}

	@Override
	public List<Registration> getAllBusinessUsers(String roleType) {
		return registrationRepository.findByRole(roleType);
	}

}

package com.smydata.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
	
	public Registration findByMobile(String mobileNumber);
	public Registration findByRegistrationId(Long regstrationId);

}

package com.smydata.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
	
	public List<Registration> findByMobile(String mobileNumber);

}

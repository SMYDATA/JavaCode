package com.smydata.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.smydata.registration.model.Registration;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
	
	public Registration findByMobile(String mobileNumber);
	public Registration findByRegistrationId(Long regstrationId);
	public List<Registration> findByRole(String role);

}

package com.smydata.user.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.User;

public interface UserRepository extends JpaRepository<User,String> {
	User findByUserMobile(String mobileNumber);
}

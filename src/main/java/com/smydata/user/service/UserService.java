package com.smydata.user.service;

import java.util.List;

import com.smydata.registration.model.User;


public interface UserService {

	User findCustomer(String mobileNo);
	User saveCustomer(User user);
	List<User> getAllUsers();
}

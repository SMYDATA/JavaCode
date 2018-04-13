package com.smydata.user.service;

import com.smydata.registration.model.User;


public interface UserService {

	User findCustomer(String mobileNo);
	User saveCustomer(User user);
}

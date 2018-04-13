package com.smydata.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.User;
import com.smydata.user.respository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public User findCustomer(String mobileNo) {
		return userRepository.findByUserMobile(mobileNo);
	}

	@Override
	public User saveCustomer(User user) {
		return userRepository.save(user);
	}

}

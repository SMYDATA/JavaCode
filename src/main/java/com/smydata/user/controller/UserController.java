package com.smydata.user.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.registration.model.User;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class UserController {

	@Autowired
	UserService UserService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/userData")
	public User getUserData(){
		return new User();
	}
	
	@GetMapping("/getUserDetail/{mobile}")
	public List<User> getUserDetail(@PathVariable("mobile") String mobile){
		
		logger.info("***Begin Execution of getUserDetail***");
		List<User> userData = new ArrayList<User>();
		User user = null;
		try{
			if(mobile == null)
				return userData;
			
			 user = UserService.findCustomer(mobile);
			if(user != null)
				user.setName("Ram");
				user.setAmount("100");
				userData.add(user);
		}
		catch(Exception e){
			logger.error("Error occured while getting user details:: "+e);
		}
		
		return userData;
	}
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User user){
		
		logger.info("***Begin Execution of saveUser***");
		try{
			if(user != null){
				user.setUserMobile("9440717763");
				user = UserService.saveCustomer(user);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user details:: "+e);
		}
		
		return user;
	}

}

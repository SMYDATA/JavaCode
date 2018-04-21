package com.smydata.user.controller;

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
	
	@GetMapping("/userDetail/{mobile}")
	public boolean getUserDetail(@PathVariable("mobile") String mobile){
		
		logger.info("***Begin Execution of getUserDetail***");
		boolean userExist = false;
		try{
			if(mobile == null)
				return false;
			
			User user = UserService.findCustomer(mobile);
			if(user != null)
				userExist = true;
		}
		catch(Exception e){
			logger.error("Error occured while getting user details:: "+e);
		}
		
		return userExist;
	}
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User user){
		
		logger.info("***Begin Execution of saveUser***");
		try{
			if(user != null){
				user = UserService.saveCustomer(user);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user details:: "+e);
		}
		
		return user;
	}

}

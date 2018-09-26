package com.smydata.admin.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.registration.controller.RegistrationController;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.User;
import com.smydata.registration.service.RegistrationService;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AdminController {

	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	@GetMapping("/getBusinessUsers/{userType}")
	public ResponseEntity<?> getBusinessUsers(@PathVariable("userType") String userType){
		logger.info("===>Begin Execution of getBusinessUsers method===>");
		List<Registration> businessUsers = null;
		ResponseEntity<?> results = null;
		try {
			
			businessUsers = registrationService.getAllBusinessUsers(userType);
			if(businessUsers != null && !businessUsers.isEmpty()) {
				logger.info("===> [{}] "+userType+" users found===>",businessUsers.size());
				results = new ResponseEntity<>(businessUsers, HttpStatus.OK);
			} else {
				logger.info("===>"+userType+" users not found===>");
				results = new ResponseEntity<>(businessUsers, HttpStatus.OK);
			}
		} catch(Exception e){
			logger.error("===>Error occured while getting business users and error is:===>",e);
		}
		return results;
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers(){
		
		logger.info("===>Begin Execution of getAllUsers method===>");
		List<User> users = null;
		ResponseEntity<?> results = null;
		try {
			users = userService.getAllUsers();
			if(users != null && !users.isEmpty()) {
				logger.info("===> [{}] users found===>",users.size());
				results = new ResponseEntity<>(users, HttpStatus.OK);
			} else {
				logger.info("===>business users not found===>");
				results = new ResponseEntity<>(users, HttpStatus.OK);
			}
			
		} catch(Exception e){
			logger.error("===>Error occured while getting business users and error is:===>",e);
		}
		return results;
		
	}
	
	
}

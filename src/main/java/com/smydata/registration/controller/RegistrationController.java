package com.smydata.registration.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import com.smydata.registration.model.Registration;
import com.smydata.registration.service.RegistrationService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;
	
	private static final String API_URL = "http://2factor.in/API/V1/7645e41d-242b-11e8-a895-0200cd936042/SMS/%s/%s";
	
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

	@PostMapping("/saveUser/{userFlag}") //userFlag is to identify registration/add/edit
	public Registration saveUser(@PathVariable("userFlag") String userFlag,@RequestBody Registration registration,HttpSession session) {
		logger.info("Begin Execution of saveUser method and userFlag::"+userFlag);
		Registration sessReg = null; 
		try{
			if(session!=null){
				sessReg = (Registration) session.getAttribute("registration");
			}
			long regId = (long) Math.round(Math.random()*100000);
			if(registration != null){
				logger.info("saveUser mobile: "+registration.getMobile());
				if("registration".equalsIgnoreCase(userFlag)){
					registration.setOwnerRegId(regId);	
				} else if("add".equalsIgnoreCase(userFlag)){
					registration.setOwnerRegId(sessReg.getOwnerRegId());
					registration.setMobile(sessReg.getMobile());
					registration.setOwnerName(sessReg.getOwnerName());
				} else if("edit".equalsIgnoreCase(userFlag)){
//					registration.setOwnerRegId(sessReg.getOwnerRegId());
				}
			}
			registration = registrationService.saveUser(registration);
		}
		catch(Exception e){
			logger.error("Error occured while saving user data :"+e);
		}
		
		return registration;
	}
	
	@PostMapping("/loginUser")
	public boolean loginUser(@RequestBody Registration registration,HttpSession session) {
		logger.info("Begin Execution of loginUser method");
		
		try{
			if(session!=null){
				session.removeAttribute("registration");
			}
			if(registration != null){
				logger.info("loginUser mobile123"+registration.getMobile());
				List<Registration> registrationList= registrationService.findByMobileNumber(registration.getMobile());
				
				if(registrationList==null || registrationList.isEmpty()){
					return false;
				}
				session.setAttribute("registration", registrationList.get(0));
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while user loggingin :"+e);
		}
		
		return true;
	}
	
	@GetMapping("/viewMyBusiness")
	public List<Registration> getBusinessDetails(HttpSession session){
		logger.info("Begin Execution of getBusinessDetails method");
		Registration registartion = null;
		List<Registration> registrationList = null;
		try{
			if(session!=null){
				registartion = (Registration) session.getAttribute("registration");
			}
			if(registartion != null){
				logger.info("getBusinessDetails mobile"+registartion.getMobile());
				registrationList = registrationService.findByMobileNumber(registartion.getMobile());
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting business details :"+e);
		}
		
		return registrationList;
	}
	
	@GetMapping("/sendOtp/{mobile}")
	public int sendOtp(@PathVariable("mobile") String mobile,HttpSession session){
		logger.info("Begin Execution of sendOtp method");
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		String url = String.format(API_URL, mobile,otp);
		logger.info("====>>>>>in sendOtp ============>>>>>>>>>>"+url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			if(response != null)
			logger.info("response====>"+response.getStatusCode());
		}
		
		catch(Exception e){
			logger.error("Exception occured in sendOtp====>"+e);
		}
		return otp;
	}
	
	@GetMapping("/resetPwd/{pwd}")
	public void resetPassword(@PathVariable("pwd") String pwd,HttpSession session) {
		logger.info("Begin Execution of resetPassword method");
		Registration registration = null;
		try{
			if(session!=null){
				registration = (Registration) session.getAttribute("registration");
			}
				registration.setPassword(pwd);
				registrationService.saveUser(registration);	
		}
		catch(Exception e){
			logger.error("Exception occured in resetPassword====>"+e);
		}
	}
	
}
package com.smydata.registration.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import com.smydata.model.util.SmydataConstant;
import com.smydata.registration.model.Registration;
import com.smydata.registration.service.RegistrationService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class RegistrationController implements SmydataConstant {

	@Autowired
	private RegistrationService registrationService;
	
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

	/**
	 * This method is used for Business Registration and add new Business and to update business info
	 * @param userFlag
	 * @param registration
	 * @param session
	 * @return
	 */
	@PostMapping("/saveUser/{userFlag}") //userFlag is to identify registration/add/edit
	public ResponseEntity<?> saveUser(@PathVariable("userFlag") String userFlag,@RequestBody Registration registration,HttpSession session) {
		logger.info("Begin Execution of saveUser method and userFlag::"+userFlag);
		Registration sessReg = null;
		ResponseEntity<?> results = null;
		String message = "";
		List<String> messages = new ArrayList<>();
		try{
			if(session!=null){
				sessReg = (Registration) session.getAttribute("registration");
			}
			long regId = (long) Math.round(Math.random()*100000);
			
			if(registration != null){
				logger.info("saveUser mobile: "+registration.getMobile());
				 message = validateData(registration);
				 messages.add(message);
				 if(message != null && message.equalsIgnoreCase(SUCCESS)) {
					 results = new ResponseEntity<>(messages, HttpStatus.OK);
					 if(REGISTRATION.equalsIgnoreCase(userFlag)){
							registration.setOwnerRegId(regId);	
						} else if(ADD.equalsIgnoreCase(userFlag)){
							registration.setOwnerRegId(sessReg.getOwnerRegId());
							registration.setMobile(sessReg.getMobile());
							registration.setOwnerName(sessReg.getOwnerName());
						} 
					Registration savedRegistration = registrationService.saveUser(registration);
					if(savedRegistration !=null){
						 results = new ResponseEntity<>(messages, HttpStatus.OK);
					} else {
						logger.info("Failed to save registration for mobile:[{}] ",registration.getMobile());
						 results = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
					}
				 } else {
					 results = new ResponseEntity<>(messages, HttpStatus.OK/*,HttpStatus.EXPECTATION_FAILED*/);//Need to change in UI Side
				}
				
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user data :"+e);
		}
		
		return results;
	}
	
	private String validateData(Registration registration) {
		logger.info("Begin validating user details");
		List<Registration> registrationList = registrationService.getAllRegisteredDetails();
		if(registrationList != null && registrationList.size() > 0) {
			for(Registration reg :registrationList){
				if (reg.getMobile().equalsIgnoreCase(registration.getMobile())
						&& reg.getEmail().equalsIgnoreCase(registration.getEmail())) {
					return MOBILE_EMAIL_VALIDATION_ERROR;
				} else if (reg.getMobile().equalsIgnoreCase(registration.getMobile())) {
					return MOBILE_VALIDATION_ERROR;
				} else if (registration.getEmail() != null && !registration.getEmail().isEmpty() && reg.getEmail().equalsIgnoreCase(registration.getEmail())) {
					return EMAIL_VALIDATION_ERROR;
				}
			}
			
		}
		logger.info("End validating user details");
		return SUCCESS;
		
	}
	
	@PostMapping("/loginUser")
	public ResponseEntity<?> loginUser(@RequestBody Registration registration,HttpSession session) {
		logger.info("Begin Execution of loginUser method");
		boolean isValidUser = false;
		ResponseEntity<?> results = null;
		try{
			if(session!=null){
				session.removeAttribute("registration");
			}
			if(registration != null){
				logger.info("loginUser mobile123"+registration.getMobile());
				List<Registration> registrationList= registrationService.findByMobileNumber(registration.getMobile());
				
				if(registrationList==null || registrationList.isEmpty()){
					results = new ResponseEntity<>(isValidUser, HttpStatus.NOT_FOUND);
					return results;
				} 
				for(Registration reg: registrationList) {
					if(registration.getMobile().equalsIgnoreCase(reg.getMobile()) && registration.getPassword().equals(reg.getPassword())) {
						isValidUser = true;
						session.setAttribute("registration", reg);
						results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						break;
					}
				}
				
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while user loggingin :"+e);
		}
		
		return results;
	}
	
	@GetMapping("/viewMyBusiness")
	public ResponseEntity<?> getBusinessDetails(HttpSession session){
		logger.info("===>Begin Execution of getBusinessDetails method===>");
		Registration registartion = null;
		ResponseEntity<?> results = null;
		List<Registration> registrationList = null;
		try{
			if(session!=null){
				registartion = (Registration) session.getAttribute("registration");
			}
			if(registartion != null){
				logger.info("===>getBusinessDetails() of BO mobile===>"+registartion.getMobile());
				registrationList = registrationService.findByMobileNumber(registartion.getMobile());
				if(registrationList != null && !registrationList.isEmpty()){
					results = new ResponseEntity<>(registrationList, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(registrationList,HttpStatus.NOT_FOUND);
				}
			}
		}
		catch(Exception e){
			logger.error("Error occured while getting business details :"+e);
		}
		logger.info("===>End Execution of getBusinessDetails method===>");
		return results;
	}
	
	@GetMapping("/sendOtp/{mobile}")
	public ResponseEntity<?> sendOtp(@PathVariable("mobile") String mobile,HttpSession session){
		logger.info("==>Begin Execution of sendOtp method===>");
		ResponseEntity<?> result = null;
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		String url = String.format(API_URL, mobile,otp);
		logger.info("====>>>>>in sendOtp ============>>>>>>>>>>"+url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			if(response != null && response.getStatusCode().equals("200")){
				logger.info("sendOtp API response====>"+response.getStatusCode());
				result = new ResponseEntity<>(otp, HttpStatus.OK);
			} else {
				logger.info("Failed to invoke OTP API====>");
				result = new ResponseEntity<>(otp,HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		catch(Exception e){
			result = new ResponseEntity<>(otp,HttpStatus.INTERNAL_SERVER_ERROR);
			logger.error("Failed to invoke OTP API====>"+e);
		}
		logger.info("==>End Execution of sendOtp method===>");
		return result;
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

package com.smydata.registration.controller;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import com.smydata.model.util.SmydataConstant;
import com.smydata.registration.model.BusinessDetail;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.User;
import com.smydata.registration.service.RegistrationService;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
@CrossOrigin
public class RegistrationController implements SmydataConstant {

	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	UserService userService;
	
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	/**
	 * This method is used for create/add new/update business details
	 * @param action
	 * @param registration
	 * @param session
	 * @return
	 */
	@PostMapping("/saveUser/{action}") //Action is to identify registration/add/edit
	public ResponseEntity<?> saveUser(@PathVariable("action") String action,@RequestBody Registration registration,HttpServletRequest request) {
		logger.info("===>Begin Execution of saveUser method and action::"+action);
		ResponseEntity<?> results = null;
		String message = "";
		Registration sessionReg = null;
		List<String> messages = new ArrayList<>();
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				sessionReg = (Registration) session.getAttribute("registration");
			}
			
			if(registration != null){
				logger.info("saveUser mobile: "+registration.getMobile());
				if(action != null && action.equalsIgnoreCase(EDIT)) {
					message = SUCCESS;
					messages.add(message);
					
				} else {
					 message = validateData(registration);
					 messages.add(message);
				}
				
				 if(message != null && message.equalsIgnoreCase(SUCCESS)) {
						logger.info("==>Validation success===>");
					 if(ADD.equalsIgnoreCase(action) && sessionReg != null){//Add new business
							List<BusinessDetail> businessDetails = registration.getBusinessDetails();
								if(businessDetails != null && !businessDetails.isEmpty()) {
								for(int i=0;i<businessDetails.size();i++) {
									BusinessDetail businessDetail = businessDetails.get(i);
									businessDetail.setRegistrationId(sessionReg.getRegistrationId());//Setting same registration ID of a BO as a BO will have multiple businesses
									businessDetails.set(i, businessDetail);
								}
								List<BusinessDetail> savedBusinessDetail =  registrationService.saveBusinessDetails(businessDetails);//Add new record into BusinessDetail table under the same registration ID
								if(savedBusinessDetail != null) {
									results = new ResponseEntity<>(messages, HttpStatus.OK);
								} else {
									messages.clear();
									messages.add("Failed to Add business Details for BO:"+registration.getMobile());
									 results = new ResponseEntity<>(messages,HttpStatus.OK);
								}
								
								}
						} else { 
							Registration savedRegistration = registrationService.saveUser(registration);//Create new or update business information
							if(savedRegistration !=null){
								 results = new ResponseEntity<>(messages, HttpStatus.OK);
							} else {
								logger.info("Failed to save registration for mobile:[{}] ",registration.getMobile());
								messages.clear();
								messages.add("Failed to save registration for BO:"+registration.getMobile());
								 results = new ResponseEntity<>(messages,HttpStatus.OK);
							}
						}
					
				 } else {
					 results = new ResponseEntity<>(messages, HttpStatus.OK);
				}
				
			} else {
				messages.add("BO entered details are empty");
				results = new ResponseEntity<>(messages, HttpStatus.OK);
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
		if(registrationList != null && !registrationList.isEmpty()) {
			for(Registration reg :registrationList){
				if (reg.getMobile() != null && reg.getEmail() != null
						&& reg.getMobile().equalsIgnoreCase(registration.getMobile())
						&& reg.getEmail().equalsIgnoreCase(registration.getEmail())) {
					return MOBILE_EMAIL_VALIDATION_ERROR;
				} else if (reg.getMobile() != null && !reg.getMobile().trim().isEmpty()
						&& reg.getMobile().equalsIgnoreCase(registration.getMobile())) {
					return MOBILE_VALIDATION_ERROR;
				} else if (reg.getEmail() != null && !reg.getEmail().isEmpty()
						&& reg.getEmail().equalsIgnoreCase(registration.getEmail())) {
					return EMAIL_VALIDATION_ERROR;
				}
			}
			
		}
		logger.info("===>End validating user details===>");
		return SUCCESS;
		
	}
	
	@PostMapping("/loginUser/{loginType}")
	public ResponseEntity<?> loginUser(@RequestBody Registration registration, @PathVariable("loginType") String loginType, HttpServletRequest request) {
		logger.info("Begin Execution of loginUser method");
		boolean isValidUser = false;
		ResponseEntity<?> results = null;
		try{
			HttpSession session = request.getSession();
			/*if(session!=null){
				Enumeration sessionAttributes = session.getAttributeNames();
				while (sessionAttributes.hasMoreElements()) {
					String key = (String) sessionAttributes.nextElement();
					System.out.println("Key: "+key +" vaue:"+session.getValue(key));
				}
				session.removeAttribute("registration");
				Enumeration sessionAttributes1 = session.getAttributeNames();
				while (sessionAttributes1.hasMoreElements()) {
					String key = (String) sessionAttributes1.nextElement();
					System.out.println("after Key: "+key +" vaue:"+session.getValue(key));
				}
			}*/
			if(registration != null && loginType !=null){
				if(BUSINESS.equalsIgnoreCase(loginType)) {
					logger.info("===>login Business owner mobile::"+registration.getMobile()+" and loginType::"+loginType);
					Registration registrationData= registrationService.findByMobileNumber(registration.getMobile());
					
					if(registrationData==null){
						results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						return results;
					} 
					if (registration.getMobile() != null && registration.getPassword() != null
							&& registration.getMobile().equalsIgnoreCase(registrationData.getMobile())
							&& registration.getPassword().equals(registrationData.getPassword())) {
							logger.info("===>login Business owner success for [{}]===>",registration.getMobile());
							isValidUser = true;
							session.setAttribute("registration", registrationData);
							results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						} else {
							logger.info("===>login Business owner failed for [{}]===>",registration.getMobile());
							results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						}
				} else if (INDIVIDUAL.equalsIgnoreCase(loginType)) {
					logger.info("===>login customer mobile::"+registration.getMobile()+" and loginType::"+loginType);
					User user = userService.findCustomer(registration.getMobile());
					if(user != null) {
						if(user.getUserMobile() != null && user.getPassword() != null 
								&& user.getUserMobile().equalsIgnoreCase(registration.getMobile()) 
								&& user.getPassword().equalsIgnoreCase(registration.getPassword())) {
							logger.info("===>Customer login success for [{}]===>",registration.getMobile());
							isValidUser = true;
							results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						}else {
							logger.info("===>Customer login failed for [{}]===>",registration.getMobile());
							results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
						}
					} else {
						results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
					}
				} else {
					logger.info("===>Invalid request::");
					results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
				}
				
				
			} else {
				results = new ResponseEntity<>(isValidUser, HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while user loggingin :"+e);
		}
		
		return results;
	}
	
	@GetMapping("/viewMyBusiness")
	public ResponseEntity<?> getBusinessDetails(HttpServletRequest request){
		logger.info("===>Begin Execution of getBusinessDetails method===>");
		Registration registartion = null;
		ResponseEntity<?> results = null;
		Registration registrationDetails = null;
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				registartion = (Registration) session.getAttribute("registration");
			}
			if(registartion != null){
				logger.info("===>getBusinessDetails() of BO mobile===>"+registartion.getMobile());
				registrationDetails = registrationService.findBusinessInfoByRegId(registartion.getRegistrationId());
				if(registrationDetails != null){
					results = new ResponseEntity<>(registrationDetails, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(registrationDetails,HttpStatus.OK);
				}
			}
		}
		catch(Exception e){
			logger.error("===>Error occured while getting business details :"+e);
		}
		logger.info("===>End Execution of getBusinessDetails method===>");
		return results;
	}
	
	@GetMapping("/sendOtp/{mobile}")
	public ResponseEntity<?> sendOtp(@PathVariable("mobile") String mobile){
		logger.info("==>Begin Execution of sendOtp method===>");
		ResponseEntity<?> result = null;
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		String url = String.format(API_URL, mobile,otp);
		
		logger.info("====>>>>>in sendOtp ============>>>>>>>>>>"+url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			if(response != null && response.getStatusCode().equals(HttpStatus.OK)){
				logger.info("sendOtp API response====>"+response.getStatusCode());
				result = new ResponseEntity<>(otp, HttpStatus.OK);
			} else {
				logger.info("Failed to invoke OTP API====>");
				result = new ResponseEntity<>(otp,HttpStatus.OK);
			}
		}
		
		catch(Exception e){
			result = new ResponseEntity<>(otp,HttpStatus.OK);
			logger.error("Exception occured while invoking OTP API====>"+e);
		}
		logger.info("==>End Execution of sendOtp method===>");
		return result;
	}
	
	@GetMapping("/resetPwd/{pwd}")
	public void resetPassword(@PathVariable("pwd") String pwd,HttpServletRequest request) {
		logger.info("Begin Execution of resetPassword method");
		Registration registration = null;
		try{
			HttpSession session = request.getSession();
			if(session!=null){
				registration = (Registration) session.getAttribute("registration");
			}
			if(registration != null) {
				registration.setPassword(pwd);
				registrationService.saveUser(registration);
			}
		}
		catch(Exception e){
			logger.error("Exception occured in resetPassword====>"+e);
		}
	}
	
}

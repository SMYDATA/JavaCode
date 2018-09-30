package com.smydata.registration.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.smydata.model.util.SmydataConstant;
import com.smydata.registration.model.BusinessDetail;
import com.smydata.registration.model.Registration;
import com.smydata.registration.service.RegistrationService;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes({"registration"})
@CrossOrigin
public class RegistrationController implements SmydataConstant {

	@Autowired
	private RegistrationService registrationService;
	
	@Autowired
	UserService userService;
	
	private HttpSession session = null;
	
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	/**
	 * This method is used for create/add new/update business details
	 * @param action
	 * @param registration
	 * @param session
	 * @return
	 */
	@PostMapping("/saveUser/{action}") //Action is to identify registration/add/edit
	public ResponseEntity<?> saveUser(@PathVariable("action") String action,@RequestBody Registration registration,/*@RequestParam("registration") String registration1, @RequestParam("file") MultipartFile file,*/HttpServletRequest request) {
		logger.info("===>Begin Execution of saveUser method and action::{}",action);
		ResponseEntity<?> results = null;
		String message = "";
		Registration sessionReg = null;
		List<String> messages = new ArrayList<>();
		try{
			session = request.getSession();
			if(session!=null){
				sessionReg = (Registration) session.getAttribute(REGISTRATION);
			}
//			Registration regDetails = mapper.readValue(registration, new TypeReference<Registration>() {});
			if(registration != null){
				logger.info("saveUser mobile: {}",registration.getMobile());
				if(action != null && action.equalsIgnoreCase(EDIT)) {
					message = SUCCESS;
					messages.add(message);
					
				} else {
					 message = validateData(registration);
					 messages.add(message);
				}
				
				 if(SUCCESS.equalsIgnoreCase(message) && !VALIDATION.equalsIgnoreCase(action) ) {
						logger.info("==>Validation success===>");
					 if(ADD.equalsIgnoreCase(action) && sessionReg != null){//Add new business
							List<BusinessDetail> businessDetails = registration.getBusinessDetails();
								if(businessDetails != null && !businessDetails.isEmpty()) {
								for(int i=0;i<businessDetails.size();i++) {
									BusinessDetail businessDetail = businessDetails.get(i);
									businessDetail.setRegistrationId(sessionReg.getRegistrationId());//Setting same registration ID of a BO as a BO will have multiple businesses
									/*if(file != null) {
										businessDetail.setFileContent(file.getBytes());
										businessDetail.setFileName(file.getOriginalFilename());
										businessDetail.setMimetype(file.getContentType());
									}*/
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
							/*List<BusinessDetail> businessDetails = registration.getBusinessDetails();
							if(businessDetails != null && !businessDetails.isEmpty()) {
							for(int i=0;i<businessDetails.size();i++) {
								BusinessDetail businessDetail = businessDetails.get(i);
								if(file != null) {
									businessDetail.setFileContent(file.getBytes());
									businessDetail.setFileName(file.getOriginalFilename());
									businessDetail.setMimetype(file.getContentType());
								}
								businessDetails.set(i, businessDetail);
							  }
							  registration.setBusinessDetails(businessDetails);
							}*/
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
			logger.error("===>Error occured while saving user data and error is:===>",e);
		}
		
		return results;
	}
	
	/**
	 * @param action
	 * @param  This method is used for business registration
	 * @param file
	 * @param request
	 * @return
	 */
	@PostMapping("/saveBusinessUser/{action}") //Action is to identify registration/add/edit
	public ResponseEntity<?> saveBusinessUser(@PathVariable("action") String action,@RequestParam("businessDetails") String registration, @RequestParam("file") MultipartFile file,HttpServletRequest request) {
		logger.info("===>Begin Execution of saveUser method and action::{}",action);
		ResponseEntity<?> results = null;
		Registration sessionReg = null;
		List<String> result = new ArrayList<>();
		try{
			session = request.getSession();
			if(session!=null){
				sessionReg = (Registration) session.getAttribute(REGISTRATION);
			}
			ObjectMapper mapper = new ObjectMapper();
//			Registration regDetails = mapper.readValue(registration, new TypeReference<Registration>() {});
			List<Registration> regData = mapper.readValue(registration, new TypeReference<List<Registration>>() {});
			if(regData != null){
				Registration regDetails = regData.get(0);
				logger.info("saveUser mobile: {}",regDetails.getMobile());
				
					 if(ADD.equalsIgnoreCase(action) && sessionReg != null){//Add new business
							List<BusinessDetail> businessDetails = regDetails.getBusinessDetails();
								if(businessDetails != null && !businessDetails.isEmpty()) {
								for(int i=0;i<businessDetails.size();i++) {
									BusinessDetail businessDetail = businessDetails.get(i);
									businessDetail.setRegistrationId(sessionReg.getRegistrationId());//Setting same registration ID of a BO as a BO will have multiple businesses
									if(file != null) {
										businessDetail.setFileContent(file.getBytes());
										businessDetail.setFileName(file.getOriginalFilename());
										businessDetail.setMimetype(file.getContentType());
									}
									businessDetails.set(i, businessDetail);
								}
								List<BusinessDetail> savedBusinessDetail =  registrationService.saveBusinessDetails(businessDetails);//Add new record into BusinessDetail table under the same registration ID
								if(savedBusinessDetail != null) {
									result.add(SUCCESS);
									results = new ResponseEntity<>(result, HttpStatus.OK);
								} else {
									result.clear();
									result.add("Failed to Add business Details for BO:"+regDetails.getMobile());
									 results = new ResponseEntity<>(result,HttpStatus.OK);
								}
								
								}
						} else {
							List<BusinessDetail> businessDetails = regDetails.getBusinessDetails();
							if (businessDetails != null && !businessDetails.isEmpty()) {
								for (int i = 0; i < businessDetails.size(); i++) {
									BusinessDetail businessDetail = businessDetails.get(i);
									if (file != null) {
										businessDetail.setFileContent(file.getBytes());
										businessDetail.setFileName(file.getOriginalFilename());
										businessDetail.setMimetype(file.getContentType());
									}
									businessDetails.set(i, businessDetail);
								}
								regDetails.setBusinessDetails(businessDetails);
							}
							Registration savedRegistration = registrationService.saveUser(regDetails);//Create new or update business information
							if(savedRegistration !=null){
								 result.add(SUCCESS);
								 results = new ResponseEntity<>(result, HttpStatus.OK);
							} else {
								logger.info("Failed to save registration for mobile:[{}] ",regDetails.getMobile());
								result.clear();
								result.add("Failed to save registration for BO:"+regDetails.getMobile());
								 results = new ResponseEntity<>(result,HttpStatus.OK);
							}
						}
				
			} else {
				result.add("BO entered details are empty");
				results = new ResponseEntity<>(result, HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user data :{}",e);
		}
		
		return results;
	}
	
	private String validateData(Registration registration) {
		logger.info("===>Begin validating user details===>");
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
	
	@PostMapping("/loginUser")
	public ResponseEntity<?> loginUser(@RequestBody Registration registration, HttpServletRequest request) {
		logger.info("Begin Execution of loginUser method");
		ResponseEntity<?> results = null;
		List<String> result = new ArrayList<>();
		try{
			session = request.getSession();
			
			if(registration != null){
					logger.info("===>login Business owner mobile::{}",registration.getMobile());
					Registration registrationData= registrationService.findByMobileNumber(registration.getMobile());
					
					if(registrationData==null){
						result.add("false");
						results = new ResponseEntity<>(result, HttpStatus.OK);
						return results;
					} 
					if (registration.getMobile() != null && registration.getPassword() != null
							&& registration.getMobile().equalsIgnoreCase(registrationData.getMobile())
							&& registration.getPassword().equals(registrationData.getPassword())) {
							logger.info("===>login success for [{}]===>",registration.getMobile());
							result.add("true");
							result.add(registrationData.getRole());
							session.setAttribute(REGISTRATION, registrationData);
							results = new ResponseEntity<>(result, HttpStatus.OK);
						} else {
							logger.info("===>login failed for [{}]===>",registration.getMobile());
							result.add("false");
							results = new ResponseEntity<>(result, HttpStatus.OK);
						}
				} else {
					logger.info("===>Input data is null::");
					result.add("false");
					results = new ResponseEntity<>(result, HttpStatus.OK);
				}
				
		}
		catch(Exception e){
			logger.error("Error occured while user loggingin :{}",e);
			result.add("false");
			results = new ResponseEntity<>(result, HttpStatus.OK);
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
			session = request.getSession();
			if(session!=null){
				registartion = (Registration) session.getAttribute(REGISTRATION);
			}
			if(registartion != null){
				logger.info("===>getBusinessDetails() of BO mobile [{}]===>",registartion.getMobile());
				registrationDetails = registrationService.findBusinessInfoByRegId(registartion.getRegistrationId());
				if(registrationDetails != null){
					logger.info("===>BusinessDetails() found for BO mobile [{}]===>",registartion.getMobile());
					if(registrationDetails.getBusinessDetails() != null && !registrationDetails.getBusinessDetails().isEmpty()) {
						BusinessDetail businessDetail = registrationDetails.getBusinessDetails().get(0);
						logger.info("===>Business ID [{}] of respective BO[{}]===>",businessDetail.getBusinessDetailId(),registrationDetails.getMobile());
						session.removeAttribute(SESSION_BUSINESS_ID);
						session.setAttribute(SESSION_BUSINESS_ID, businessDetail.getBusinessDetailId());
					}
					results = new ResponseEntity<>(registrationDetails, HttpStatus.OK);
				} else {
					logger.info("===>BusinessDetails() not found for BO mobile [{}]===>",registartion.getMobile());
					results = new ResponseEntity<>(registrationDetails,HttpStatus.OK);
				}
			}
		}
		catch(Exception e){
			logger.error("===>Error occured while getting business details :{}",e);
		}
		logger.info("===>End Execution of getBusinessDetails method===>");
		return results;
	}
	
	public Object getBusinessId() {
		return session.getAttribute(SESSION_BUSINESS_ID);
	}
	@GetMapping("/sendOtp/{mobile}")
	public ResponseEntity<?> sendOtp(@PathVariable("mobile") String mobile){
		logger.info("==>Begin Execution of sendOtp method===>");
		ResponseEntity<?> result = null;
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		String url = String.format(API_URL, mobile,otp);
		
		logger.info("====>>>>>in sendOtp ============>>>>>>>>>>{}",url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			if(response != null && response.getStatusCode().equals(HttpStatus.OK)){
				logger.info("sendOtp API response====>[{}]",response.getStatusCode());
				result = new ResponseEntity<>(otp, HttpStatus.OK);
			} else {
				logger.info("Failed to invoke OTP API====>");
				result = new ResponseEntity<>(otp,HttpStatus.OK);
			}
		}
		
		catch(Exception e){
			result = new ResponseEntity<>(otp,HttpStatus.OK);
			logger.error("Exception occured while invoking OTP API====>{}",e);
		}
		logger.info("==>End Execution of sendOtp method===>");
		return result;
	}
	
	@GetMapping("/resetPwd/{pwd}/{mobile}")
	public void resetPassword(@PathVariable("pwd") String pwd, @PathVariable("mobile") String mobile, HttpServletRequest request) {
		logger.info("===>Begin Execution of resetPassword method===>");
		try{
			if(mobile != null) {
				Registration registration= registrationService.findByMobileNumber(mobile);
				if(registration != null) {
					logger.info("===>Data found for Mobile number[{}] to reset password ===>",mobile);
					registration.setPassword(pwd);
					registrationService.saveUser(registration);
					logger.info("===>Password reset sucess for Mobile number[{}] ===>",mobile);
				}	
			}
			
		}
		catch(Exception e){
			logger.error("Exception occured in resetPassword() method====>{}",e);
		}
	}
	
	@GetMapping("/changePassword/{oldPwd}/{newPwd}")
	public void resetPasswordInPortal(@PathVariable("oldPwd") String oldPwd, @PathVariable("newPwd") String newPwd, HttpServletRequest request) {
		logger.info("===>Begin Execution of resetPasswordInPortal method===>");
		Registration registartion = null;
		try{
			session = request.getSession();
			if(session!=null){
				registartion = (Registration) session.getAttribute(REGISTRATION);
			}
			if(registartion != null && registartion.getMobile() != null) {
				Registration registration= registrationService.findByMobileNumber(registartion.getMobile());
				if(registration != null) {
					logger.info("===>Data found for Mobile number[{}] to change password ===>",registartion.getMobile());
					registration.setPassword(newPwd);
					registrationService.saveUser(registration);
					logger.info("===>Password changes sucess for Mobile number[{}] ===>",registartion.getMobile());
				}	
			}
			
		}
		catch(Exception e){
			logger.error("Exception occured in resetPasswordInPortal() method====>{}",e);
		}
	}
	
	@GetMapping("/logOut")
	public void logOut( HttpServletRequest request) {
		logger.info("===>In logOut method===>");
		try {
			session = request.getSession();
			if(session!=null){
				session.removeAttribute(REGISTRATION);
			}
		}
		catch(Exception e){
			logger.error("Exception occured in logOut() method====>{}",e);
		}
		
		
	}
	
}

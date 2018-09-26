package com.smydata.user.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
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

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.businessplan.service.InvoiceDetailService;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.model.util.SmydataConstant;
import com.smydata.model.util.SmydataUtility;
import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;
import com.smydata.registration.model.User;
import com.smydata.registration.model.UserBean;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes({"registration","businessId"})
@CrossOrigin
public class UserController implements SmydataConstant {

	@Autowired
	UserService userService;
	
	@Autowired
	RewardsService rewardsService;
	
	@Autowired
	DiscountsService discountsService;
	
	@Autowired
	InvoiceDetailService invoiceDetailService;
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/getUserDetail/{mobile}")
	public ResponseEntity<?> getUserDetail(@PathVariable("mobile") String mobile, HttpServletRequest request){
		
		logger.info("===>Begin Execution of getUserDetail===>");
		List<UserBean> userData = new ArrayList<UserBean>();
		ResponseEntity<?> results = null;
		HttpSession session = request.getSession();
		Registration reg = null;
		User user = null;
		String ownerMobile = "";
		long businessId = 0;
		try{
			if(mobile == null) {
				logger.info("===>User mobile is null===> ");
				return results;
			}
			
			if(session!=null){
				reg = (Registration) session.getAttribute(REGISTRATION);
				businessId = (long) session.getAttribute(SESSION_BUSINESS_ID);
				if(reg != null){
					logger.info("===> In getUserDetail() BO mob no===>"+reg.getMobile());
					ownerMobile = reg.getMobile();
				}
			}
			 user = userService.findCustomer(mobile);
			if(user != null){
				logger.info("===>User details found for mobile [{}]===> ",mobile);
				List<Discounts> discounts = SmydataUtility.getDiscounts(ownerMobile,businessId,discountsService); //Get discounts configuration
				UserBean userBean = getUserDetails(user);
				userBean.setDiscounts(discounts);
				userData.add(userBean);
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(userData,HttpStatus.OK);
			}
				
		}
		catch(Exception e){
			logger.error("Error occured while getting for user [{}] and error is:{} ",mobile,e);
		}
		logger.info("===>End Execution of getUserDetail===>");
		return results;
	}
	
	
	@PostMapping("/saveUser")
	public ResponseEntity<?> saveUser(@RequestBody User user,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveUser***");
		HttpSession session = request.getSession();
		List<UserBean> userData = new ArrayList<UserBean>();
		ResponseEntity<?> results = null;
		Registration reg = null;
		String mobile = "";
		long businessId = 0;
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute(REGISTRATION);
				businessId = (long) session.getAttribute(SESSION_BUSINESS_ID);
			}
			if(reg != null){
				logger.info("===>saveUser mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			if(user != null){
				Rewards rewards = SmydataUtility.getRewards(mobile,businessId,rewardsService);//get rewards configuration done by BO
				if(rewards != null && rewards.isBonusPointEnale())
					user.setRewardPoints(rewards.getBonusPoints());
				Calendar currenttime = Calendar.getInstance();
				user.setCreateDate(new Date((currenttime.getTime()).getTime()));
				User savedUser = userService.saveCustomer(user);
				List<Discounts> discounts = SmydataUtility.getDiscounts(mobile, businessId, discountsService); //Get discounts configuration
				UserBean userBean = getUserDetails(savedUser);
				userBean.setDiscounts(discounts);
				userData.add(userBean);
				results = new ResponseEntity<>(userData, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(userData,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user details for BO [{}] and error is:  ",reg !=null?reg.getMobile():"UNKNOWN",e);
		}
		
		return results;
	}
	
	private UserBean getUserDetails(User user){
		UserBean userBean = new UserBean();
		List<Invoice> invoiceDetails = invoiceDetailService.getInvoice(user.getUserMobile());
		int totalBusVolume = (int) SmydataUtility.getTotalBusVolume(invoiceDetails);
		userBean.setAddress(user.getAddress());
		userBean.setBusinessVolume(totalBusVolume);
		userBean.setEmail(user.getEmail());
		userBean.setRewardPoints(user.getRewardPoints());
		userBean.setUserMobile(user.getUserMobile());
		userBean.setUserName(user.getUserName());
		userBean.setTotalPayable(SmydataUtility.getUserTotalPayable(payableService, user.getUserMobile()));//Total payable
		userBean.setTotalReceivable(SmydataUtility.getUserTotalReceivable(payableService, user.getUserMobile()));//Total receivable
		return userBean;
	}

}

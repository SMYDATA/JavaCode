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
import com.smydata.model.util.SmydataUtility;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;
import com.smydata.registration.model.User;
import com.smydata.registration.model.UserBean;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class UserController {

	@Autowired
	UserService UserService;
	
	@Autowired
	RewardsService rewardsService;
	
	@Autowired
	DiscountsService discountsService;
	
	@Autowired
	InvoiceDetailService invoiceDetailService;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@GetMapping("/userData")
	public User getUserData(){
		return new User();
	}
	
	@GetMapping("/getUserDetail/{mobile}")
	public List<UserBean> getUserDetail(@PathVariable("mobile") String mobile,/* @PathVariable("action") String action,*/HttpServletRequest request){
		
		logger.info("***Begin Execution of getUserDetail***");
		List<UserBean> userData = new ArrayList<UserBean>();
		HttpSession session = request.getSession();
		Registration reg = null;
		User user = null;
		String ownerMobile = "";
		try{
			if(mobile == null)
				return userData;
			
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>getRewards mob no===>"+reg.getMobile());
				ownerMobile = reg.getMobile();
			}
			
			 user = UserService.findCustomer(mobile);
			if(user != null){
				List<Discounts> discounts = SmydataUtility.getDiscounts(ownerMobile,discountsService); //Get discounts configuration
				UserBean userBean = getUserDetails(user);
				userBean.setDiscounts(discounts);
				userData.add(userBean);
			}
				
		}
		catch(Exception e){
			logger.error("Error occured while getting user details:: "+e);
		}
		
		return userData;
	}
	
	
	@PostMapping("/saveUser")
	public List<UserBean> saveUser(@RequestBody User user,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveUser***");
		HttpSession session = request.getSession();
		List<UserBean> userData = new ArrayList<UserBean>();
		Registration reg = null;
		String mobile = "";
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>saveUser mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			if(user != null){
				Rewards rewards = SmydataUtility.getRewards(mobile,rewardsService);//get rewards configuration done by BO
				if(rewards != null && rewards.isBonusPointEnale())
					user.setRewardPoints(rewards.getBonusPoints());
				Calendar currenttime = Calendar.getInstance();
				user.setCreateDate(new Date((currenttime.getTime()).getTime()));
				user = UserService.saveCustomer(user);
				List<Discounts> discounts = SmydataUtility.getDiscounts(mobile,discountsService); //Get discounts configuration
				UserBean userBean = getUserDetails(user);
				userBean.setDiscounts(discounts);
				userData.add(userBean);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving user details:: "+e);
		}
		
		return userData;
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
		return userBean;
	}

}

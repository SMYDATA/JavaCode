package com.smydata.businessplan.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.businessplan.service.RewardsService;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class RewardsController {

	@Autowired
	RewardsService rewardsService;
	
	private static final Logger logger = LoggerFactory.getLogger(RewardsController.class);
	
	@PostMapping("/addRewards")
	public Rewards saveRewards(@RequestBody Rewards rewards,HttpServletRequest request) {
		logger.info("Begin Execution of saveRewards method");
		HttpSession session = request.getSession();
		
		try{
			if(session!=null){
				Registration reg = (Registration) session.getAttribute("registration");
				if(reg!=null){
					logger.info("===>saveRewards mob no===>"+reg.getMobile());
					rewards.setMobile(reg.getMobile());
					rewards = rewardsService.saveReward(rewards);
				}
			}	
		}
		catch(Exception e){
			logger.error("Error occured while saving rewards : "+e);
		}
		
		return rewards;
	}
	
	@GetMapping("/getRewards")
	public Rewards getRewards(HttpServletRequest request) {
		logger.info("Begin Execution of getRewards method:: ");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		Rewards rewards = null;
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>getRewards mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			rewards = rewardsService.getRewards(mobile);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			Date date = new Date();
			String formatDate = format.format(date);
			Date todayDate =  format.parse(formatDate);
			if(rewards !=null){
				Date rewardsEndDate= rewards.getRewardEndDate();
				if(rewardsEndDate != null && rewardsEndDate.compareTo(todayDate)<0){//disable reward based on dates
					rewards.setRewardPointEnable(false);
				}
				Date bonusEndDate= rewards.getBonusEndDate();
				if(bonusEndDate != null && bonusEndDate.compareTo(todayDate)<0){//disable bonus based on dates
					rewards.setBonusPointEnale(false);
				}
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while getting rewards rewards : "+e);
		}
		
		return rewards;
	}
	
}

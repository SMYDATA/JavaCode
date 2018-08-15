package com.smydata.businessplan.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
public class RewardsController {

	@Autowired
	RewardsService rewardsService;
	
	private static final Logger logger = LoggerFactory.getLogger(RewardsController.class);
	
	/**
	 * Save rewards configuration of BO
	 * @param rewards
	 * @param request
	 * @return
	 */
	@PostMapping("/addRewards")
	public ResponseEntity<?> saveRewards(@RequestBody Rewards rewards,HttpServletRequest request) {
		logger.info("===>Begin Execution of saveRewards method===>");
		HttpSession session = request.getSession();
		ResponseEntity<?> results = null;
		Rewards savedReward = null;
		try{
			if(session!=null){
				Registration reg = (Registration) session.getAttribute("registration");
				if(reg!=null){
					logger.info("===>saveRewards mobile no===>"+reg.getMobile());
					if(rewards != null)
					rewards.setMobile(reg.getMobile());
					savedReward = rewardsService.saveReward(rewards);
					if(savedReward != null){
						logger.info("===>Saved Rewards configuration for BO [{}]===>",reg.getMobile());
						results = new ResponseEntity<>(savedReward, HttpStatus.OK);
					} else {
						logger.info("===>Failed to save Rewards configuration for BO [{}]===>",reg.getMobile());
						results = new ResponseEntity<>(savedReward,HttpStatus.OK);
						return results;
					}
				}
			}	
		}
		catch(Exception e){
			logger.error("Error occured while saving rewards : "+e);
		}
		logger.info("===>End Execution of saveRewards method===>");
		return results;
	}
	
	/**
	 * Get rewards configuration of BO
	 * @param request
	 * @return
	 */
	@GetMapping("/getRewards")
	public ResponseEntity<?> getRewards(HttpServletRequest request) {
		logger.info("Begin Execution of getRewards method:: ");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		Rewards rewards = null;
		ResponseEntity<?> results = null;
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>getRewards mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			rewards = rewardsService.getRewards(mobile);
			
			if(rewards !=null){
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
				Date date = new Date();
				String formatDate = format.format(date);
				Date todayDate =  format.parse(formatDate);
				Date rewardsEndDate= rewards.getRewardEndDate();
				
				if(rewardsEndDate != null && rewardsEndDate.compareTo(todayDate)<0){//disable reward based on current date
					rewards.setRewardPointEnable(false);
				}
				Date bonusEndDate= rewards.getBonusEndDate();
				if(bonusEndDate != null && bonusEndDate.compareTo(todayDate)<0){//disable bonus based on current date
					rewards.setBonusPointEnale(false);
				}
				results = new ResponseEntity<>(rewards, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(rewards,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while getting rewards rewards : "+e);
		}
		
		return results;
	}
	
}

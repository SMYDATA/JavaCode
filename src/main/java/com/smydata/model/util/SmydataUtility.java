package com.smydata.model.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Rewards;

public class SmydataUtility {

	public static Rewards getRewards(String mobile,RewardsService rewardsService){
		Rewards rewards = rewardsService.getRewards(mobile);
		try{
			if(rewards !=null){
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
				Date date = new Date();
				String formatDate = format.format(date);
				Date todayDate =  format.parse(formatDate);
				Date rewardsEndDate= rewards.getRewardEndDate();
				if(rewardsEndDate != null && rewardsEndDate.compareTo(todayDate)<0){//disable rewards based on dates
					rewards.setRewardPointEnable(false);
				}
				Date bonusEndDate= rewards.getBonusEndDate();
				if(bonusEndDate != null && bonusEndDate.compareTo(todayDate)<0){//disable bonus based on dates
					rewards.setBonusPointEnale(false);
				}
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return rewards;
	}
	
	public static List<Discounts> getDiscounts(String mobile, DiscountsService discountsService){
		List<Discounts> discountsList = discountsService.getDiscountDetails(mobile);
		if(discountsList !=null){
			try{
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
				Date date = new Date();
				String formatDate = format.format(date);
				Date todayDate =  format.parse(formatDate);
				for(int i=0;i<discountsList.size();i++){
					Discounts discount = discountsList.get(i);
					Date compareDate = discount.getEndDate();
					if(compareDate.compareTo(todayDate)<0){
						discount.setEnable(false);
						discountsList.set(i, discount);
					}
					
				}
			}
			catch(Exception e){
				e.printStackTrace();
			}
			
		}
		return discountsList;
	}
	
	
}

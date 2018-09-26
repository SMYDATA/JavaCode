package com.smydata.model.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.Rewards;

public class SmydataUtility implements SmydataConstant{

	public static Rewards getRewards(String mobile,long businessId,RewardsService rewardsService){
		Rewards reward = null;
		List<Rewards> rewards = rewardsService.getRewards(mobile, businessId);
		try{
			if(rewards !=null && !rewards.isEmpty()){
				reward = rewards.get(0);
				SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
				Date date = new Date();
				String formatDate = format.format(date);
				Date todayDate =  format.parse(formatDate);
				Date rewardsEndDate= reward.getRewardEndDate();
				if(rewardsEndDate != null && rewardsEndDate.compareTo(todayDate)<0){//disable rewards based on current date
					reward.setRewardPointEnable(false);
				}
				Date bonusEndDate= reward.getBonusEndDate();
				if(bonusEndDate != null && bonusEndDate.compareTo(todayDate)<0){//disable bonus based on current date
					reward.setBonusPointEnale(false);
				}
			}
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return reward;
	}
	
	public static double getTotalBusVolume(List<Invoice> invoiceDetails){
		 double total = 0.0;
		 for(Invoice invoice: invoiceDetails){
			 total = total + invoice.getTotal();
		 }
		return total;
	}
	
	public static List<Discounts> getDiscounts(String mobile, long businessId, DiscountsService discountsService){
		List<Discounts> discountsList = discountsService.getDiscountDetails(mobile,businessId);
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
	
	public static double getUserTotalPayable(PayableService payableService,String userMobile) {
		double totalPayable = 0.0;
		List<Payable> payables = payableService.getOwnerPayables(userMobile, PAYABLE_CODE);
		if(payables != null && !payables.isEmpty()) {
			for(Payable payable:payables ) {
				totalPayable = totalPayable + payable.getAmount();
			}
		}
		return totalPayable;
	}

	public static double getUserTotalReceivable(PayableService payableService,String userMobile) {
		double totalReceivable = 0.0; 
		List<Payable> receivables = payableService.getOwnerPayables(userMobile, RECEIVABLE_CODE);
		if(receivables != null && !receivables.isEmpty()) {
			for(Payable payable:receivables ) {
				totalReceivable = totalReceivable + payable.getAmount();
			}
		}
		return totalReceivable;
	}
	
}

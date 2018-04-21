package com.smydata.businessplan.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.businessplan.service.InvoiceDetailService;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.InvoiceDetail;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;
import com.smydata.registration.model.User;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class InvoiceDetailController {

	@Autowired
	InvoiceDetailService invoiceDetailService;
	
	@Autowired
	RewardsService rewardsService;
	
	@Autowired
	UserService UserService;
	
	@Autowired
	DiscountsService discountsService;
	
	private static final Logger logger = LoggerFactory.getLogger(InvoiceDetailController.class);
	
	@PostMapping("/saveInvoiceDetail/{mobile}/{gstFlag}")
	public InvoiceDetail saveInvoiceDetails(@RequestBody InvoiceDetail invoiceDetail,@PathVariable("mobile") String Usermobile,@PathVariable("gstFlag") boolean gstFlag,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveInvoiceDetails***");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		long rewrdPoints = 0L;
		int discountToapply = 0;
		int totalDiscount = 0;
		
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>getRewards mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			Rewards rewards = getRewards(mobile);//get rewards configuration
			List<Discounts> discounts = getDiscounts(mobile); //Get discounts configuration
			
			if(invoiceDetail != null){
				if(rewards != null){
					if(invoiceDetail.getSubTotal()>rewards.getEffectiveAmount()&&rewards.isRewardPointEnable()){
						rewrdPoints = invoiceDetail.getSubTotal()/rewards.getCashValue();
					}
					if(rewards.isBonusPointEnale()){
						rewrdPoints = rewrdPoints + rewards.getBonusPoints();
					}
				}
				
				User user = UserService.findCustomer(Usermobile);
				long userRewardPoints = user.getRewardPoints();
				rewrdPoints = rewrdPoints + userRewardPoints;
				if(rewrdPoints>0){
					rewrdPoints = rewrdPoints - invoiceDetail.getRedeemPoints();
					user.setRewardPoints(rewrdPoints);
					UserService.saveCustomer(user);
				}
				if(discounts != null){
					 discountToapply = getDiscountToApply(discounts,invoiceDetail);
				}
				if(gstFlag){
					 totalDiscount = (invoiceDetail.getSubTotal() * invoiceDetail.getDiscount() * discountToapply *10)/300;
				}else{
					 totalDiscount = (invoiceDetail.getSubTotal() * invoiceDetail.getDiscount() * discountToapply)/200;
				}
				
				invoiceDetail.setTotal(invoiceDetail.getSubTotal()-totalDiscount);
				invoiceDetail.setDiscount(totalDiscount);
				invoiceDetail = invoiceDetailService.saveInvoiceDetails(invoiceDetail);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving Invoice details:: "+e);
		}
		
		return invoiceDetail;
	}
	
	private int getDiscountToApply(List<Discounts> discountsList,InvoiceDetail invoiceDetail){
		int discountToApply = 0;
		for(Discounts discount: discountsList){
			if(invoiceDetail.getSubTotal()>=discount.getMinAmount() && invoiceDetail.getSubTotal()<=discount.getMaxAmount()&&discount.isEnable()){
				discountToApply = discount.getDiscount();
				break;
			}
		}
		
		return discountToApply;
	}
	private Rewards getRewards(String mobile){
		Rewards rewards = rewardsService.getRewards(mobile);
		Date todayDate = new Date();
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
		return rewards;
	}
	
	private List<Discounts> getDiscounts(String mobile){
		List<Discounts> discountsList = discountsService.getDiscountDetails(mobile);
		if(discountsList !=null){
			Date todayDate = new Date();
			for(int i=0;i<discountsList.size();i++){
				Discounts discount = discountsList.get(i);
				Date compareDate = discount.getEndDate();
				if(compareDate.compareTo(todayDate)<0){
					discount.setEnable(false);
					discountsList.set(i, discount);
				}
				
			}
		}
		return discountsList;
	}
}

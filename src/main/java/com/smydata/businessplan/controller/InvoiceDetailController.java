package com.smydata.businessplan.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
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
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
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
	
	@GetMapping("/getInvoice")
	public List<Invoice> getInvoiceData(){
		List<Invoice> data = invoiceDetailService.getInvoice();
		
		return data;
	}
	
	
	@PostMapping("/createInvoice/{gstFlag}")
	public Invoice saveInvoiceDetails(@RequestBody List<InvoiceDetail> invoiceDetailList,/*@PathVariable("mobile") String Usermobile,*/@PathVariable("gstFlag") String gstFlag,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveInvoiceDetails***");
		HttpSession session = request.getSession();
		Registration reg = null;
		String mobile = "";
		long rewrdPoints = 0L;
		int configDiscount= 0;
		int busOwnDiscount = -1;
		long total = 0;
		long subTotal = 0L;
		float totalDiscount = 0.0f;
		Invoice invoice = new Invoice();
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
			
			if(invoiceDetailList != null){
				int discountPositn = 0;
				for(InvoiceDetail invoiceDetail:invoiceDetailList){
					subTotal = subTotal + (invoiceDetail.getQuantity() * invoiceDetail.getRate());
					if(busOwnDiscount < 0){
						discountPositn = invoiceDetailList.size()-1;
						busOwnDiscount = invoiceDetailList.get(discountPositn).getDiscount();
					}
				}
				invoiceDetailList.remove(discountPositn);
				System.out.println("subTotal::"+subTotal);
				if(rewards != null){
					if(subTotal>rewards.getEffectiveAmount()&&rewards.isRewardPointEnable()){
						rewrdPoints = subTotal/rewards.getCashValue();
					}
					if(rewards.isBonusPointEnale()){
						rewrdPoints = rewrdPoints + rewards.getBonusPoints();
					}
				}
				
				User user = UserService.findCustomer("9440717763");//Need to fetch from UI
				if(user != null){
					long userRewardPoints = user.getRewardPoints();
					rewrdPoints = rewrdPoints + userRewardPoints;
					if(rewrdPoints>0){
//						rewrdPoints = rewrdPoints - invoiceDetail.getCreditAmount();
						user.setRewardPoints(rewrdPoints);
						UserService.saveCustomer(user);
					}
				}
				
				if(discounts != null){
					 configDiscount = getDiscountToApply(discounts,subTotal);
				}
				if(Boolean.valueOf(gstFlag)){
					totalDiscount = (subTotal * configDiscount * busOwnDiscount *10)/1000000;
				}else{
					int discountToapply = 0;
					if(configDiscount>0){
						discountToapply = discountToapply + configDiscount;
					}
					if(busOwnDiscount>0){
						discountToapply = discountToapply + busOwnDiscount;
					}
					if(subTotal > 0){
						totalDiscount = (subTotal * discountToapply)/100;
					}
				}
				total = (long) (subTotal-totalDiscount);
				invoice.setSubTotal(subTotal);
				invoice.setDiscount(totalDiscount);
				invoice.setTotal(total);
				//Below details need to fetch from GUIs
				invoice.setAddress("Hyd");
				invoice.setEmail("ds@gmail.com");
				invoice.setUserMobile("9440717763");
				invoice.setUserName("Parthiya");
				invoice.setInvoiceDetail(invoiceDetailList);
				invoice.setCreateDate(new Timestamp(System.currentTimeMillis()));
				
				invoice = invoiceDetailService.saveInvoiceDetails(invoice);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving Invoice details:: "+e);
		}
		
		return invoice;
	}
	
	private int getDiscountToApply(List<Discounts> discountsList, long subTotal){
		int discountToApply = 0;
		for(Discounts discount: discountsList){
			if(subTotal>=discount.getMinAmount() && subTotal<=discount.getMaxAmount()&&discount.isEnable()){
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

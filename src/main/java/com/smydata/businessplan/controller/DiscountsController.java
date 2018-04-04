package com.smydata.businessplan.controller;

import java.util.Date;
import java.util.List;

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

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.registration.controller.RegistrationController;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Registration;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class DiscountsController {
	
	@Autowired
	DiscountsService discountsService;
	
	private static final Logger logger = LoggerFactory.getLogger(DiscountsController.class);
	
	@GetMapping("/getdiscounts")
	public List<Discounts> getDiscounts(HttpServletRequest request){
		logger.info("Begin Execution of getDiscounts method::");
		String mobile = "";
		List<Discounts> discountsList = null;
		HttpSession session = request.getSession();
		try{
			if(session!=null){
				Registration reg = (Registration) session.getAttribute("registration");
				if(reg!=null){
					logger.info("===>getDiscounts mob no===>"+reg.getMobile());
					mobile = reg.getMobile();
				}
			}
			discountsList = discountsService.getDiscountDetails(mobile);
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
			
		}
		catch(Exception e){
			logger.error("Error occured while getting discounts :: "+e);
		}
		
		return discountsList;
	}
	
	@PostMapping("/savediscounts")
	public List<Discounts> saveDiscounts(@RequestBody List<Discounts> discounts,HttpServletRequest request){
		if(discounts != null)
			logger.info("Begin Execution of saveDiscounts method");
		HttpSession session = request.getSession();
		List<Discounts> savedDiscounts = null;
		try{
			if(session!=null){
				Registration reg = (Registration) session.getAttribute("registration");
				if(reg!=null){
					logger.info("===>saveDiscounts mob no===>"+reg.getMobile());
					discountsService.deleteDiscounts(reg.getMobile());//delete discounts
					if(discounts != null){
						for(int i=0;i<discounts.size();i++){
							Discounts discount = discounts.get(i);
							discount.setMobile(reg.getMobile());
							discounts.set(i, discount);
						}
						savedDiscounts = discountsService.saveDiscounts(discounts);
					}
				}
			}
		}
		catch(Exception e){
			logger.error("Error occured while saving discounts :: "+e);
		}
		
		return savedDiscounts;
	}

}

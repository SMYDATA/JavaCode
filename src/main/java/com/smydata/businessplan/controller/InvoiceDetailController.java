package com.smydata.businessplan.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
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
import com.smydata.model.util.SmydataUtility;
import com.smydata.payable.service.PayableService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.InvoiceDetail;
import com.smydata.registration.model.Payable;
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
	
	@Autowired
	PayableService payableService;
	
	private static final Logger logger = LoggerFactory.getLogger(InvoiceDetailController.class);
	
	/*@GetMapping("/getInvoice")
	public Invoice getInvoiceData(){
		List<Invoice> data = invoiceDetailService.getInvoice("");
		List<InvoiceDetail> data1 = new ArrayList<InvoiceDetail>();
		Invoice invoice = new Invoice();
		InvoiceDetail inv1 = new InvoiceDetail();
//		inv1.setCreditAmount(10);
//		inv1.setDiscount(5);
		inv1.setItem("chair");
		inv1.setQuantity(1);
		inv1.setRate(100);
		data1.add(inv1);
		invoice.setInvoiceDetail(data1);
		data.add(invoice);
		return invoice;
	}
	*/
	
	@PostMapping("/createInvoice/{gstFlag}")
	public List<Invoice> saveInvoiceDetails(@RequestBody Invoice invoice,/*@PathVariable("mobile") String Usermobile,*/@PathVariable("gstFlag") String gstFlag,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveInvoiceDetails***");
		HttpSession session = request.getSession();
		List<Payable> recievableList = new ArrayList<Payable>();
		List<Invoice> invoiceData1 = new ArrayList<Invoice>();
		Registration reg = null;
		String mobile = "";
		int rewrdPoints = 0;
		double totalDiscount = 0.0;
		List<Invoice> invoiceData = null;
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute("registration");
			}
			if(reg != null){
				logger.info("===>getRewards mob no===>"+reg.getMobile());
				mobile = reg.getMobile();
			}
			Rewards rewards = SmydataUtility.getRewards(mobile,rewardsService);//get rewards configuration
			
			if(invoice != null){
				if(rewards != null){
					if(invoice.getTotal()>rewards.getEffectiveAmount()&&rewards.isRewardPointEnable()){
						rewrdPoints = (int) (invoice.getTotal()/rewards.getCashValue());
					}
				}
				
				User user = UserService.findCustomer(invoice.getUserMobile());
				if(user != null){
					int userRewardPoints = user.getRewardPoints();
					rewrdPoints = rewrdPoints + userRewardPoints;
					if(rewrdPoints>0){
						rewrdPoints = rewrdPoints - invoice.getRewards();
						user.setRewardPoints(rewrdPoints);
						UserService.saveCustomer(user);
					}
				}
				
				/*if(discounts != null){
					 configDiscount = getDiscountToApply(discounts,invoice.getTotal());
				}*/
				/*if(Boolean.valueOf(gstFlag)){
					totalDiscount = (invoice.getTotal() * (configDiscount + 10))/100;
				}else{
					int discountToapply = 0;
					if(configDiscount>0){
						discountToapply = discountToapply + configDiscount;
					}
					
					if(invoice.getTotal() > 0){
						totalDiscount = (invoice.getTotal() * discountToapply)/100;
					}
				}*/
				
				invoice.setCreateDate(new Timestamp(System.currentTimeMillis()));
				  invoiceDetailService.saveInvoiceDetails(invoice);
				 invoiceData = invoiceDetailService.getInvoice(invoice.getUserMobile());//Fetch current invoice data
				 if(invoice.getCredit()>0){
					 SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
//						Date date = new Date();
//						String formatDate = format.format(date);
//						Date todayDate =  format.parse(formatDate);
					 
					 Invoice inv = invoiceData.get(invoiceData.size()-1);
					 invoiceData1.add(inv);
						Payable payable = new Payable();
						payable.setMobile(invoice.getUserMobile());
						payable.setCode("RCVBL");
						payable.setAmount(invoice.getCredit());
						payable.setInvoiceNumber(inv.getInvId());
//						payable.setDate();
						recievableList.add(payable);
						payableService.saveOwnerPayables(recievableList);
					}
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving Invoice details:: "+e);
		}
		
		return invoiceData1;
	}
	
	private int getDiscountToApply(List<Discounts> discountsList, double total){
		int discountToApply = 0;
		for(Discounts discount: discountsList){
			if(total>=discount.getMinAmount() && total<=discount.getMaxAmount()&&discount.isEnable()){
				discountToApply = discount.getDiscount();
				break;
			}
		}
		
		return discountToApply;
	}


}

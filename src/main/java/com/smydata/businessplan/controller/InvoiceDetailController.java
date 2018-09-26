package com.smydata.businessplan.controller;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
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
import com.smydata.registration.model.InvoiceDetail;
import com.smydata.registration.model.Payable;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;
import com.smydata.registration.model.TicketBean;
import com.smydata.registration.model.User;
import com.smydata.user.service.UserService;

@RestController
@RequestMapping("/api")
@SessionAttributes({"registration","businessId"})
@CrossOrigin
public class InvoiceDetailController implements SmydataConstant {

	@Autowired
	InvoiceDetailService invoiceDetailService;
	
	@Autowired
	RewardsService rewardsService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	DiscountsService discountsService;
	
	@Autowired
	PayableService payableService;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	private static final Logger logger = LoggerFactory.getLogger(InvoiceDetailController.class);
	
	/**
	 * Saving invoice details and returning invoice details along with invoice ID to generate invoice
	 * @param invoice
	 * @param gstFlag
	 * @param request
	 * @return
	 */
	@PostMapping("/createInvoice/{gstFlag}")
	public ResponseEntity<?> saveInvoiceDetails(@RequestBody Invoice invoice,@PathVariable("gstFlag") String gstFlag,HttpServletRequest request){
		
		logger.info("***Begin Execution of saveInvoiceDetails***");
		HttpSession session = request.getSession();
		List<Payable> recievableList = new ArrayList<>();
		List<Invoice> invoiceData = new ArrayList<Invoice>();
		Registration reg = null;
		String mobile = "";
		int rewrdPoints = 0;
		long businessId = 0;
		ResponseEntity<?> results = null;
		try{
			if(session!=null){
				reg = (Registration) session.getAttribute(REGISTRATION);
				Object object = session.getAttribute(SESSION_BUSINESS_ID);
				if(object != null) {
					businessId = (long) object;
				}
			}
			if(reg != null){
				logger.info("===>In saveInvoiceDetails() mob no [{}]===>", reg.getMobile());
				mobile = reg.getMobile();
			}
			Rewards rewards = SmydataUtility.getRewards(mobile,businessId,rewardsService);//get rewards configuration
			
			if(invoice != null){
				if(rewards != null){
					if(invoice.getTotal()>rewards.getEffectiveAmount()&&rewards.isRewardPointEnable()){
						rewrdPoints = (int) (invoice.getTotal()/rewards.getCashValue());
					}
				}
				
				User user = userService.findCustomer(invoice.getUserMobile());
				if(user != null){
					int userRewardPoints = user.getRewardPoints();
					rewrdPoints = rewrdPoints + userRewardPoints;
					if(rewrdPoints>0){
						rewrdPoints = rewrdPoints - invoice.getRewards();
						if(rewrdPoints>0) {
							user.setRewardPoints(rewrdPoints);
							userService.saveCustomer(user);//Update user rewards
						}
					}
				}
				
				//May be useful below code in future if GST exist
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
				Calendar currenttime = Calendar.getInstance();
				invoice.setCreateDate(new Date((currenttime.getTime()).getTime()));
				invoice.setBusinessDetailId(businessId);
				  
				 if(invoice.getCredit()>0){ //If invoice contains credit amount
					 invoice.setTotal(invoice.getTotal()-invoice.getCredit());
					 Invoice inv = invoiceDetailService.saveInvoiceDetails(invoice);
					 
					 if(inv != null){
						 	invoiceData.add(inv);
							Payable payable = new Payable();
							payable.setBoMobile(reg != null?reg.getMobile():"");
							payable.setMobile(invoice.getUserMobile());
							payable.setInvoiceNumber(inv.getInvId());
							payable.setCode(RECEIVABLE_CODE);
							payable.setAmount(invoice.getCredit());
							payable.setCreateDate(new Date((currenttime.getTime()).getTime()));
							recievableList.add(payable);
							payableService.saveOwnerPayables(recievableList);
							results = new ResponseEntity<>(invoiceData, HttpStatus.OK);
						} else {
							logger.info("===>Failed to saveInvoiceDetails===>");
							results = new ResponseEntity<>(invoiceData,HttpStatus.INTERNAL_SERVER_ERROR);
						}
					 
					} else { //If invoice doesn't contain credit amount
						Invoice inv = invoiceDetailService.saveInvoiceDetails(invoice);
						if(inv != null){
							 invoiceData.add(inv);
							 results = new ResponseEntity<>(invoiceData, HttpStatus.OK);
						} else {
							logger.info("===>Failed to saveInvoiceDetails===>");
							results = new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
						}
						
					}
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while saving Invoice details::{} ",e);
		}
		
		return results;
	}
	
	@GetMapping("/emailInvoice/{invoiceId}/{userMobile}/{userEmail}")
	public ResponseEntity<?> sendEmailInvoice(@PathVariable("invoiceId") Integer invoiceId, @PathVariable("userMobile") String userMobile, @PathVariable("userEmail") String userEmail){
		boolean userEmailExist = false;
		ResponseEntity<?> results = null;
		User user = null;
		String email = null;
		try {
			logger.info("===>Begin execution of sendEmailInvoice() method ===>");
			if (userEmail == null || userEmail.trim().isEmpty()) {
				user = userService.findCustomer(userMobile);
				if (user != null && user.getEmail() != null) {
					logger.info("===>User [{}] Email is exist ===>", userMobile);
					userEmailExist = true;
					email = user.getEmail();
					results = new ResponseEntity<>(userEmailExist, HttpStatus.OK);
				} else {
					logger.info("===>User [{}] Email is not exist ===>", userMobile);
					return new ResponseEntity<>(userEmailExist, HttpStatus.OK);
				}
			} else {
				email = userEmail;
			}
			Invoice inv = invoiceDetailService.getInvoiceDetails(invoiceId);
			if (inv != null) {
				sendMail(email,inv);
			}

		} catch (Exception e) {
			logger.error("===>Error occured while sending Invoice email:[{}]===>", e);
		}
		logger.info("End execution of sendEmailInvoice() method ===>");
		return results;
	}
	
private void sendMail(String email,Invoice invoice) {
		
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		try{
			helper.setTo(email);
			helper.setSubject("Invoice#"+invoice.getInvId());
			logger.info("======>Before setting email body ====>");
			helper.setText(getEmailBodyFormat(invoice),true);
			logger.info("======>After setting email body ====>");
			helper.setCc("parthiyads29@gmail.com");
			logger.info("Sending mail...");
			javaMailSender.send(mimeMessage);	
		}
		catch(Exception e){
			logger.error("Error occured while sending email for the invoice#[{}] and error is: {} ",invoice.getInvId(),e);
		}
		logger.info("======>Email sent successfully for Invoice# [{}]",invoice.getInvId());
	}

	private String getEmailBodyFormat(Invoice invoice) {
		StringBuilder buffer = new StringBuilder();
		buffer.append("<!DOCTYPE html><html><head><style>table {font-family: arial, sans-serif; border-collapse:collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 6px;}tr:nth-child(even) {background-color: #dddddd;}</style></head>");
		buffer.append("<body>Thank you for your business and details of your invoice#"+invoice.getInvId()+" below<br/><br/><br/>");
		buffer.append(invoice.getUserName()+" | "+invoice.getUserMobile()+"<br/>");
		buffer.append(invoice.getEmail()+" | "+invoice.getAddress()+" | "+"Date:"+invoice.getCreateDate()+"<br/><br/>");
		buffer.append("<table><tr><th>Item</th><th>Quantity</th><th>Rate</th><th>Total</th></tr>");
		if(invoice.getInvoiceDetail() != null && !invoice.getInvoiceDetail().isEmpty()) {
			for(InvoiceDetail invoiceDetail:invoice.getInvoiceDetail()) {
				buffer.append("<tr><td>"+invoiceDetail.getItem()+"</td><td>"+invoiceDetail.getQuantity()+"</td><td>"+invoiceDetail.getRate()+"</td><td>"+(invoiceDetail.getQuantity() * invoiceDetail.getRate())+"</td></tr>");	
			}
			buffer.append("</table><br/>Discount:"+invoice.getDiscount()+"</body></html>");
			buffer.append("</table><br/>Total:"+invoice.getTotal()+"</body></html>");
		}
		return buffer.toString();
	}
	
	private int getDiscountToApply(List<Discounts> discountsList, double total){ //May be useful in future
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

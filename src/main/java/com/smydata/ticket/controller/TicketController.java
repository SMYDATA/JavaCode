package com.smydata.ticket.controller;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.registration.model.TicketBean;
import com.smydata.ticket.service.TicketService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TicketController {

	@Autowired
	TicketService tikcetService;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	private static final Logger logger = LoggerFactory.getLogger(TicketController.class);
	
	/**
	 * Create tikcet for a raised issue and sending email
	 * @param ticket
	 * @return
	 */
	@PostMapping("/createTicket")
	public ResponseEntity<?> createTicket(@RequestBody TicketBean ticket){
		TicketBean ticketDetails = null;
		ResponseEntity<?> results = null;
		try{
			logger.info("***Begin Execution of createTicket()***");
			if(ticket != null){
				Calendar currenttime = Calendar.getInstance();
				ticket.setCreateDate(new Date((currenttime.getTime()).getTime()));
				 ticketDetails = tikcetService.saveTicket(ticket);
				
				if(ticketDetails != null){
					logger.info("====>Ticket created sucessfully for ticket ID [{}] ====> ",ticketDetails.getTicketId());
					sendMail("parthiyads29@gmail.com", "smydata1@gmail.com",ticketDetails);
					results = new ResponseEntity<>(ticketDetails, HttpStatus.OK);
				} else {
					logger.info("====>Failed to create ticket====> ");
					results = new ResponseEntity<>(ticketDetails,HttpStatus.OK);
				}
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while creating ticket:: "+e);
		}
		logger.info("***End Execution of createTicket()***");
		return results;
	}
	
	/**
	 * Get ticket details
	 */
	@GetMapping("/getTickets")
	public ResponseEntity<?> getTickets(){
		
		List<TicketBean> tickets = null;
		ResponseEntity<?> results = null;
		try{
			logger.info("***Begin Execution of getTickets***");
			tickets = tikcetService.getTicketsInfo();
			if(tickets != null){
				results = new ResponseEntity<>(tickets, HttpStatus.OK);
			} else {
				logger.info("====>tickets not found====> ");
				results = new ResponseEntity<>(tickets,HttpStatus.OK);
			}
			
		}
		catch(Exception e){
			logger.error("Error occured while getting tickets:: "+e);
		}
		logger.info("***End Execution of getTickets***");
		return results;
	}
	
private void sendMail(String from, String to,TicketBean ticketDetails) {
		
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		try{
			logger.info("New Incident ticket has been logged: Ticket number:[{}]",ticketDetails.getTicketId());
			helper.setTo(to);
			helper.setSubject("New Incident ticket has been logged: Ticket number:"+ticketDetails.getTicketId());
			helper.setText(getEmailBodyFormat(ticketDetails),true);
			helper.setCc("parthiyads29@gmail.com");
			logger.info("Sending mail...");
			javaMailSender.send(mimeMessage);	
		}
		catch(Exception e){
			logger.error("Error occured while sending email for the ticket:[{}] and error is: {} ",ticketDetails.getTicketId(),e);
		}
		logger.info("======>Email sent successfully for ticket: [{}]",ticketDetails.getTicketId());
	}

	private String getEmailBodyFormat(TicketBean ticketDetails) {
		StringBuffer buffer = new StringBuffer();
		buffer.append("<!DOCTYPE html><html><head><style>table {font-family: arial, sans-serif; border-collapse:collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 6px;}tr:nth-child(even) {background-color: #dddddd;}</style></head>");
		buffer.append("<body>Helpline Service Desk<br/>We  thank you for using Helpline.Kindly have the below details on the ticket raised.<br/><br/><br/>");
		buffer.append("<table><tr><th>Incident ID</th><th>Incident Open Date</th><th>Status</th><th>Description</th></tr>");
		buffer.append("<tr><td>"+ticketDetails.getTicketId()+"</td><td>"+ticketDetails.getCreateDate()+"</td><td>Open</td><td>"+ticketDetails.getDescription()+"</td></tr></table></body></html>");
		
		return buffer.toString();
	}
}

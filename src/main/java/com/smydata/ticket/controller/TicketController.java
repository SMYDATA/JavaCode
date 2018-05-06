package com.smydata.ticket.controller;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.registration.model.TicketBean;
import com.smydata.ticket.service.TicketService;
import com.smydata.user.controller.UserController;

@RestController
@RequestMapping("/api")
public class TicketController {

	@Autowired
	TicketService tikcetService;
	
	@Autowired
	JavaMailSender javaMailSender;
	
	private static final Logger logger = LoggerFactory.getLogger(TicketController.class);
	
	@PostMapping("/createTicket")
	public TicketBean createTicket(@RequestBody TicketBean ticket){
		try{
			logger.info("***Begin Execution of createTicket***");
			ticket = new TicketBean();
			ticket.setSubject("Test Ticket raise");
			ticket.setDescription("Ticket raised successfully");
			ticket.setCreateDate(new Timestamp(System.currentTimeMillis()));
			ticket = tikcetService.saveTicket(ticket);
			sendMail("parthiyads29@gmail.com", "smydata1@gmail.com", ticket.getSubject(), ticket.getDescription());
		}
		catch(Exception e){
			logger.error("Error occured while creating ticket:: "+e);
		}
		logger.info("***End Execution of createTicket***");
		return ticket;
	}
	
	@GetMapping("/getTickets")
	public List<TicketBean> getTickets(){
		
		List<TicketBean> tickets = null;
		try{
			logger.info("***Begin Execution of getTickets***");
			tickets = tikcetService.getTicketsInfo();
		}
		catch(Exception e){
			logger.error("Error occured while getting tickets:: "+e);
		}
		logger.info("***End Execution of getTickets***");
		return tickets;
	}
	
private void sendMail(String from, String to, String subject, String body) {
		
		SimpleMailMessage mail = new SimpleMailMessage();
		try{
			mail.setFrom(from);
			mail.setTo(to);
			mail.setSubject(subject);
			mail.setText(body);
			mail.setCc("parthiyads29@gmail.com");
			logger.info("Sending mail...");
			javaMailSender.send(mail);	
		}
		catch(Exception e){
			logger.error("Error occured while sending email:: "+e);
		}
		logger.info("Email sent successfully!");
	}
}

package com.smydata.ticket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.TicketBean;
import com.smydata.ticket.repository.TicketRepository;
import com.smydata.ticket.service.TicketService;

@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	TicketRepository ticketRepository;
	
	@Override
	public TicketBean saveTicket(TicketBean ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public List<TicketBean> getTicketsInfo() {
		return ticketRepository.findAll();
	}

}

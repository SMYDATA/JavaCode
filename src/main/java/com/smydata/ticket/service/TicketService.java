package com.smydata.ticket.service;

import java.util.List;

import com.smydata.registration.model.TicketBean;

public interface TicketService {

	TicketBean saveTicket(TicketBean ticket);
	List<TicketBean> getTicketsInfo();
}

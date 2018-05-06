package com.smydata.ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.TicketBean;


public interface TicketRepository extends JpaRepository<TicketBean, Long> {

}

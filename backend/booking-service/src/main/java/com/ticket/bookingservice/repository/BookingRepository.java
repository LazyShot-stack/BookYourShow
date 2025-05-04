package com.ticket.bookingservice.repository;

import com.ticket.bookingservice.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, String> {
}
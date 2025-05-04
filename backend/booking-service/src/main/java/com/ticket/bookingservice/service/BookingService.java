package com.ticket.bookingservice.service;

import com.ticket.bookingservice.entity.Booking;
import com.ticket.bookingservice.repository.BookingRepository;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking getBooking(String id) {
        return bookingRepository.findById(id).orElse(null);
    }
}
package com.ticket.bookingservice.controller;

import com.ticket.bookingservice.entity.Booking;
import com.ticket.bookingservice.service.BookingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable String id) {
        return bookingService.getBooking(id);
    }
}
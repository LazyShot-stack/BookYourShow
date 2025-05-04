package com.ticket.eventservice.controller;

import com.ticket.eventservice.entity.Event;
import com.ticket.eventservice.service.EventService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable String id) {
        return eventService.getEvent(id);
    }
}
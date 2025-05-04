package com.ticket.eventservice.service;

import com.ticket.eventservice.entity.Event;
import com.ticket.eventservice.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEvent(String id) {
        return eventRepository.findById(id).orElse(null);
    }
}
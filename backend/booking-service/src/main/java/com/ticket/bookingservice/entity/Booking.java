package com.ticket.bookingservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    private String id;
    private String userId;
    private String eventId;
    private String status;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public String getEventId() { return eventId; }
    public void setEventId(String eventId) { this.eventId = eventId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
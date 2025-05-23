package com.ticket.eventservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Event {
    @Id
    private String id;
    private String name;
    private String date;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventFilter from './EventFilter';
import { toast } from 'react-toastify';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/events');
                setEvents(response.data);
                setFilteredEvents(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load events. Please try again later.');
                setLoading(false);
                toast.error('Error fetching events.');
            }
        };
        fetchEvents();
    }, []);

    const handleFilter = ({ date, category }) => {
        let filtered = events;
        if (date) {
            filtered = filtered.filter((event) => event.date === date);
        }
        if (category) {
            filtered = filtered.filter((event) => event.category === category);
        }
        setFilteredEvents(filtered);
    };

    if (loading) {
        return <div className="text-center py-8 text-gray-600">Loading events...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h1>
            <EventFilter onFilter={handleFilter} />
            {filteredEvents.length === 0 ? (
                <p className="text-gray-600">No events match your criteria.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-lg shadow-custom p-6 hover:shadow-lg transition-all"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                            <p className="text-gray-600 mt-2">Date: {event.date}</p>
                            <p className="text-gray-600">Category: {event.category || 'General'}</p>
                            <Link to={`/book/${event.id}`}>
                                <button className="mt-4 bg-accent text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventList;
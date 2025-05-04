import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const BookingHistory = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/bookings?userId=${user.id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setBookings(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load booking history.');
                setLoading(false);
                toast.error('Error fetching bookings.');
            }
        };
        fetchBookings();
    }, [user.id]);

    if (loading) {
        return <div className="text-center py-8 text-gray-600">Loading bookings...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Booking History</h1>
            {bookings.length === 0 ? (
                <p className="text-gray-600">No bookings found.</p>
            ) : (
                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-lg shadow-custom p-6">
                            <h2 className="text-xl font-semibold text-gray-800">Booking ID: {booking.id}</h2>
                            <p className="text-gray-600">Event ID: {booking.eventId}</p>
                            <p className="text-gray-600">Quantity: {booking.quantity}</p>
                            <p className="text-gray-600">Status: {booking.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookingHistory;
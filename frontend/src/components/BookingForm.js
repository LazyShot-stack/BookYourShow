import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const BookingForm = () => {
    const { eventId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const booking = {
                id: Math.random().toString(36).substr(2, 9),
                userId: user.id,
                eventId,
                quantity,
                status: 'CONFIRMED',
            };
            await axios.post('http://localhost:8080/api/bookings', booking, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setMessage('Booking successful! You will receive a confirmation soon.');
            toast.success('Booking confirmed!');
            setTimeout(() => navigate('/history'), 2000);
        } catch (err) {
            setError('Booking failed. Please try again.');
            toast.error('Booking failed.');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-custom">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Book Your Ticket</h1>
            {message && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">{message}</div>
            )}
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">User</label>
                    <input
                        type="text"
                        value={user.username}
                        disabled
                        className="w-full p-2 border rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-accent text-white p-2 rounded-md hover:bg-green-600 transition-colors"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
import React, { useState } from 'react';

const EventFilter = ({ onFilter }) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ date, category });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <label className="block text-gray-700">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>
            <div className="flex-1">
                <label className="block text-gray-700">Category</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                >
                    <option value="">All</option>
                    <option value="Concert">Concert</option>
                    <option value="Theater">Theater</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>
            <div className="self-end">
                <button
                    type="submit"
                    className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Filter
                </button>
            </div>
        </form>
    );
};

export default EventFilter;
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData.email, formData.password);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-custom">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-accent text-white p-2 rounded-md hover:bg-green-600 transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
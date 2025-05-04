import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser({ id: decoded.sub, username: decoded.username, email: decoded.email });
            } catch (error) {
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            const decoded = jwtDecode(token);
            setUser({ id: decoded.sub, username: decoded.username, email: decoded.email });
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            toast.error('Login failed. Please check your credentials.');
        }
    };

    const register = async (userData) => {
        try {
            await axios.post('http://localhost:8080/api/users', userData);
            toast.success('Registered successfully! Please log in.');
            navigate('/login');
        } catch (error) {
            toast.error('Registration failed. Please try again.');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        toast.info('Logged out successfully.');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
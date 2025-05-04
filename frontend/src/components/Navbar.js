import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-primary text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                    TicketMaster
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                    {user ? (
                        <>
                            <Link to="/history" className="hover:text-secondary transition-colors">My Bookings</Link>
                            <button onClick={logout} className="hover:text-secondary transition-colors">
                                Logout ({user.username})
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-secondary transition-colors">Login</Link>
                            <Link to="/register" className="hover:text-secondary transition-colors">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
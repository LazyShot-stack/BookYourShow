import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} TicketMaster. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
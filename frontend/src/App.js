import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Book from './pages/Book';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow container mx-auto px-4 py-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/book/:eventId" element={<PrivateRoute><Book /></PrivateRoute>} />
                            <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
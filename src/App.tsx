import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar onCartClick={() => setIsCartOpen(true)} />
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
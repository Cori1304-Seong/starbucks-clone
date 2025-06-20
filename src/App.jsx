import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pay from './pages/Pay';
import Order from './pages/Order';
import Other from './pages/Other';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

function App() {
    return (
        <div className="app">
            <Navigation />
            <main className="page-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pay" element={<Pay />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/other" element={<Other />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

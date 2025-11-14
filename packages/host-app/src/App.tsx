import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const ChefMFE = lazy(() => import('chef_mfe/ChefApp'));
const CustomerMFE = lazy(() => import('customer_mfe/CustomerApp'));
const BookingMFE = lazy(() => import('booking_mfe/BookingApp'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/chef">Chef</Link>
          <Link to="/customer">Customer</Link>
          <Link to="/booking">Booking</Link>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<h1>Host App</h1>} />
            <Route path="/chef/*" element={<ChefMFE />} />
            <Route path="/customer/*" element={<CustomerMFE />} />
            <Route path="/booking/*" element={<BookingMFE />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
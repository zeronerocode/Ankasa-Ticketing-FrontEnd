import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookingDetail from '../../pages/bookingDetail/index';
import FlightDetail from '../../pages/flightDetail/index';
import MyBooking from '../../pages/myBooking/index';
import Profile from '../../pages/Profile/index';


function Router() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/flightDetail" element={<FlightDetail />} />
        <Route path="/myBooking" element={<MyBooking />} />
        <Route path="/bookingDetail" element={<BookingDetail />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router
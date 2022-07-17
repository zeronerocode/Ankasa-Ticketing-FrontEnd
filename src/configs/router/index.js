import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from '../../pages/auth/forgotPassword';
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import BookingDetail from '../../pages/bookingDetail/index';
import FlightDetail from '../../pages/flightDetail/index';
import Home from '../../pages/home';
import MyBooking from '../../pages/myBooking/index';
import Profile from '../../pages/Profile/index';
import SearchFlight from '../../pages/searchFlight';
import Page404 from '../../pages/Page404/Page404';

const RequireAuth = ({ children }) => {
  const isAuth = localStorage.getItem("token");
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
function Router() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route
          path="/flightDetail/:id"
          element={
            <RequireAuth>
              <FlightDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/myBooking"
          element={
            <RequireAuth>
              <MyBooking />
            </RequireAuth>
          }
        />
        {/* <Route path="/bookingDetail" element={<BookingDetail />} /> */}
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/searchflight" element={<SearchFlight />} />
        <Route
          path="/bookingDetail/:id"
          element={
            <RequireAuth>
              <BookingDetail />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
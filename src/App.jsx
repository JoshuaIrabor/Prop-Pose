import { useState } from 'react'
import SignUp from "./Pages/SignUp.jsx"
import LoginPage from './Pages/LoginPage.jsx';
import MainLayout from "./Components/MainLayout";
import AuthLayout from "./Components/AuthLayout";
import BookingPage from "./Pages/BookingPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx"
import Contact from "./Pages/Contact.jsx"
import Services from "./Pages/Services.jsx"
import './App.css'
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';

function App() {

  
  return (
    <>
      <ScrollToTop />
      
      <Routes>

        {/* Routes WITH Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* Routes WITHOUT Navbar & Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

      </Routes>
       
      <Toaster/>
       
    </>
  )
}

export default App;

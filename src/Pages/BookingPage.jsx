import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./BookingPage.css";
import {BadgeCheck} from "lucide-react"

const unavailableDates = ["2026-02-10", "2026-02-12"]; // example

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isDateUnavailable = (date) => {
    return unavailableDates.includes(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.date || !form.time) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isDateUnavailable(form.date)) {
      setError("Selected date is not available.");
      return;
    }

    setError("");
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="booking-page">
        <div className="booking-card success">
          <div className="wrapper">
            <div className="badge">
              <BadgeCheck size={96} strokeWidth={0.5} />
            </div>
            <h1 className="h1">Booking Confirmed 🎉</h1>
            <p>Thank you <strong>{form.name}</strong>!</p>
            <p>
              Your booking is scheduled for <strong>{form.date}</strong> at{" "}
            <strong>{form.time}</strong>.
            </p>
            <p>A confirmation email has been sent to {form.email}.</p>
            <Link to="/" className="home-button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      );
    }

  return (
    <div className="booking-page">
      <form className="" onSubmit={handleSubmit}>
        <h1>Book Your Service</h1>

        {error && <p className="error">{error}</p>}

        <div className="section">
          <h3>Your Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="section">
          <h3>Date & Time</h3>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>

        <div className="total">
          <span>Total</span>
          <strong>$99</strong>
        </div>

        <button className="book-btn" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;

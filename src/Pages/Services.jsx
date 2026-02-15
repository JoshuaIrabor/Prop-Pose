import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <h1>Our Photo Booth Services</h1>
      </section>
      <div className="text">
        We offer a wide variety of serves ranging from photobooths, to props and Ballon arches to make you experience event of a life time.
      </div>
      {/* SERVICES */}
      <section className="services-container">

        {/* STANDARD SERVICE */}
        <div className="service-card">
          <img
            src="/assets/standard.jpg"
            alt="Standard Booth"
            className="service-image"
          />

          <div className="service-content">
            <h2>Standard Experience</h2>
            <p>
              Perfect for birthdays, small events, and private parties.
              Includes backdrop, props, and instant digital sharing.
            </p>
          </div>

          <div className="service-price">
            <h3>$299</h3>
          </div>

          <div className="service-action">
            <Link to="/booking-page">
              <button className="book-btn">Book Now</button>
            </Link>
          </div>
        </div>

        {/* DELUXE SERVICE */}
        <div className="service-card deluxe">
          <img
            src="/assets/deluxe.jpg"
            alt="Deluxe Booth"
            className="service-image"
          />

          <div className="service-content">
            <h2>Deluxe Experience</h2>
            <p>
              Our premium package. Luxury backdrop, custom templates,
              unlimited prints, glam filter, and on-site attendant.
            </p>
          </div>

          <div className="service-price">
            <h3>$499</h3>
          </div>

          <div className="service-action">
            <Link to="/booking-page">
              <button className="book-btn deluxe-btn">Book Now</button>
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}

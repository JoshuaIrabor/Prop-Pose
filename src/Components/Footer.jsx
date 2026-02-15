import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section brand">
          <h2>Prop'n'Pose</h2>
          <p>
            Creating unforgettable photo booth experiences for weddings,
            birthdays, and corporate events.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: info@props.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Local Service Area Only</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PPB. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

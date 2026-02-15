import React from "react";
import "./Content.css";
import {Link} from "react-router-dom";
import {House} from 'lucide-react';

const Content = () => {
  return (
    


    
    <div className="bg">
      <div className="text">
      
        <p  className="p">We don't just take pictures, we create experiences.
          From elegant weddings to high-energy birthday celebrations and corporate activations, our photo booth brings people together, captures genuine moments, and delivers instant keepsakes your guests will love.

          With modern equipment, luxury backdrops, and a seamless setup, we make sure every flash feels effortless and every memory lasts forever.</p>

        <div className="house">
          <House size={50} color="black" strokeWidth={1.5} />
        </div>

        <p className="p">We're more than just a photo booth company we're a family and friends team who believe the best moments in life deserve to be captured beautifully.

        What started as a shared passion for bringing people together has grown into a service dedicated to creating unforgettable experiences. From weddings and birthdays to corporate events and private celebrations, we bring energy, elegance, and attention to detail to every event.

        When you book with us, you're not just hiring a service you're supporting a local business that truly cares about your special day.</p>

      </div>

      <div className="book-wrapper">
          <div className="book">
              <h2>Book Now</h2>
              <Link to="/services">
                <button className="book-btn">Book</button>
              </Link>
          </div>
      </div>

        
    </div>
  );
};

export default Content;

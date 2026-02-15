import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function AboutPage() {
  return (
    <div className="about-wrapper">

      {/* SECTION 1 */}
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src="/images/about1.jpg" alt="Photo Booth Fun" />
        </div>

        <div className="about-text">
          <h2>Creating Unforgettable Moments</h2>
          <p>
            We specialize in premium photo booth experiences that elevate
            weddings, birthdays, corporate events, and celebrations of all
            kinds. Our goal is simple — capture authentic joy and turn it
            into lasting memories.
          </p>
        </div>
      </motion.div>


      {/* SECTION 2 */}
      <motion.div
        className="about-section reverse"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-image">
          <img src="/images/about2.jpg" alt="Event Experience" />
        </div>

        <div className="about-text">
          <h2>Designed For Every Celebration</h2>
          <p>
            From sleek modern setups to glamorous backdrops, our booths
            are crafted to match your vision. We bring the energy,
            the style, and the experience — so you can enjoy your event.
          </p>
        </div>
      </motion.div>

    </div>
  );
}

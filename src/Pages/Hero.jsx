import { useEffect, useState } from "react";
import "./Hero.css";
import {motion} from "framer-motion"

export default function Hero() {
  const imageSets = [
    ["/assets/1.jpg", "/assets/4.jpg", "/assets/1.jpg"],
    ["/assets/2.jpg", "/assets/5.jpg", "/assets/2.jpg"],
    ["/assets/3.jpg", "/assets/6.jpg", "/assets/3.jpg"]
  ];

  const [indexes, setIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes(prev =>
        prev.map((index, i) =>
          (index + 1) % imageSets[i].length
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">

      <div className="sparkle-layer" />
      <div className="hero-overlay" />

        <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        >
       <h1>Prop'n Pose</h1>
      <p>Premium Photo Booth Experiences</p>
     
      </motion.div>
        

      <div className="image-column">
        {imageSets.map((set, i) => (
          <div key={i} className="image-card">
            {set.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className={`image-slide ${
                  indexes[i] === imgIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}

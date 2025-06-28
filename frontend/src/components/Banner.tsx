import styles from "./Banner.module.css";
import solar from "../assets/Images/solarman.jpg";
import cctv from "../assets/Images/cctv.jpg";
import carTracking from "../assets/Images/car-tracking.jpg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const bannerImages = [
  { src: solar, alt: "Solar Energy" },
  { src: cctv, alt: "CCTV" },
  { src: carTracking, alt: "Car Tracking" },
];
const Banner = () => {
  const [current, setCurrent] = useState(() =>
    Math.floor(Math.random() * bannerImages.length)
  );
  const location = useLocation();

  // Change image every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Change image on route change
  useEffect(() => {
    setCurrent(Math.floor(Math.random() * bannerImages.length));
  }, [location]);

  // Change image on banner click
  const handleBannerClick = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <img
        src={bannerImages[current].src}
        alt={bannerImages[current].alt}
        className={styles.bannerImage}
      />
      <div className={styles.bannerContent}>
        <h1 className={styles.heading}>
          Smart Technology <br />
          <span>
            {" "}
            Solutions for a Safer, <br /> Cleaner, Connected Future
          </span>
        </h1>
        <h2>
          Powering Nigeria with reliable solar energy, advanced GPS car
          tracking, and smart security systems — trusted by individuals,
          businesses, and communities.
        </h2>
        <button>
          <Link to="/services">Explore Our Services</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;

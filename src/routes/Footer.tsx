import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
// import style from "./Navbar.module.css";
// import logo from "../assets/Images/logo.png";
import logo from "../assets/Images/logo.jpg";

const routes = [
  // { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/solar-energy", label: "Solar Energy" },
  { path: "/car-tracking", label: "Car Tracking" },
  { path: "/cctv-installation", label: "CCTV Installation" },
  { path: "/general-contracts", label: "General Contracts" },
  { path: "/projects", label: "Projects" },
  // { path: "/faqs", label: "FAQs" },
  { path: "/contact", label: "Contact" },
  // { path: "/terms", label: "Terms" },
];
const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.footerNab}>
        <div className={styles.footerAbout}>
          <div className={styles.logoContainer}>
            <Link to={"/"}>
              <img src={logo} alt="mbsi logo" />
            </Link>
          </div>
          <p className={styles.bio}>
            Powering Nigeria with reliable solar energy, advanced GPS car
            tracking, and smart security systems — trusted by individuals,
            businesses, and communities.
          </p>
        </div>
        <ul>
          <h2>Company</h2>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className={styles.link}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.socialMedia}>
          <h2> Follow us on </h2>
          <a
            href="https://twitter.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          <a
            href="https://twitter.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <a href="tel:+234810001598" rel="noopener noreferrer">
            +234810001598
          </a>
          <a href="mailto:aminumuhammmad@gmail.com" rel="noopener noreferrer">
            aminumuhammmad@gmail.com
          </a>
        </div>
      </nav>
      <p className={styles.copyright}>
        <Link to={"/terms"} className={styles.link}>
          © 2025 MBSI. All rights reserved.
        </Link>
      </p>
    </div>
  );
};

export default Footer;

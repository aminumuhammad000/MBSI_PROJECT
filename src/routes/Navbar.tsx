import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../assets/Images/logo.png";
import { useState, useEffect } from "react";

const routes = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(true);

  const handleMenuClick = () => {
    setActive((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActive(false);
      } else {
        setActive(true);
      }
    };
    window.addEventListener("resize", handleResize);

    // Set initial state on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className={style.Navbar}>
      <div className={style.logoContainer}>
        <Link to={"/"}>
          <img src={logo} alt="mbsi logo" />
        </Link>
      </div>
      {active && (
        <>
          <ul className={`${style.navLinks}`}>
            {routes.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className={style.link}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <button className={style.btnContact}>LET'S TALK</button>
      <div className={style.menu} onClick={handleMenuClick}>
        {active ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import ServiceCard from "../components/ServiceCard";
import style from "./Services.module.css";
import solarmen from "../assets/Images/solarmen.png";
import cartracker from "../assets/Images/cartracker.png";
import cctvinstaller from "../assets/Images/cctvinstller.png";
import contracts from "../assets/Images/cctvBanner.png";

import fuelSaving from "../assets/Images/fuel-saving.jpg";

const services = [
  {
      title: "Solar Energy Solutions",
  description: "Clean, reliable solar power systems to cut energy costs and ensure uninterrupted electricity.",
  imageUrl: solarmen,
  },
  {
    title: "Car Tracking Devices",
    description:
      "Real-time GPS, anti-theft technology offering real-time vehicle location",
    imageUrl: cartracker,
  },
  {
    title: "IP CCTV",
    description:
      "is a great way to keep an eye on your house or place of business from a mobile device.",
    imageUrl: cctvinstaller,
  },
  {
    title: "HD CCTV",
    description:
      "We can provide you with a dependable option if your budget does not permit an IP system",
    imageUrl: fuelSaving,
  },
  {
    title: "CCTV recording",
    description:
      " Should you be looking for a solution that allows you to store mass-data this would be the solution you are looking for",
    imageUrl: contracts,
  },
];

const Services = () => {
  return (
    <div className={style.services} id="services">
      <h5>━ OUR SERVICES</h5>
      <div className={style.content}>
        <h1 className={style.title}>
          Our Services: Smart, Secure, and Sustainable Solutions for Nigeria
        </h1>
        <p className={style.description}>
          Magnificent Business Solutions International Limited (MBSI)delivers
          reliable technology solutions across Nigeria — including solar energy
          systems, vehicle tracking, smart CCTV security, and general
          contracting services. Whether you're a homeowner, business, or
          institution, we offer secure, affordable, and sustainable services
          tailored to your needs.
        </p>
      </div>

      <div className={style.servicesList}>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            buttonText="View Details"
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

import ServiceCard from "../components/ServiceCard";
import style from "./Services.module.css";

// Import images from src/assets/Images
import solarman from "../assets/Images/solarman.jpg";
import carTracking from "../assets/Images/car-tracking.jpg";
import cctv from "../assets/Images/cctv.jpg";
import fuelSaving from "../assets/Images/fuel-saving.jpg";
// import contract from "../assets/Images/contract.jpg";

const services = [
  {
    title: "Solar Energy Solutions",
    description:
      "Off-grid & hybrid systems (clean, reliable, and cost-effective power solutions)",
    imageUrl: solarman,
  },
  {
    title: "Car Tracking Devices",
    description:
      "Real-time GPS, anti-theft technology offering real-time vehicle location",
    imageUrl: carTracking,
  },
  {
    title: "CCTV Surveillance Systems",
    description:
      "For enhanced security in offices, homes, shops, and government institutions",
    imageUrl: cctv,
  },
  {
    title: "Fuel Saving Devices",
    description:
      "Efficiency boosters for vehicles and generators designed to improve fuel efficiency",
    imageUrl: fuelSaving,
  },
  // {
  //   title: "General Contract",
  //   description: "Procurement of all goods and services",
  //   imageUrl: contract,
  // },
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
          MBSI delivers reliable technology solutions across Nigeria — including
          solar energy systems, vehicle tracking, smart CCTV security, and
          general contracting services. Whether you're a homeowner, business, or
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

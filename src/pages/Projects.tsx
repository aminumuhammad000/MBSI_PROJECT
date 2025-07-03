import style from "./Projects.module.css";
import solarman from "../assets/Images/solarman.jpg";
import carTracking from "../assets/Images/car-tracking.jpg";
import cctv from "../assets/Images/cctv.jpg";
import fuelSaving from "../assets/Images/fuel-saving.jpg";

const projects = [
  {
    title: "Solar Energy for Rural School",
    customer: "Bright Future Academy, Kaduna",
    description:
      "Installed a 10kW off-grid solar system providing uninterrupted power for classrooms, admin offices, and ICT labs. The school now enjoys reliable electricity, enabling digital learning and reducing generator costs.",
    imageUrl: solarman,
    highlights: [
      "10kW solar panels & hybrid inverter",
      "Battery backup for 24/7 supply",
      "Customer training on system use",
    ],
  },
  {
    title: "Fleet Car Tracking for Logistics Company",
    customer: "SwiftMove Logistics, Abuja",
    description:
      "Deployed real-time GPS tracking devices on 15 delivery vehicles. The company now monitors routes, improves driver safety, and recovers vehicles quickly in case of theft.",
    imageUrl: carTracking,
    highlights: [
      "15 vehicles secured",
      "Live tracking & route history",
      "24/7 customer support",
    ],
  },
  {
    title: "CCTV Surveillance for Shopping Mall",
    customer: "City Mall, Kano",
    description:
      "Installed a 32-camera CCTV system covering entrances, parking, and shops. Security staff monitor live feeds and review footage for incident resolution.",
    imageUrl: cctv,
    highlights: [
      "32 HD cameras, night vision",
      "Central monitoring room",
      "Staff training included",
    ],
  },
  {
    title: "Fuel Saving Device for Transport Fleet",
    customer: "GreenRide Transport, Lagos",
    description:
      "Fitted fuel-saving devices on 20 buses, reducing fuel consumption by up to 15%. The company reports lower running costs and improved engine performance.",
    imageUrl: fuelSaving,
    highlights: [
      "20 buses optimized",
      "15% average fuel savings",
      "Quick installation, instant results",
    ],
  },
];

const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <h5>━ OUR PROJECTS</h5>
      <div className={style.content}>
        <h1 className={style.title}>
          Real Projects, Real Impact: MBSI in Action
        </h1>
        <p className={style.description}>
          Explore some of our recent projects across Nigeria. From powering
          schools with solar energy to securing businesses with smart CCTV, MBSI
          delivers technology solutions that make a difference for our
          customers.
        </p>
      </div>

      <div className={style.projectsList}>
        {projects.map((project) => (
          <div key={project.title} className={style.projectCard}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={style.projectImage}
            />
            <div className={style.projectInfo}>
              <h2 className={style.projectTitle}>{project.title}</h2>
              <h4 className={style.projectCustomer}>
                Customer: {project.customer}
              </h4>
              <p className={style.projectDescription}>{project.description}</p>
              <ul className={style.projectHighlights}>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className={style.projectProcess}>
        <h3>How We Work</h3>
        <ol>
          <li>Consultation & Site Assessment</li>
          <li>Custom Solution Design</li>
          <li>Professional Installation</li>
          <li>Customer Training & Handover</li>
          <li>Ongoing Support & Maintenance</li>
        </ol>
      </section>

      <section className={style.projectTestimonial}>
        <h3>Customer Success Story</h3>
        <blockquote>
          “MBSI transformed our school’s learning environment. The solar system
          is reliable and the team was professional from start to finish.”
          <br />
          <span>- Principal, Bright Future Academy</span>
        </blockquote>
      </section>
    </div>
  );
};
export default Projects;

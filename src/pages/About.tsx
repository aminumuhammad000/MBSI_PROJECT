import style from "./About.module.css";
import aboutImage from "../assets/Images/about-image.png"; // Assuming you have an image in this path

const About = () => {
  return (
    <div className={style.about} id="about">
      <h5>━ ABOUT MBSI</h5>

      <div className={style.aboutContent}>
        <div className={style.content}>
          <h1>
            Powering Nigeria with Reliable Solar, Security, and Tracking Systems
          </h1>
          <p>
            Magnificent Business Solutions International Limited (MBSI) is a
            fast-paced business management solutions firm with an array of value
            offerings to corporate organisations. We work in all major sectors
            of the economy such as agriculture, IT, Consulting and general
            contract engaging highly trained and sector-experienced Consultants.
            We are a group of an indigenous firms with cutting edge value
            proposition geared towards value maximisation. Our focus is on
            creating and managing change in organisations by formulating and
            implementing customer centric strategies. Our focus quintessentially
            is to bridge this gap and create value for our clients because of
            the work we do with them.
          </p>
          <div className={style.visionMission}>
            <h3>Vision:</h3>
            <p>
              To be the leading provider of innovative, reliable, and affordable
              technology solutions in Nigeria.
            </p>
            <h3>Mission:</h3>
            <p>
              To empower individuals and organizations through sustainable
              energy, security, and vehicle management technologies.
            </p>
          </div>

          <button className={style.btnAbout}>
            Learn More About Our Services
          </button>
        </div>
        <div className={style.imgContainer}>
          <img src={aboutImage} alt="about us image" />
        </div>
      </div>
    </div>
  );
};

export default About;

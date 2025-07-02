import Banner from "../components/Banner";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import styles from "./Home.module.css";
import FAQs from "./FAQs";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <main className={styles.main}>
        <Banner />
        <About />
        <Services />
        <Contact />
        <Testimonial />
        <FAQs />
      </main>
    </div>
  );
};

export default Home;

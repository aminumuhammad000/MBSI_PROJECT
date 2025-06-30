import Banner from "../components/Banner";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <main className={styles.main}>
        <Banner />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

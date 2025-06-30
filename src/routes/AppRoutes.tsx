import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import SolarEnergy from "../pages/SolarEnergy";
import CarTracking from "../pages/CarTracking";
import CCTV from "../pages/CCTV";
import Contracts from "../pages/Contracts";
import Projects from "../pages/Projects";
import FAQs from "../pages/FAQs";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import Services from "../pages/Services";
import Chat from "../pages/Chat";
import style from "./AppRoutes.module.css";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solar-energy" element={<SolarEnergy />} />
        <Route path="/car-tracking" element={<CarTracking />} />
        <Route path="/cctv-installation" element={<CCTV />} />
        <Route path="/general-contracts" element={<Contracts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className={style.chatContainer}>
        <Chat />
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

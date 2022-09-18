import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Header/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import TeamSection from "./TeamSection/TeamSection";
import Footer from "./Footer/Footer";
import styles from "./Home.module.css";
import ContactSection from "./ContactSection/ContactSection";
import ChooseUsSection from "./ChooseUsSection/ChooseUsSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChooseUsSection />
      <TeamSection />
      <ContactSection />
      <div className={styles.container}>
        <h1>Quick Sort Demo</h1>
        <Link to="/Logan">
          {" "}
          <h2>Logan</h2>{" "}
        </Link>
        <Link to="/Brandon">
          {" "}
          <h2>Brandon</h2>{" "}
        </Link>
        <Link to="/Ranju">
          {" "}
          <h2>Ranju</h2>{" "}
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;

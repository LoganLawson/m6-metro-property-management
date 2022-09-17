import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Header/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
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

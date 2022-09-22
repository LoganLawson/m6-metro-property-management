import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "../Header/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import TeamSection from "../TeamSection/TeamSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";
import ChooseUsSection from "../ChooseUsSection/ChooseUsSection";
import TenantAppSection from "../TenantAppSection/TenantAppSection";
import SucessSection from "../SucessSection/SucessSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChooseUsSection />
      <TenantAppSection />
      <SucessSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;

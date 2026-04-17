import React from "react";
import ContactSupport from "./ContactSupport";
import Customernav from "./CustomerNav";
import SupportAlertBanner from "./SupportAlertBanner";
import HeroSection from "./HeroSection";
import ResourceTiles from "./ResourceTiles";
import Footer from "./Footer";
import Navbar from "../Navbar";

const Customer = () => {
  return (
    <>
      <Customernav></Customernav>
      <Navbar></Navbar>
      <SupportAlertBanner></SupportAlertBanner>
      <HeroSection></HeroSection>
      <ResourceTiles></ResourceTiles>
      <ContactSupport></ContactSupport>
      <Footer></Footer>
    </>
  );
};

export default Customer;

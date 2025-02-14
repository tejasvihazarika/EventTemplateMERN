
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Challenge from "./components/Challenge/Challenge";
import Perks from "./components/Perks/Perks";
import Timeline from "./components/Timeline/Timeline"; 
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Challenge />
      <Perks />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <ContactMe />
    </>
  );
}

export default App;

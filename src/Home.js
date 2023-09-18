import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
// import { Footer } from "./components/Footer";
const Home = () => {
  const data = {
    name: "REACT store",
  };

  return (
<>
  <HeroSection myData={data}/>
  <Services/>
  <Trusted/>
</>
  );
};

export default Home;
import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
// import { Footer } from "./components/Footer";
const Home = () => {
  const data = {
    name: "REACT store",
  };

  return (
<>
  <HeroSection myData={data}/>
  <FeatureProduct/>
  <Services/>
  <Trusted/>
</>
  );
};

export default Home;
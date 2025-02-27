import React from "react";
import Hero from "../src/Component/Hero";
import Services from "./Component/Services";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Pricing from "./Component/Pricing";
import Testimonial from "./Component/Testimonial";
import WorkingStep from "./Component/WorkingStep";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

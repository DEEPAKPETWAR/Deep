import React from "react";
import her from "../Assets/hero.jpg";
import { IoArrowForwardCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="home" className="bg-slate-950 text-white flex items-center pt-28 md:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-hidden gap-12 h-full">
        
        {/* Left Side: Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl text-white font-sans font-bold mb-4 md:w-3/5 leading-snug text-3xl md:text-5xl">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="text-lg text-white mb-8 px-4 md:px-0">
            Taking care of your mind is just as important as taking care of your body. Remember, it's okay to take a break, ask for help, and prioritize your well-being. Healing and growth take time, so be patient with yourself. You're stronger than you think, and you're not alone in this journey. 💙
          </p>

          <button className="bg-lime-500 text-white py-3.5 px-8 font-medium rounded-md hover:bg-lime-600 transition-all ease-in-out duration-300">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 h-full flex justify-center md:justify-end">
          <img 
            src={her} 
            alt="Mental Wellness" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

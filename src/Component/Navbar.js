import React, { useEffect, useState } from "react";
import { BsMenuUp } from "react-icons/bs";
import { motion } from "framer-motion";
import logo from "../Assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ["home", "services", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navlinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      {["home", "services", "about", "pricing", "testimonial"].map((section) => (
        <li key={section}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo(section);
            }}
            href={`#${section}`}
            className={`text-white ${activeSection === section ? "text-lime-400 font-semibold" : ""}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-gray-700 text-white py-4 px-2 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="h-10" />
          </a>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navlinks}</nav>
        </div>
        <div className="hidden md:block">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("contact");
            }}
            href="#contact-us"
            className="text-white bg-red-600 hover:bg-pink-500/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}
          >
            <BsMenuUp className="text-3xl" />
          </button>
        </div>

        {isOpen && (
          <nav className="absolute bg-gray-800 w-full mt-2 md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              {navlinks.props.children}

              <li>
                <a
                  href="#contact-us"
                  className="text-white bg-red-600 hover:bg-pink-500/60 px-4 py-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo("contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

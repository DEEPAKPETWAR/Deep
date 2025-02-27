import React, { useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { IoArrowForwardCircle } from "react-icons/io5";
import thumbnail from '../Assets/thumbnail.jpg';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto px-4">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Video Thumbnail */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0 relative">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="w-full md:h-[280px] h-auto rounded-lg object-cover shadow-lg"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-4 rounded-full shadow-lg hover:bg-green-500 transition-colors duration-300"
                >
                  <CgPlayButton className="text-white text-4xl" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Right side - Video & Content */}
          <div className="md:w-1/2 w-full">
            {isVideoPlaying && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative w-full max-w-3xl h-auto flex items-center z-50">
                  <iframe
                    width="100%"
                    height="auto"
                    src="https://youtu.be/74DWwSxsVSs?si=lXC8SvgAeXHyILTg"
                    title="youtube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg shadow-xl"
                  ></iframe>
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-sans capitalize font-bold mb-4 md:w-3/5 leading-snug text-gray-800">
              Individual Consult and Therapy
            </h1>
            <p className="text-lg mb-8 text-gray-600 pr-8">
              Taking care of your mind is just as important as taking care of your body. Remember, it's okay to take a break, ask for help, and prioritize your well-being. 💙
            </p>

            <button className="bg-lime-500 text-white py-3.5 px-8 font-medium rounded-md hover:bg-lime-600 transition-colors duration-300">
              <a href="#contact" className="flex gap-2 items-center">
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

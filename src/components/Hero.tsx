"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    video: "/videos/intro.mp4",
    // title: "Agromech Hospitality",
    // subtitle: "Solutions",
    // description: "Elevating the standards of commercial kitchens and hospitality services with innovative technology and expert craftsmanship."
  },
  // {
  //   video: "/videos/v2.mp4",
  //   title: "Premium Kitchen",
  //   subtitle: "Equipment",
  //   description: "Discover our extensive range of high-performance culinary tools designed for precision, durability, and professional excellence."
  // },
  // {
  //   video: "/videos/v3.mp4",
  //   title: "Seamless Support",
  //   subtitle: "& Service",
  //   description: "Our dedicated team ensures your operations never stop, providing round-the-clock maintenance and technical expertise."
  // }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setIsVideoLoaded(false); // Reset for the next video
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero relative w-full aspect-video md:aspect-auto md:h-[calc(100vh-74px)] md:min-h-[626px] overflow-hidden bg-zinc-950 mt-[58px] md:mt-[74px]">
      {/* Background Video Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`video-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <video
            key={slides[index].video}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="w-full h-full object-cover"
          >
            <source src={slides[index].video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-center z-10 p-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {isVideoLoaded && (
                <motion.div
                  key={`content-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="backdrop-blur-md bg-black/15 border border-white/5 p-6 sm:p-10 md:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl"
                >
                  <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1]">
                    {slides[index].title} <span className="block font-normal mt-2 text-[#FD8E0E]">{slides[index].subtitle}</span>
                  </h1>
                  <p className="text-white mb-12 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light opacity-90">
                    {slides[index].description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                      href="/shop"
                      className="bg-[#FD8E0E] text-white text-[12px] font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#e07a0c] transition-all hover:shadow-xl active:scale-95 w-52 sm:w-auto text-center no-underline rounded-full"
                    >
                      Shop Now
                    </Link>
                    <Link
                      href="/explore"
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[12px] font-bold uppercase tracking-widest px-10 py-4 hover:bg-white/20 transition-all hover:shadow-xl active:scale-95 w-52 sm:w-auto text-center no-underline rounded-full"
                    >
                      Explore
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div> */}

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-10 right-4 md:right-10 z-20 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1 h-12 transition-all duration-500 focus:outline-none ${index === i ? "bg-[#FD8E0E] scale-x-150" : "bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div> */}

      {/* Refined Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-20 cursor-pointer group hidden md:block"
      >
        <Link href="#about-section" className="no-underline block">
          <p className="text-white text-[10px] uppercase tracking-widest mb-3 opacity-80 group-hover:opacity-100 transition-opacity">Scroll for more</p>
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[#FD8E0E] text-xl"
            >
              <i className="fas fa-chevron-down"></i>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;

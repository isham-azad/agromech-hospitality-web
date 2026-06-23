"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section id="about-section" style={{ scrollMarginTop: "100px" }} className="bg-[#221F51] py-12 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-24">

          {/* Left Side: Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[30%] flex justify-center md:justify-start"
          >
            <div className="relative w-40 h-20 md:w-72 md:h-40">
              <Image
                src="/images/logo-white.png"
                alt="Agromech Logo"
                fill
                className="object-contain"
              />
            </div>

          </motion.div>

          {/* Right Side: Title + Detailed Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[65%] flex flex-col justify-center text-left"
          >
            {/* About Heading */}
            <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-[0.2em] md:tracking-[0.4em] mb-4 text-white">
              ABOUT <span className="font-black text-white ml-0 md:ml-4">AGROMECH</span>
            </h2>

            {/* Sub-Headline */}
            <h3 className="text-base md:text-xl font-bold uppercase tracking-[0.05em] text-white/95 mb-5 md:mb-8 leading-tight">
              YOUR ONE-STOP SOLUTION FOR HOSPITALITY OS&E, COMMERCIAL KITCHEN & LAUNDRY EQUIPMENT
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-normal text-left max-w-3xl">
              For over 50 years, Agromech Hospitality has been a trusted partner to leading hotels and restaurants, shaping exceptional hospitality experiences across India, and we now bring the same legacy of trust and service to the Middle East. From table to room, kitchen to laundry, we provide complete hospitality solutions including premium tabletop products, in-room amenities, housekeeping supplies, and commercial kitchen and laundry equipment. Our expertise covers supply, installation, and project support, ensuring seamless solutions for the modern hospitality industry.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/journey"
                className="relative z-10 bg-white !text-zinc-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:!bg-[#FD8E0E] hover:!text-white transition-all duration-300 shadow-lg no-underline inline-block text-sm"
              >
                Our Journey In India
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

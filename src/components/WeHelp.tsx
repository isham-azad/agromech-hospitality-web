"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WeHelp = () => {
  return (
    <section className="we-help-section py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="relative">
            {/* Main Image Grid Container */}
            <div className="relative flex items-center justify-center p-0 sm:p-10">
              {/* Image 1: Background Large */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full sm:w-[85%] relative z-0"
              >
                <img
                  src="/images/img-grid-1.jpg?v=1"
                  alt="Interior Design 1"
                  className="w-full rounded-[1.5rem] sm:rounded-[2.5rem] shadow-lg"
                />
              </motion.div>

              {/* Image 2: Top Right Small */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden sm:block absolute -top-5 right-0 w-[35%] z-20"
              >
                <img
                  src="/images/img-grid-2.jpg?v=1"
                  alt="Interior Design 2"
                  className="w-full rounded-[1.5rem] shadow-xl border-4 border-white"
                />
              </motion.div>

              {/* Image 3: Bottom Right Overlapping (Blue Stool) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:block absolute -bottom-10 -right-5 w-[50%] z-10"
              >
                <img
                  src="/images/img-grid-3.jpg?v=1"
                  alt="Interior Design 3"
                  className="w-full rounded-[2rem] shadow-2xl border-4 border-white"
                />
              </motion.div>

              {/* Decorative background dots */}
              <div className="absolute -top-5 -left-5 w-40 h-40 opacity-10 -z-10">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-[#FD8E0E] rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 sm:gap-8 ps-lg-12"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#211e51] leading-tight">
              We Help <span className="text-[#FD8E0E]">Our Clients Succeed</span>
            </h2>
            {/* <p className="text-zinc-600 leading-relaxed text-base">
              At Agromech Hospitality, we are dedicated to elevating operational standards and enhancing guest experiences for our partners through innovative products and specialized expertise.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8 mt-2">
              {[
                {
                  title: "Our Clients Succeed",
                  desc: "We support our clients in creating efficient, high-performing, and world-class hospitality operations through reliable products and customized solutions."
                },
                {
                  title: "Our Clients Deliver Exceptional Guest Experiences",
                  desc: "By providing premium hospitality solutions, we enable our clients to enhance service quality and customer satisfaction."
                },
                {
                  title: "Our Clients Build Efficient Operations",
                  desc: "Our innovative kitchen, laundry, and operating solutions improve productivity, workflow, and operational performance."
                },
                {
                  title: "Our Clients Create Hospitality Excellence",
                  desc: "From luxury hotels to large-scale catering facilities, we deliver solutions that meet the highest industry standards."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 group">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FD8E0E] group-hover:scale-125 transition-transform flex-shrink-0"></div>
                    <h5 className="text-base font-bold text-zinc-900 uppercase tracking-wide leading-tight">{item.title}</h5>
                  </div>
                  <div className="ps-4">
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 sm:pt-6">
              <a href="/solutions" className="inline-block bg-[#2f2f2f] text-white text-[11px] font-bold uppercase tracking-widest px-12 py-4 rounded-full transition-all hover:bg-zinc-900 active:scale-95 text-center w-full sm:w-auto">Explore Our Solutions</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WeHelp;

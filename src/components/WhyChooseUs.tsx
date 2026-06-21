"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Trusted Industry Expertise",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      desc: "Serving 4-star and 5-star hotels, catering companies, airlines, central kitchens, and palaces across the Gulf region."
    },
    {
      title: "End-to-End Project Support",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      desc: "From supply and installation to maintenance and after-sales service, we ensure smooth project execution."
    },
    {
      title: "Global Brands & Premium Quality",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      desc: "Partnering with internationally recognized brands to deliver reliable and high-performance hospitality solutions."
    },
    {
      title: "Customized & Innovative Solutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      desc: "Tailor-made concepts designed to improve operational efficiency and enhance guest experiences."
    }
  ];

  return (
    <section className="why-choose-section py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 mb-6 relative inline-block">
              Why Choose <span className="text-[#221f51]">Agromech Hospitality</span>?
              <span className="block h-1 w-50 bg-[#221f51] mt-3"></span>
            </h2>

            <div className="mt-2 max-w-lg mb-10 md:mb-12">
              <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-2">One-Stop Hospitality Solutions</h3>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Complete solutions for commercial kitchens, laundry equipment, operating supplies, linen, and outdoor furniture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex flex-row md:flex-col items-start gap-4 md:gap-4 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center p-3 md:p-4 group-hover:bg-[#221f51]/10 transition-colors text-[#221f51] flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-zinc-900 mb-1 md:mb-2 uppercase tracking-wide">{f.title}</h4>
                    <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/why-choose-us-img.jpg?v=1"
                alt="Why Choose Us"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
              />
            </div>
            {/* Decorative dots background using tailwind grid */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 z-0">
              <div className="grid grid-cols-6 gap-2 h-full w-full">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#221f51] rounded-full"></div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



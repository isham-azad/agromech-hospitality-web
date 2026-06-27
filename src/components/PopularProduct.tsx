"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    name: "SUPPLY",
    image: "/images/services/service-1.jpg",
    desc: "We maintain strong partnerships with internationally reputed equipment manufacturers, enabling us to offer competitive pricing by eliminating intermediaries. For fabrication, we collaborate with leading local facilities where we ensure strict quality control, efficiency, and compliance with international standards. Our diverse sourcing network allows us to supply equipment from various origins to match each project’s specific requirements and client preferences. We carefully select reliable logistics partners to guarantee not only cost efficiency but also timely and secure deliveries. For time-sensitive projects, we work closely with TNT to ensure deadlines are consistently met."
  },
  {
    name: "INSTALLATION",
    image: "/images/services/service-3.png",
    desc: "Our specialist installation team includes experienced fabricators, welders, plumbers, and catering equipment engineers. We manage all types of foodservice equipment installations, working closely with manufacturers, consultants, contractors, and end users. Led by dedicated site supervisors and overseen by a project manager, our team delivers projects efficiently — even within tight deadlines, challenging site conditions, and complex environments. We ensure full coordination from design stage through final handover. Our services include complete kitchen installations (including non-standard layouts), equipment upgrades and adaptations, refurbishment, re-installation, and relocation of equipment. No matter how complex the site or requirement, we are equipped to deliver on time and to the highest standard."
  },
  {
    name: "SERVICE & MAINTENANCE",
    image: "/images/services/service-5.jpg",
    desc: "We understand that equipment breakdowns cause costly downtime, so we provide fast, efficient service and repair solutions. From the moment you contact our Service Desk, the process is simple, transparent, and responsive, with real support staff available for advice and updates. We ensure accurate call logging, quick appointment scheduling (including early mornings), rapid estimates, and fast repairs supported by one of the largest spare parts inventories in the UAE. Our service vans are fully stocked to minimize delays. Offering everything from on-call repairs to Annual Maintenance Contracts and Planned Preventative Maintenance, our trained and authorized technicians deliver reliable and professional after-sales support you can trust."
  },
  {
    name: "TECHNICAL TEAM",
    image: "/images/services/service-4.png",
    desc: "Our technicians are carefully selected, fully trained to both industry and company standards, and regularly attend manufacturers’ courses to stay updated on the latest products and repair techniques. All are directly employed by us and available on call. We have specialists covering all types of commercial catering equipment, including Gas equipment (ranges, woks, combination ovens, fryers, bratt pans, Warewashing); Coffee machines, beverage equipment, juicers, blenders, ice cubers, and snack line equipment; and Induction units, microwaves, vacuum packing machines, combination ovens, bakery equipment, and refrigeration."
  },
  {
    name: "MAINTENANCE & SPARES",
    image: "/images/img-grid-1.jpg",
    desc: "An AGROMECH Maintenance Contract helps keep your kitchen equipment efficient and minimizes downtime. Key benefits include professional servicing of all equipment, fewer breakdowns, early detection of issues, and extended equipment lifespan. Additionally, Agromech maintains an extensive inventory of spare parts in our Al Quoz facility, with service vans stocked for fast on-site repairs. Strong global supplier links allow us to source even rare or non-standard parts directly from manufacturers at highly competitive rates."
  },
];

const PopularProduct = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section className="popular-product pt-24 !pb-6 bg-zinc-50 font-inter relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center mb-12 mt-5">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">Our <span className="text-[#FD8E0E]">Services</span></h2>
            <div className="w-20 h-1 bg-[#FD8E0E]"></div>
          </div>
          <div className="flex gap-4">
            <button id="service-prev" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#FD8E0E] hover:text-[#FD8E0E] transition-all">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button id="service-next" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:border-[#FD8E0E] hover:text-[#FD8E0E] transition-all">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: "#service-prev",
            nextEl: "#service-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-widest">{s.name}</h3>
                  <p className="text-sm text-zinc-500 line-clamp-3 leading-relaxed flex-grow">
                    {s.desc}
                  </p>
                  <button
                    onClick={() => setSelectedService(s)}
                    className="text-xs font-bold tracking-[0.2em] uppercase text-[#FD8E0E] border-b-2 border-[#FD8E0E]/20 hover:border-[#FD8E0E] transition-all pt-2 flex items-center gap-2 group/btn self-start"
                  >
                    Read More
                    <i className="fas fa-arrow-right text-[10px] transform group-hover/btn:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-zinc-900/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-y-auto max-h-[90vh] lg:overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-[#FD8E0E] hover:text-white transition-all z-20"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-16 space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.4em] uppercase block">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight leading-none">{selectedService.name}</h2>
                    <div className="w-16 h-1 bg-[#FD8E0E]"></div>
                  </div>
                  <p className="text-zinc-600 leading-relaxed text-lg font-light">
                    {selectedService.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PopularProduct;

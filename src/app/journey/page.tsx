"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const milestones = [
  {
    year: "1973",
    title: "The Foundation",
    description: "Shri Champalal P. Jain starts Agromech with the manufacturing of agricultural implements, laying the cornerstone of our legacy.",
    image: "/images/journey/Agromech_Champalal_670x.jpg"
  },
  {
    year: "1976-77",
    title: "Manufacturing Excellence",
    description: "A state-of-the-art stainless steel factory is set up, marking our entry into high-quality industrial manufacturing."
  },
  {
    year: "1980",
    title: "Retail Entry",
    description: "Ventured into the retail market with the launch of our first store, bringing our products directly to consumers."
  },
  {
    year: "1982-88",
    title: "Industrial Growth",
    description: "Started industrial supply and transitioned into bulk production to meet the growing demands of the Indian market."
  },
  {
    year: "1992-93",
    title: "Organized Retail",
    description: "Pioneered organized retail in our sector with a dedicated space of 700 sq.ft., focusing on curated customer experiences."
  },
  {
    year: "1995",
    title: "Strategic Expansion",
    description: "Opened a major retail store spanning 5,000 sq.ft., significantly increasing our market presence."
  },
  {
    year: "1999",
    title: "Product Diversification",
    description: "Diversified our portfolio into various product categories and officially commenced trading operations."
  },
  {
    year: "2005",
    title: "Operational Scaling",
    description: "Increased our operational footprint to 20,000 sq.ft. to accommodate growing production and logistics needs."
  },
  {
    year: "2010",
    title: "Exclusive Retail Hub",
    description: "Launched an exclusive retail store with 40,000 sq.ft. of space, setting a new benchmark in hospitality supply retail."
  },
  {
    year: "2014",
    title: "Agromech Homestore",
    description: "Launched the Agromech Homestore with a dedicated shop space of 21,000 sq.ft., focusing on premium home solutions."
  },
  {
    year: "2015",
    title: "Agromech Hotelmart",
    description: "Unveiled Agromech Hotelmart, a specialized shop space of 9,000 sq.ft. tailored for the hospitality industry."
  },
  {
    year: "2018",
    title: "Infrastructure Milestone",
    description: "Expanded our operational capacity significantly, reaching 1.2 lakh sq.ft. of space."
  },
  {
    year: "2019",
    title: "The Kitchen Hub",
    description: "Opened 'Kitchen Hub', a unique one-stop-shop retail store for all commercial and domestic kitchen needs."
  },
  {
    year: "2022",
    title: "Strategic Expansion Phase",
    description: "A year of massive growth, expanding our operational space from 1.8 lakh sq.ft. to a staggering 5.2 lakh sq.ft."
  },
  {
    year: "2023",
    title: "Mega Showroom Launch",
    description: "Launched the flagship Agromech Showroom with a massive 50,000 sq.ft. space, offering an unparalleled shopping experience."
  }
];

export default function JourneyPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] mt-5 flex items-center justify-center overflow-hidden bg-[#221F51]">
        <div className="absolute inset-0">
          <Image
            src="/images/journey/showroom.jpg"
            alt="Our Journey in India"
            fill
            className="object-cover scale-105"
            style={{
              objectPosition: "center -15%"
            }}
            priority
          />
          <div className="absolute inset-0 bg-[#221F51]/75"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" p-8 md:p-12 text-center max-w-3xl"
          >
            <span className="text-[#FD8E0E] font-bold uppercase tracking-[0.4em] mb-4 block text-xs md:text-sm">Est. 1974</span>
            <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 animate-fade-in">
              Our Journey <span className="text-[#FD8E0E]">In India</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#FD8E0E] mx-auto mb-6"></div>
            <p className="text-white/95 text-sm md:text-lg font-light leading-relaxed">
              Five decades of defining hospitality excellence, from local roots to global horizons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 bg-[#221F51]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                A Legacy Built <span className="text-[#FD8E0E]">on Trust</span>
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
                Agromech India operates a state-of-the-art stainless steel fabrication and commercial kitchen equipment manufacturing facility in Hyderabad, India, spread across approximately 10,000 square meters.
              </p>
              <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
                With a workforce of over 900 professionals, we ensure strong production capacity, precision engineering, and consistent quality standards. Our robust manufacturing infrastructure empowers us to efficiently support and deliver complete solutions for our Commercial Kitchen Division.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/journey/warehouse.jpg"
                  alt="Agromech Warehouse"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-16 md:py-20 overflow-hidden"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: `
            linear-gradient(to right, rgba(34, 31, 81, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 31, 81, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      >
        <style jsx>{`
          @media (max-width: 767px) {
            .mobile-line-adjust {
              left: 48px !important;
              transform: translateX(-50%) !important;
            }
            .mobile-dot-adjust {
              left: 57px !important;
              transform: translate(-50%, -50%) !important;
            }
            .mobile-card-adjust {
              margin-left: 80px !important;
              margin-right: 16px !important;
            }
          }
        `}</style>
        <div className="container mx-auto px-0 md:px-6 max-w-6xl relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 -translate-x-1/2 mobile-line-adjust"></div>

          <div className="relative space-y-6 md:space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 mb-1 md:mb-0">
                  <div className={`bg-white/90 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-zinc-200/80 ml-14 md:ml-0 mobile-card-adjust ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    }`}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                      {milestone.image && (
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#FD8E0E]/30 shrink-0 shadow-md">
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <span className="text-[#FD8E0E] font-black text-3xl md:text-4xl block mb-2 md:mb-4">{milestone.year}</span>
                        <h3 className="text-xl md:text-3xl font-bold text-zinc-900 mb-2 md:mb-4">{milestone.title}</h3>
                        <p className="text-zinc-600 leading-relaxed text-sm md:text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dot in Center */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-2 -translate-x-1/2 -translate-y-1/2 z-10 mobile-dot-adjust">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#FD8E0E] rounded-full border-4 border-white shadow-lg shadow-[#FD8E0E]/30 ring-4 md:ring-8 ring-[#FD8E0E]/10"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#221F51] text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-6xl font-black text-[#FD8E0E] mb-2">50+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/60">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-6xl font-black text-[#FD8E0E] mb-2">5.2L+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/60">Sq. Ft. Operational Space</div>
            </div>
            <div>
              <div className="text-3xl md:text-6xl font-black text-[#FD8E0E] mb-2">500+</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/60">Global Brands</div>
            </div>
            <div>
              <div className="text-3xl md:text-6xl font-black text-[#FD8E0E] mb-2">100%</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-0">Ready to start your <span className="text-[#FD8E0E]">journey with us?</span></h2>
          <Link
            href="/contact"
            className="inline-block bg-[#221F51] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:!bg-[#FD8E0E] transition-all no-underline shadow-xl whitespace-nowrap text-xs md:text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

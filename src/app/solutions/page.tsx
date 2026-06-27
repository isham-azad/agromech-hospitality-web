"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const oseSolutions = [
  {
    title: "Custom Chinaware & Porcelain",
    desc: "Bespoke shapes, reactive glazes, custom branding, and unique textures manufactured to complement your dining concepts.",
    icon: "fa-utensils"
  },
  {
    title: "Artisanal Glassware",
    desc: "Tailored crystal and glassware crafted for durability, weight, and optimal beverage presentation.",
    icon: "fa-glass-martini-alt"
  },
  {
    title: "Designer Cutlery & Flatware",
    desc: "Custom finishes (PVD coating, matte, brushed gold, or classic silver) designed to match specific design moodboards.",
    icon: "fa-concierge-bell"
  },
  {
    title: "Premium Linens",
    desc: "Custom-woven table linens, beddings, and bath towels engineered for a luxury tactile feel and high industrial laundry resistance.",
    icon: "fa-scroll"
  },
  {
    title: "Complete Project Procurement",
    desc: "End-to-end OS&E budgeting, sourcing, and logistics management for pre-opening hotel and restaurant projects.",
    icon: "fa-boxes"
  }
];

const kitchenSolutions = [
  {
    title: "Custom Stainless Steel Fabrication",
    desc: "Bespoke worktables, exhaust hoods, sinks, counters, and hot/cold food pass cabinets built to exact kitchen layouts and spatial constraints.",
    icon: "fa-hammer"
  },
  {
    title: "Smart Commercial Kitchen Planning",
    desc: "Optimization of food preparation, cooking, and dishwashing zones to minimize cross-contamination and maximize chef efficiency.",
    icon: "fa-drafting-compass"
  },
  {
    title: "Heavy-Duty Industrial Laundry Systems",
    desc: "Scalable laundry setups engineered for high-throughput linen processing, energy efficiency, and water conservation.",
    icon: "fa-tshirt"
  },
  {
    title: "Turnkey Installation & Commissioning",
    desc: "Seamless MEP (Mechanical, Electrical, Plumbing) integration, equipment testing, and technical onboarding for operations teams.",
    icon: "fa-tools"
  }
];

const whyChooseUs = [
  {
    title: "50+ Years of Legacy",
    desc: "A solid reputation built over five decades of serving global hospitality brands with unmatched precision and trust.",
    icon: "fa-award"
  },
  {
    title: "Moodboard-to-Reality",
    desc: "Our unique ability to interpret interior design renderings and manufacture custom physical items that exactly match your concept.",
    icon: "fa-palette"
  },
  {
    title: "End-to-End Execution",
    desc: "From initial layout planning and custom steel fabrication to equipment testing, commissioning, and operations training.",
    icon: "fa-check-double"
  },
  {
    title: "Global Supply Networks",
    desc: "Direct partnerships with the world's leading brands, combined with our in-house manufacturing, ensures superior quality and cost efficiency.",
    icon: "fa-globe"
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] mt-5 flex items-center justify-center overflow-hidden bg-[#221F51]">
        <div className="absolute inset-0">
          <Image
            src="/images/journey/showroom.jpg"
            alt="Agromech Solutions Overview"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[#221F51]/80"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 text-center max-w-4xl"
          >
            <span className="text-[#FD8E0E] font-bold uppercase tracking-[0.4em] mb-4 block text-xs md:text-sm">Turnkey Excellence</span>
            <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
              Turnkey Solutions for <br />
              <span className="text-[#FD8E0E]">World-Class Hospitality</span>
            </h1>
            <div className="w-16 h-0.5 bg-[#FD8E0E] mx-auto mb-6"></div>
            <p className="text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              From concept moodboards to fully operational environments, Agromech delivers tailored OS&E and heavy commercial infrastructure designed to elevate the guest experience and maximize operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Bespoke OS&E Solutions */}
      <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
        {/* Decorative Grid Line Graphics */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.3em] uppercase block">Section 01 / OS&E</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-none uppercase">
                Bespoke OS&E <br />
                <span className="text-[#FD8E0E]">Solutions</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-800 leading-tight pt-2">
                Tailored Tabletop & Guestroom Experiences
              </h3>
              <p className="text-zinc-600 leading-relaxed text-base md:text-lg font-light">
                We bridge the gap between interior design vision and physical reality. We collaborate closely with project consultants and designers to manufacture and source custom OS&E items that reflect your property's exact brand identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-zinc-100 aspect-[4/3]">
                <Image
                  src="/images/services-3.jpg"
                  alt="Premium Tabletop Styling"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oseSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-zinc-50/50 p-8 rounded-[2rem] border border-zinc-100 flex flex-col gap-5 hover:shadow-xl hover:bg-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FD8E0E]/10 flex items-center justify-center text-[#FD8E0E] group-hover:bg-[#221F51] group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon} text-lg`}></i>
                </div>
                <div className="space-y-3">
                  <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Commercial Kitchen & Laundry Solutions */}
      <section className="py-20 md:py-28 px-6 bg-[#221F51] relative overflow-hidden text-white">
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#FD8E0E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center lg:items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.3em] uppercase block">Section 02 / Engineering</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none uppercase">
                Commercial Kitchen & <br />
                <span className="text-[#FD8E0E]">Laundry Solutions</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-white/90 leading-tight pt-2">
                High-Performance Back-of-House Infrastructure
              </h3>
              <p className="text-white/80 leading-relaxed text-base md:text-lg font-light">
                A seamless guest experience relies on a flawless back-of-house operation. Agromech designs, fabricates, and equips high-volume commercial kitchens and industrial laundries for optimal workflow, hygiene, and longevity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3]">
                <Image
                  src="/images/journey/warehouse.jpg"
                  alt="Industrial Commercial Kitchen"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitchenSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row gap-6 hover:bg-white hover:text-zinc-900 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FD8E0E]/20 flex items-center justify-center text-[#FD8E0E] group-hover:bg-[#221F51] group-hover:text-white transition-all duration-300 shrink-0">
                  <i className={`fas ${item.icon} text-lg`}></i>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase tracking-wider text-sm text-[#FD8E0E] group-hover:text-[#221F51]">
                    {item.title}
                  </h4>
                  <p className="text-white/70 group-hover:text-zinc-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Clients Choose Agromech Solutions */}
      <section className="py-20 md:py-28 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.3em] uppercase block mb-3">Our Core Advantage</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-4">
              Why Clients Choose <span className="text-[#FD8E0E]">Agromech Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-[#FD8E0E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-zinc-100/80 shadow-sm flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FD8E0E]/10 flex items-center justify-center text-[#FD8E0E] group-hover:bg-[#221F51] group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon} text-lg`}></i>
                </div>
                <div className="space-y-3">
                  <h4 className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl md:text-4xl font-black text-zinc-900 uppercase tracking-tight">Ready to Elevate Your Establishment?</h3>
            <p className="text-zinc-500 font-light text-base md:text-lg">Get in touch with our solutions specialists today for a custom blueprint.</p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-[#221F51] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:!bg-[#FD8E0E] hover:!text-[#221F51] transition-all no-underline shadow-xl whitespace-nowrap text-xs md:text-sm active:scale-95"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}

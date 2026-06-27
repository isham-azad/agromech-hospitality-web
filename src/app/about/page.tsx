"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Excellence",
    desc: "We strive for the highest standards in everything we do, from the products we supply to the services we provide.",
    icon: "fa-crown"
  },
  {
    title: "Integrity",
    desc: "Building trust through transparency, honesty, and ethical business practices in every partnership.",
    icon: "fa-balance-scale"
  },
  {
    title: "Innovation",
    desc: "Constantly evolving with the latest technologies to provide cutting-edge solutions for the hospitality sector.",
    icon: "fa-lightbulb"
  },
  {
    title: "Partnership",
    desc: "We view our clients as partners, working closely together to achieve long-term success and growth.",
    icon: "fa-handshake"
  }
];

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] mt-5 flex items-center justify-center overflow-hidden bg-[#221F51]">
        <div className="absolute inset-0">
          <Image
            src="/images/journey/showroom.jpg"
            alt="About Agromech Hospitality"
            fill
            className="object-cover scale-105"
            style={{
              objectPosition: "center -15%"
            }}
            priority
          />
          <div className="absolute inset-0 bg-[#221F51]/60"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" p-10 md:p-16 rounded-[3rem] text-center max-w-4xl"
          >
            <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.4em] uppercase block mb-4">Who We Are</span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight mb-6 leading-none">
              Redefining <br /><span className="text-[#FD8E0E]">Hospitality</span>
            </h1>
            <div className="w-20 h-1 bg-[#FD8E0E] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">Our <span className="text-[#FD8E0E]">Vision</span></h2>
                <p className="text-zinc-600 text-lg leading-relaxed font-light">
                  The Agromech Group’s entry into the hospitality sector was driven by a clear vision — to meet the industry’s growing demand for a comprehensive, high-quality, and reliable product range from a single trusted source.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed font-light">
                  With a network of brands and suppliers across +20 countries, we have the flexibility to offer products of exceptional quality at a wide range of price points. Our commitment to green, carbon-neutral, and sustainable practices adds a layer of social responsibility to every product we deliver.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">Our <span className="text-[#FD8E0E]">Leadership</span></h2>
                <p className="text-zinc-600 text-lg leading-relaxed font-light">
                  Agromech Hospitality Dubai, led by industry veterans Mr. Sanjay Jain and Mr. Joe Thomas, is built on decades of experience and a reputation for integrity and trust.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed font-light">
                  Known for reliability, accountability, and service excellence, the company is committed to delivering high-quality, tailored hospitality solutions that consistently meet and exceed client expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square"
            >
              <Image
                src="/images/img-grid-1.jpg"
                alt="Agromech Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221F51]/40 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl">
                <p className="text-white text-sm font-light italic">
                  "As a one-stop turnkey solutions provider, our mission is to bring value, elegance, and precision to every experience your establishment offers."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-zinc-900">Direct Engagement, <span className="text-[#FD8E0E]">Stronger Partnerships</span></h2>
            <p className="text-zinc-600 text-lg leading-relaxed font-light">
              By eliminating intermediaries, we ensure direct engagement and stronger partnerships with our valued customers. We are dedicated to supporting your success with consistent quality, transparent processes, and unwavering responsibility.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed font-light">
              At Agromech Hospitality, we deliver nothing less than excellence — in quality, value, and class.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Design */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/services/service-2.jpg"
                alt="Agromech Kitchen Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#221F51]/20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-2">
                <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.4em] uppercase">What We Do</span>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">Expert <span className="text-[#FD8E0E]">Design</span></h2>
                <div className="w-20 h-1 bg-[#FD8E0E]"></div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-600 text-lg leading-relaxed font-light">
                  We provide complete commercial kitchen design and installation solutions tailored to any budget or project size. From initial consultation to final handover, our experienced team manages the entire process, ensuring HACCP-compliant designs approved by local Food Control Authorities.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed font-light">
                  We specialize in planning and equipping kitchens for cafés, restaurants, hotels, healthcare facilities, educational institutions, and large-scale production units. As independent suppliers, we recommend the most reliable and suitable equipment for each project.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed font-light">
                  Whether you need a new kitchen, renovation, or upgrade, we deliver efficient, practical, and cost-effective solutions. Design fees may apply but can often be offset against equipment orders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section (The "Why") */}
      <section className="py-24 bg-[#221F51] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FD8E0E]/5 -skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none">A Legacy of <span className="text-[#FD8E0E]">50 Years</span></h2>
            <div className="w-24 h-1 bg-[#FD8E0E] mx-auto"></div>
            <p className="text-white/80 text-xl leading-relaxed font-light max-w-3xl mx-auto">
              From our humble beginnings in India to our expanding presence in the UAE and the wider Gulf region, Agromech Hospitality has remained committed to a single goal: delivering the highest quality commercial kitchen and hospitality equipment.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
              <div className="space-y-2">
                <span className="text-[#FD8E0E] text-4xl font-black block">50+</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Years Experience</span>
              </div>
              <div className="space-y-2">
                <span className="text-[#FD8E0E] text-4xl font-black block">1M+</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Sq. Ft. Operational Space</span>
              </div>
              <div className="space-y-2">
                <span className="text-[#FD8E0E] text-4xl font-black block">900+</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Professionals</span>
              </div>
              <div className="space-y-2">
                <span className="text-[#FD8E0E] text-4xl font-black block">100%</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Client Trust</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">Our Core <span className="text-[#FD8E0E]">Values</span></h2>
            <div className="w-24 h-1 bg-[#FD8E0E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FD8E0E]/10 flex items-center justify-center text-[#FD8E0E] mb-8 group-hover:bg-[#221F51] group-hover:text-white transition-all duration-500">
                  <i className={`fas ${v.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-widest mb-4">{v.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light text-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-0 leading-none">Ready to partner <br className="hidden md:block" /><span className="text-[#FD8E0E]">with Agromech?</span></h2>
          <Link
            href="/contact"
            className="inline-block bg-[#221F51] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:!bg-[#FD8E0E] transition-all no-underline shadow-xl whitespace-nowrap text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

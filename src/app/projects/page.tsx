"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sectors = [
  {
    id: "hospitality",
    name: "Hospitality & Fine Dining",
    icon: "fa-hotel",
    projects: [
      { id: "H01", name: "Kerzner Group", client: "Kerzner Group", location: "Dubai, UAE", year: "2025", status: "Operational", image: "https://www.foodinspace.net/wp-content/uploads/2024/02/arianas-persian-kitchen-atlantis-the-royal-dubai-united-arab-emirates-01.jpg" },
      { id: "H02", name: "Rikas Group", client: "Rikas Group", location: "Dubai, UAE", year: "2025", status: "Operational", image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/Nrz2H0Jp-La-Cantine-du-Faubourg-LEAD.jpg" },
      { id: "H03", name: "Kitopi Dubai", client: "Kitopi Dubai", location: "Dubai, UAE", year: "2026", status: "Operational", image: "https://static.wixstatic.com/media/aeb4cc_1b3660c40dc44814be2b1cd38e570597~mv2.jpg/v1/fill/w_980,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aeb4cc_1b3660c40dc44814be2b1cd38e570597~mv2.jpg" },
      { id: "H04", name: "Lulu Group", client: "Lulu Group", location: "GCC", year: "2026", status: "Operational", image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/Nrz2H0Jp-La-Cantine-du-Faubourg-LEAD.jpg" },
      { id: "H05", name: "Shinobi Restaurant", client: "Shinobi Restaurant", location: "Jumeirah, Dubai", year: "2026", status: "Operational", image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFsi_MMtWnK8cjBAcu3glzsnnfOMX96bK9GCk3XaeWucJCpN18gMzKmE9K51GTm8cQo918AK6azBqEEh54AfV3Vntf9oHRaSAteY08CnABtTWL-YnvleCzfA-rEInxirEa8teEoV2ZhchU=s680-w680-h510" },
      { id: "H09", name: "Emaar Group", client: "Emaar Group", location: "Dubai Marina, UAE", year: "2025", status: "Operational", image: "https://www.killadesign.com/wp-content/uploads/2021/02/Killa-Design-VIDA-Hotel-Dubai-Marina-Exterior-1.jpg" },
      { id: "H12", name: "Marriott Hotel", client: "Marriott", location: "GCC", year: "2025", status: "Operational", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop" },
      { id: "H13", name: "Address Hotel", client: "Emaar", location: "UAE", year: "2025", status: "Operational", image: "https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=2000&auto=format&fit=crop" },
      { id: "H15", name: "Marriott Executive Apartments", client: "Marriott", location: "Hyderabad, India", year: "2021", status: "Operational", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop" },
      { id: "H16", name: "Marriott", client: "Marriott", location: "Hyderabad, India", year: "2020", status: "Operational", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop" },
      { id: "H17", name: "Courtyard by Marriott", client: "Marriott", location: "Hyderabad, India", year: "2019", status: "Operational", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2000&auto=format&fit=crop" },
      { id: "H18", name: "Hyderabad Race Club", client: "HRC", location: "Hyderabad, India", year: "2018", status: "Operational", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" },
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Public",
    icon: "fa-hospital",
    projects: [
      { id: "P01", name: "Indian Air Force Academy", client: "IAF", location: "Hyderabad, India", year: "2020", status: "Operational", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" },
      { id: "P02", name: "Osmania General Hospital", client: "Govt", location: "Hyderabad, India", year: "2020", status: "Operational", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" },
      { id: "P03", name: "Apollo Hospital", client: "Apollo Group", location: "Hyderabad, India", year: "2021", status: "Operational", image: "https://i0.wp.com/www.killercigarettes.com/wp-content/uploads/2019/08/Apollo-Hospital.png?w=623&ssl=1" },
      { id: "P04", name: "Yashoda Hospital", client: "Yashoda", location: "Hyderabad, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" },
      { id: "P05", name: "U.S. Army Base", client: "Federal", location: "Djibouti, Africa", year: "2019", status: "Operational", image: "https://images.unsplash.com/photo-1579362094520-20f533967284?q=80&w=2000&auto=format&fit=crop" },
      { id: "P06", name: "Labour Camp Kitchen", client: "NEOM", location: "NEOM, KSA", year: "2023", status: "Operational", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" },
    ]
  },
  {
    id: "corporate",
    name: "Corporate & Tech Hubs",
    icon: "fa-building",
    projects: [
      { id: "C02", name: "Container Kitchens (17 units)", client: "KSA", location: "KSA", year: "2023", status: "Operational", image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=2000&auto=format&fit=crop" },
      { id: "C03", name: "LTI Mind Tree", client: "LTI", location: "Hyderabad, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" },
      { id: "C04", name: "Tata Advance System", client: "TATA", location: "Hyderabad, India", year: "2021", status: "Operational", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" },
      { id: "C05", name: "Capgemini", client: "Capgemini", location: "Hyderabad, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop" },
      { id: "C06", name: "Genpact", client: "Genpact", location: "Noida, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop" },
      { id: "C07", name: "Genpact", client: "Genpact", location: "Chennai, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop" },
      { id: "C08", name: "Genpact", client: "Genpact", location: "Madurai, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2000&auto=format&fit=crop" },
      { id: "C09", name: "Capgemini", client: "Capgemini", location: "Chennai, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" },
      { id: "C10", name: "Capgemini", client: "Capgemini", location: "Madurai, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2000&auto=format&fit=crop" },
      { id: "C11", name: "Genpact", client: "Genpact", location: "Jodhpur, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" },
      { id: "C12", name: "RITHWIK PROJECTS LTD", client: "NTPC", location: "Jharkhand, India", year: "2023", status: "Operational", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" },
      { id: "C13", name: "FOODIVERSAL FOODS LLP", client: "FOODIVERSAL", location: "Jharkhand, India", year: "2023", status: "Operational", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" },
      { id: "C14", name: "Sodexo", client: "Sodexo", location: "Hyderabad, India", year: "2022", status: "Operational", image: "https://images.unsplash.com/photo-1556761175-5973eb0732da?q=80&w=2000&auto=format&fit=crop" },
    ]
  }
];

const stats = [
  { label: "Total Projects", val: "100+", suffix: "Units" },
  { label: "Countries", val: "20+", suffix: "Nations" },
  { label: "Global Reach", val: "4", suffix: "Continents" },
  { label: "Legacy", val: "50+", suffix: "Years" }
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-60 text-zinc-900 selection:bg-[#D4AF37] selection:text-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Header Section */}
      <header className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-12"
          >
            <div className="space-y-4">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] block">Our Portfolio</span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
                Project <br /> <span className="not-italic text-zinc-100">Archives.</span>
              </h1>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                A meticulously documented legacy of mission-critical hospitality systems, executed with precision across the globe.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-5 border-t border-zinc-100">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-black text-zinc-900">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-zinc-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation Filter Section */}
      <nav className="bg-white border-y border-zinc-100 mb-20">
        <div className="container mx-auto px-6 max-w-7xl py-6 flex items-center gap-12 overflow-x-auto no-scrollbar">
          {["all", ...sectors.map(s => s.id)].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap ${activeTab === tab ? "text-[#D4AF37]" : "text-zinc-400 hover:text-zinc-600"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Project Archive List */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="space-y-60">
          {sectors.filter(s => activeTab === "all" || s.id === activeTab).map((sector) => (
            <div key={sector.id} className="space-y-24">
              <div className="flex flex-row items-end justify-between gap-4 border-b border-zinc-100 pb-8 md:pb-12">
                <div className="space-y-2 md:space-y-4 flex-1">
                  <div className="flex items-center gap-2 md:gap-4 text-[#D4AF37]">
                    <i className={`fas ${sector.icon} text-[10px] md:text-sm`}></i>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Sector Archive</span>
                  </div>
                  <h2 className="text-2xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">{sector.name}</h2>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-5xl sm:text-8xl font-black text-zinc-50 leading-none select-none">{sector.projects.length.toString().padStart(2, '0')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
                {sector.projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group project-card space-y-4 sm:space-y-6"
                  >
                    <div className="relative aspect-[4/5] bg-zinc-950 sm:bg-zinc-50 rounded-2xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-90 sm:opacity-20 sm:group-hover:opacity-100"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent sm:from-white sm:via-white/80 sm:to-transparent opacity-100 sm:group-hover:opacity-0 transition-opacity duration-700"></div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute inset-0 p-4 sm:p-10 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                          <span className="text-[8px] sm:text-[10px] font-black text-white/50 sm:text-zinc-400 group-hover:text-white transition-colors">{project.id}</span>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-[6px] sm:text-[8px] font-black uppercase tracking-widest text-[#D4AF37] shadow-sm">
                            {project.status}
                          </span>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white/60 sm:text-zinc-400 group-hover:text-black/80 sm:group-hover:text-black/80 transition-colors">{project.year}</div>
                          <h3 className="text-xs sm:text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight sm:leading-none text-black transition-colors">
                            {project.name.split(' ').slice(0, 2).join(' ')} <br />
                            <span className="text-black transition-colors">{project.name.split(' ').slice(2).join(' ')}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Decorative Element */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="px-1 sm:px-4 flex flex-col sm:flex-row justify-between items-start sm:items-end border-l border-zinc-100 ml-2 sm:ml-4 gap-2 sm:gap-0">
                      <div className="space-y-0.5">
                        <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-300 block">Location / Country</span>
                        <span className="text-[10px] sm:text-sm font-medium text-zinc-600 leading-tight">{project.location}</span>
                      </div>
                      <div className="text-left sm:text-right space-y-0.5">
                        <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-zinc-300 block">Stakeholder</span>
                        <span className="text-[10px] sm:text-sm font-bold text-zinc-900 leading-tight">{project.client}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Footer CTA */}
      <section className="container mx-auto px-6 max-w-5xl mt-32 mb-20 relative">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 skew-x-12 translate-x-1/2"></div>

          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
              Ready to <span className="text-[#D4AF37]">Lead the Industry?</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed">
              We provide turnkey solutions for the world's most ambitious hospitality projects. Connect with our global technical team today.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="ag-footer-btn group inline-flex items-center gap-6 bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-xl"
              >
                <span>Initiate Consultation</span>
                <i className="fas fa-arrow-right transition-all duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;700;900&display=swap');
        body { font-family: 'Outfit', sans-serif; }
        .ag-footer-btn:hover {
          background-color: white !important;
          color: black !important;
        }
        .ag-footer-btn:hover * {
          color: black !important;
        }
      `}</style>
    </main>
  );
};

export default ProjectsPage;

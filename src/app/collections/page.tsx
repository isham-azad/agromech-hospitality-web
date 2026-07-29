"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const collectionsList: CollectionItem[] = [
  {
    id: "tableware",
    title: "Nikko Tableware",
    category: "Table Top",
    description: "Exquisite hotel-grade dinnerware combining timeless Japanese aesthetics with ultimate durability for elite dining.",
    image: "/images/catalogues/nikko-japan.jpg",
    link: "/categories/table-top"
  },
  {
    id: "glassware",
    title: "Luigi Bormioli Glassware",
    category: "Bar & Glassware",
    description: "Italian crystal-clear, durable glass collections designed specifically for wine, spirits, and premium mixology.",
    image: "/images/catalogues/luigi-bormioli.jpg",
    link: "/categories/barware"
  },
  {
    id: "cutlery",
    title: "Belo Inox & Sola Cutlery",
    category: "Table Top",
    description: "Premium Portuguese and Dutch flatware collections engineered for perfect balance, elegance, and durability.",
    image: "/images/catalogues/belo-inox.jpg",
    link: "/categories/table-top"
  },
  {
    id: "buffetware",
    title: "Craster Presentation Systems",
    category: "Buffetware",
    description: "Innovative buffet risers, luxury presentation systems, and intelligent space-saving banquet displays.",
    image: "/images/catalogues/craster.jpg",
    link: "/categories/buffetware"
  },
  {
    id: "tabletop-aps",
    title: "APS Germany Collection",
    category: "Buffet & Bar",
    description: "Professional German-engineered buffetware, tabletop presentation accessories, and robust bar utensils.",
    image: "/images/catalogues/aps.jpg",
    link: "/categories/buffetware"
  },
  {
    id: "serveware-lava",
    title: "Lava Cast Iron Serveware",
    category: "Serveware",
    description: "Robust cast iron cooking and presentation ware that retains heat perfectly for high-end hot presentations.",
    image: "/images/catalogues/lava.jpg",
    link: "/categories/table-top"
  },
  {
    id: "kitchen-robot",
    title: "Robot Coupe Smallware",
    category: "Kitchen & Stewarding",
    description: "High-performance vegetable prep, mixers, and processing units for high-volume, precision commercial kitchens.",
    image: "/images/catalogues/robot-coupe.jpg",
    link: "/categories/kitchen-smallware-stewarding"
  },
  {
    id: "barware-prof",
    title: "Bar Professional",
    category: "Barware",
    description: "Complete professional barware solutions, cocktail shakers, tools, and accessories for master mixology.",
    image: "/images/catalogues/bar-professional.jpg",
    link: "/categories/barware"
  }
];

export default function CollectionsPage() {
  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-40 selection:bg-[#FD8E0E] selection:text-white font-sans">
      {/* Ornamental Subtle Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.02] z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Block */}
        <header className="text-center space-y-6 mb-20">
          <span className="text-[#FD8E0E] text-[10px] font-black uppercase tracking-[0.5em] block">
            Premium Brands
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-zinc-900 italic">
            Agromech <br />
            <span className="not-italic text-zinc-300">Collections.</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover our curated, world-renowned hospitality collections tailored to deliver unmatched aesthetic excellence and commercial durability.
          </p>
          <div className="w-16 h-0.5 bg-[#FD8E0E] mx-auto mt-8"></div>
        </header>

        {/* Collections Grid - 4 items per line on large screens */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {collectionsList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 h-full"
            >
              {/* Card Upper Part */}
              <div className="flex flex-col">
                {/* Thumb Image Area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100 border-b border-zinc-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-[#FD8E0E] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-zinc-900 font-bold uppercase tracking-tight text-lg leading-snug group-hover:text-[#FD8E0E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={item.link}
                  className="w-full bg-zinc-900 group-hover:bg-[#221F51] text-white py-3 px-4 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all duration-300 active:scale-[0.98] focus:outline-none flex justify-center items-center gap-2 shadow-sm group-hover:shadow-md no-underline"
                >
                  <span>View Products</span>
                  <i className="fas fa-arrow-right text-[8px] transform group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}

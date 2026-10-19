"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PolicySection {
  id: string;
  num: string;
  title: string;
  content: string;
  boldBullets?: { term: string; definition: string }[];
  plainBullets?: string[];
}

const policySections: PolicySection[] = [
  {
    id: "acceptance",
    num: "1",
    title: "Acceptance of Terms",
    content: "By accessing or using the Agromech Hospitality website, requesting quotations, or purchasing our products and services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of the website."
  },
  {
    id: "use-of-site",
    num: "2",
    title: "Use of Our Website",
    content: "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:",
    plainBullets: [
      "Use the site for any unlawful, fraudulent, or unauthorized purpose.",
      "Attempt to gain unauthorized access to our systems, servers, or databases.",
      "Introduce viruses, malware, or any harmful code.",
      "Harvest, scrape, or extract product data, catalogues, or user information."
    ]
  },
  {
    id: "products",
    num: "3",
    title: "Products and Services",
    content: "Agromech Hospitality supplies commercial kitchen, laundry, and hospitality equipment and related services. Product images, specifications, and descriptions are provided for general reference and may be updated without notice. Availability is subject to stock and manufacturer confirmation."
  },
  {
    id: "quotations",
    num: "4",
    title: "Quotations and Orders",
    content: "Quotations are issued based on the information you provide and are subject to the following:",
    boldBullets: [
      {
        term: "Validity",
        definition: "Quotations remain valid for the period stated on the quotation document. Prices may change after expiry."
      },
      {
        term: "Order Confirmation",
        definition: "An order is binding only once we issue a written confirmation and any required advance payment is received."
      },
      {
        term: "Changes",
        definition: "Changes or cancellations after confirmation may incur charges, particularly for special-order or custom-fabricated items."
      }
    ]
  },
  {
    id: "pricing",
    num: "5",
    title: "Pricing and Payment",
    content: "All prices are quoted in UAE Dirhams (AED) unless stated otherwise and are exclusive of VAT, which will be added at the prevailing rate. Payment terms are as specified in the quotation or contract. We reserve the right to withhold delivery or installation until payment obligations are met."
  },
  {
    id: "delivery",
    num: "6",
    title: "Delivery and Installation",
    content: "Delivery and installation dates are estimates and may be affected by factors outside our control, including manufacturer lead times, customs clearance, and site readiness. Risk of loss passes to you on delivery, while title to the goods passes only upon full payment. You are responsible for ensuring the site is prepared, with suitable access and utility connections."
  },
  {
    id: "warranty",
    num: "7",
    title: "Warranty and Returns",
    content: "Products carry the manufacturer's warranty, the terms of which vary by brand and are provided with your order. Warranty does not cover damage caused by misuse, improper installation by third parties, lack of maintenance, or unauthorized modification. Returns are accepted only for defective or incorrectly supplied goods and must be reported promptly after delivery."
  },
  {
    id: "ip",
    num: "8",
    title: "Intellectual Property",
    content: "All content on this website, including text, logos, graphics, images, catalogues, and layouts, is owned by or licensed to Agromech Hospitality and its brand partners. You may not copy, reproduce, distribute, or create derivative works without our prior written consent."
  },
  {
    id: "liability",
    num: "9",
    title: "Limitation of Liability",
    content: "To the fullest extent permitted by UAE law, Agromech Hospitality shall not be liable for any indirect, incidental, or consequential loss, including loss of profit or business interruption, arising from the use of this website or our products. Our total liability shall not exceed the amount paid for the relevant product or service."
  },
  {
    id: "links",
    num: "10",
    title: "Third-Party Links",
    content: "Our website may link to third-party websites or brand partner sites. We have no control over, and accept no responsibility for, their content or practices. Visiting such links is at your own risk."
  },
  {
    id: "law",
    num: "11",
    title: "Governing Law",
    content: "These Terms & Conditions are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Any dispute shall be subject to the exclusive jurisdiction of the Dubai courts."
  },
  {
    id: "changes",
    num: "12",
    title: "Changes to These Terms",
    content: "We reserve the right to modify these Terms & Conditions at any time. Updates will be posted on this page, and continued use of the website constitutes acceptance of the revised terms."
  },
  {
    id: "contact",
    num: "13",
    title: "Contact Information",
    content: "If you have any questions about these Terms & Conditions, please contact us:"
  }
];

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    return policySections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.boldBullets?.some(
          (b) =>
            b.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.definition.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        sec.plainBullets?.some((b) =>
          b.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-40 selection:bg-[#FD8E0E] selection:text-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Premium Header Block */}
        <header className="relative bg-[#221F51] text-white rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl mb-12">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FD8E0E]/15 rounded-full filter blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FD8E0E]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4 max-w-2xl">
            <span className="text-[#FD8E0E] text-[10px] font-black uppercase tracking-[0.4em] block">
              Legal Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none italic">
              Terms <span className="text-[#FD8E0E] not-italic">&amp; Conditions.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
              Please read these terms carefully. They govern your use of the Agromech Hospitality Dubai website and the purchase of our products and services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-medium text-white/50">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <i className="far fa-calendar-alt text-[#FD8E0E]"></i>
                <span>Last Updated: June 2026</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <i className="fas fa-shield-alt text-[#FD8E0E]"></i>
                <span>Governed by UAE Law</span>
              </span>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: TOC and Search Tool */}
          <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white rounded-3xl border border-zinc-100 p-6 shadow-sm space-y-6">
              {/* Search Box */}
              <div className="space-y-2">
                <label className="block text-[8px] font-black uppercase tracking-widest text-zinc-400">
                  Search Terms
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">
                    <i className="fas fa-search text-[10px]"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search section..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-100/60 rounded-xl py-2.5 pl-9 pr-3 text-[11px] text-zinc-800 focus:outline-none focus:border-[#FD8E0E] transition-all"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                <span className="block text-[8px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                  Sections
                </span>
                <nav className="flex flex-col gap-1.5 max-h-[320px] lg:max-h-none overflow-y-auto no-scrollbar">
                  {filteredSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleScrollTo(sec.id)}
                      className="text-left text-[10px] font-bold text-zinc-500 hover:text-[#FD8E0E] uppercase tracking-wider py-1 border-l-2 border-transparent hover:border-[#FD8E0E] pl-3 transition-all focus:outline-none"
                    >
                      {sec.num}. {sec.title}
                    </button>
                  ))}
                  {filteredSections.length === 0 && (
                    <span className="text-xs text-zinc-400 font-light">No sections matched.</span>
                  )}
                </nav>
              </div>
            </div>

            {/* Support Highlight Box */}
            <div className="bg-[#221F51] text-white rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-[#FD8E0E]/15 rounded-full filter blur-[20px]"></div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">Legal Operations</h4>
              <p className="text-[10px] text-white/70 leading-relaxed font-light mb-4">
                For questions about these terms, orders, or contracts, please contact our team.
              </p>
              <a href="mailto:info@agromechhospitality.com" className="text-[10px] font-bold text-white hover:text-[#FD8E0E] flex items-center gap-1.5 no-underline transition-colors">
                <i className="fas fa-envelope text-[11px]"></i>
                <span>info@agromechhospitality.com</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Policies */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredSections.map((sec, idx) => (
                <motion.section
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[2rem] border border-zinc-100 p-6 md:p-10 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:border-zinc-200/50 transition-all duration-300 scroll-mt-24"
                >
                  <div className="flex items-center gap-3 border-b border-zinc-50 pb-4 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#FD8E0E]/10 flex items-center justify-center text-xs font-black text-[#FD8E0E]">
                      {sec.num}
                    </span>
                    <h2 className="text-sm md:text-base font-black text-zinc-900 uppercase tracking-wide">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      {sec.content}
                    </p>

                    {/* Bold Bullet Blocks */}
                    {sec.boldBullets && (
                      <ul className="space-y-3 pt-2">
                        {sec.boldBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FD8E0E] shrink-0"></span>
                            <span className="text-zinc-500 text-sm font-light leading-relaxed">
                              <strong className="text-zinc-800 font-bold tracking-wide block sm:inline mr-1">{bullet.term}:</strong>
                              {bullet.definition}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Plain Bullet Blocks */}
                    {sec.plainBullets && (
                      <ul className="space-y-3 pt-2">
                        {sec.plainBullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FD8E0E] shrink-0"></span>
                            <span className="text-zinc-500 text-sm font-light leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Custom contact block */}
                    {sec.id === "contact" && (
                      <div className="mt-6 bg-[#FCFCFC] border border-zinc-100 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#221F51]/50 block">Customer Support</span>
                          <span className="text-xs font-bold text-zinc-900">Agromech Hospitality Dubai Desk</span>
                        </div>
                        <a
                          href="mailto:info@agromechhospitality.com"
                          className="bg-[#221F51] hover:bg-[#FD8E0E] text-white hover:text-[#221F51] transition-all px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[9px] no-underline focus:outline-none shadow-sm flex items-center gap-2"
                        >
                          <i className="fas fa-envelope-open text-[10px]"></i>
                          <span>info@agromechhospitality.com</span>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.section>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

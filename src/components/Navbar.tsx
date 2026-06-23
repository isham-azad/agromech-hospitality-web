"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryDrawer from "./EnquiryDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    const handleOpenEnquiry = () => {
      setIsEnquiryOpen(true);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-enquiry-drawer", handleOpenEnquiry);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-enquiry-drawer", handleOpenEnquiry);
    };
  }, []);

  const leftLinks = [
    { name: "About us", href: "/about" },
    // { name: "Brands", href: "/brands" },
    { name: "Catalogues", href: "/catalogues" },
    { name: "Contact us", href: "/contact" },
  ];

  const rightLinks = [
    // { name: "Projects", href: "/projects" },
    { name: "Collections", href: "/collections" },
    { name: "Solutions", href: "/solutions" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-1" : "bg-white py-2"
          }`}
      >
        <style jsx>{`
          @media (min-width: 768px) {
            .desktop-nav-container {
              padding-left: 4rem !important;
              padding-right: 4rem !important;
            }
          }
          @media (min-width: 992px) {
            .desktop-nav-container {
              padding-left: 4.8rem !important;
              padding-right: 4.8rem !important;
            }
          }
          @media (min-width: 1200px) {
            .desktop-nav-container {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
          }
        `}</style>
        <div className="w-full px-4 sm:px-5 desktop-nav-container">
          <div className="relative flex items-center justify-between py-1">

            {/* 1. LOGO: Left on mobile, Absolute Centered on desktop */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex items-center z-10">
              <Link href="/" className="no-underline flex items-center">
                <Image
                  src="/images/logo-dark.png"
                  alt="Agromech Logo"
                  width={150}
                  height={40}
                  className={`transition-all duration-300 h-auto ${scrolled ? "w-[100px] md:w-[120px]" : "w-[110px] md:w-[150px]"
                    }`}
                  loading="eager"
                />
              </Link>
            </div>

            {/* 2. Left Navigation (Desktop only) */}
            <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
              {leftLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 hover:text-[#FD8E0E] transition-colors no-underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 3. Right Navigation & CTA (Desktop only) */}
            <div className="hidden md:flex items-center space-x-7 lg:space-x-8">
              <div className="flex items-center space-x-6 lg:space-x-7">
                {rightLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 hover:text-[#FD8E0E] transition-colors no-underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-[#221F51] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-[#FD8E0E] hover:text-[#221F51] transition-all no-underline focus:outline-none flex items-center gap-2"
              >
                <i className="fas fa-contact-card"></i>
                <span>Enquire Now</span>
              </button>
            </div>

            {/* 4. Mobile Controls (Mobile only): Enquire & Hamburger aligned to the right end */}
            <div className="md:hidden flex items-center gap-3 z-10">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-[#221F51] text-white text-[8px] font-black uppercase tracking-[0.1em] px-3 py-1.5 hover:bg-[#FD8E0E] hover:text-[#221F51] transition-all no-underline focus:outline-none flex items-center gap-1 mobile-enquire-btn"
              >
                <i className="fas fa-contact-card text-[10px]"></i>
                <span>Enquire</span>
              </button>
              <button
                className="text-zinc-900 focus:outline-none p-1.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                {[...leftLinks, ...rightLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-900 hover:text-[#FD8E0E] no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enquiry Drawer offcanvas */}
      <EnquiryDrawer isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
};

export default Navbar;

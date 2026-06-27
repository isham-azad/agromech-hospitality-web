"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Catalogue {
  id: string;
  title: string;
  category: string;
  pages: number;
  year: string;
  image: string;
  description: string;
}

const cataloguesList: Catalogue[] = [
  {
    id: "Tableware",
    title: "NIKKO",
    category: "Hotel & Restaurant Tableware",
    pages: 131,
    year: "2026",
    image: "/images/catalogues/nikko-japan.jpg",
    description: ""
  },
  {
    id: "Tableware",
    title: "Cosy & Trendy",
    category: "Food Service Collections",
    pages: 183,
    year: "2025",
    image: "/images/catalogues/cosy-trendy.jpg",
    description: ""
  },
  {
    id: "Cutlery",
    title: "SOLA",
    category: "Today, Served by Sola",
    pages: 120,
    year: "2025",
    image: "/images/catalogues/sola.jpg",
    description: ""
  },
  {
    id: "Cutlery",
    title: "BELO INOX",
    category: "Cutlery Portugal",
    pages: 110,
    year: "2025",
    image: "/images/catalogues/belo-inox.jpg",
    description: ""
  },
  {
    id: "Glassware",
    title: "Luigi Bormioli",
    category: "Italian Glassware",
    pages: 31,
    year: "2026",
    image: "/images/catalogues/luigi-bormioli.jpg",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Craster",
    category: "Buffet & Banquet",
    pages: 99,
    year: "2026",
    image: "/images/catalogues/craster.jpg",
    description: ""
  },
  {
    id: "Serveware",
    title: "The Earthy House",
    category: "Wooden Serveware",
    pages: 56,
    year: "2025",
    image: "/images/catalogues/earthy-house.jpg",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "APS Germany",
    category: "Buffet | Tabletop | Bar ",
    pages: 628,
    year: "2025",
    image: "/images/catalogues/aps.jpg",
    description: ""
  },
  {
    id: "Serveware",
    title: "Lava",
    category: "Healty Cooking styles to healthy food",
    pages: 164,
    year: "2025",
    image: "/images/catalogues/lava.jpg",
    description: ""
  },
  {
    id: "Barware",
    title: "Bar Professional",
    category: "Professional Barware",
    pages: 128,
    year: "2026",
    image: "/images/catalogues/bar-professional.jpg",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Cambro 75",
    category: "Food Service Equipments",
    pages: 298,
    year: "2026",
    image: "/images/catalogues/cambro-75.jpg",
    description: ""
  },
  {
    id: "Serveware",
    title: "Tribeca",
    category: "Food Service Products",
    pages: 67,
    year: "2026",
    image: "/images/catalogues/tribeca-turkey.jpg",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Robot Coupe",
    category: "Food Preparation Equipment",
    pages: 192,
    year: "2026",
    image: "/images/catalogues/robot-coupe.jpg",
    description: ""
  },
  {
    id: "Dishwashing Equipment",
    title: "Meiko TopLine",
    category: "Washer Disinfectors",
    pages: 16,
    year: "2026",
    image: "/images/catalogues/meiko-topline.jpg",
    description: ""
  },
  {
    id: "Cleaning & Hygiene",
    title: "TopLine Products Range",
    category: "Cleaning & Disinfecting Appliances",
    pages: 12,
    year: "2026",
    image: "/images/catalogues/topline-range.jpg",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Ecoair",
    category: "Kitchen Odor Control Systems",
    pages: 32,
    year: "2026",
    image: "/images/catalogues/eco-air.png",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Lainox",
    category: "Commercial Combi Ovens",
    pages: 144,
    year: "2026",
    image: "/images/catalogues/lainox.png",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Molteni",
    category: "Luxury Professional Cooking Suites",
    pages: 64,
    year: "2026",
    image: "/images/catalogues/molteni.png",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "ScanBox",
    category: "Insulated Food Transport Carts",
    pages: 80,
    year: "2026",
    image: "/images/catalogues/scanbox.png",
    description: ""
  },
  {
    id: "Catering Equipment",
    title: "Tournus Equipement",
    category: "Stainless Steel Prep & Logistics",
    pages: 112,
    year: "2026",
    image: "/images/catalogues/tournus.png",
    description: ""
  },
];

export default function CataloguesPage() {
  const [selectedCatalogue, setSelectedCatalogue] = useState<Catalogue | null>(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    companyName: "",
    country: "",
    vatnumber: "",
    address: "",
    zipcode: "",
    city: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.firstname.trim()) errors.firstname = "First name is required";
    if (!formData.lastname.trim()) errors.lastname = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Company email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.mobile.trim()) errors.mobile = "Mobile number is required";
    if (!formData.companyName.trim()) errors.companyName = "Company name is required";
    if (!formData.country.trim()) errors.country = "Country is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstname} ${formData.lastname}`,
          email: formData.email,
          phone: formData.mobile,
          company: formData.companyName,
          catalogue: selectedCatalogue?.title || "Agromech Catalogue",
          country: formData.country,
          address: formData.address,
          city: formData.city,
          zipcode: formData.zipcode,
          vatnumber: formData.vatnumber,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        alert("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting catalogue request:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeDrawer = () => {
    setSelectedCatalogue(null);
    setIsSuccess(false);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      companyName: "",
      country: "",
      vatnumber: "",
      address: "",
      zipcode: "",
      city: ""
    });
    setFormErrors({});
  };

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-40 selection:bg-[#FD8E0E] selection:text-white font-sans">
      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Block */}
        <header className="text-center space-y-6 mb-24">
          <span className="text-[#FD8E0E] text-[10px] font-black uppercase tracking-[0.5em] block">
            Digital Archives
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-zinc-900 italic">
            Hospitality <br />
            <span className="not-italic text-zinc-300">Catalogues.</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Access our comprehensive design logs, technical blueprints, and complete commercial equipment portfolios.
          </p>
          <div className="w-16 h-0.5 bg-[#FD8E0E] mx-auto mt-8"></div>
        </header>

        {/* Catalogues Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {cataloguesList.map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer space-y-4"
              onClick={() => setSelectedCatalogue(cat)}
            >
              {/* Portrait Aspect Card Cover (3/4) */}
              <div className="relative aspect-[3/4] bg-zinc-950 rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                {/* Dark Mask for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>

                {/* Cover Content */}
                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] sm:text-[10px] font-black text-white/50">{cat.id}</span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FD8E0E] text-[6px] sm:text-[8px] font-black uppercase tracking-widest text-white">
                      {cat.year}
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <span className="text-[#FD8E0E] text-[7px] sm:text-[9px] font-black uppercase tracking-[0.3em] block">
                      {cat.category}
                    </span>
                    <h3 className="text-sm sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-white/60 text-[8px] sm:text-xs font-light line-clamp-2 leading-relaxed hidden sm:block">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/70 text-[8px] sm:text-[10px] font-black uppercase tracking-widest pt-2">
                      <span>{cat.pages} Pages</span>
                      <span className="w-1.5 h-1.5 bg-[#FD8E0E] rounded-full"></span>
                      <span className="group-hover:text-[#FD8E0E] transition-colors">Request Catalogue</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      {/* Offcanvas Right-Slide Drawer */}
      <AnimatePresence>
        {selectedCatalogue && (
          <>
            {/* Backdrop Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-black z-[110]"
            />

            {/* Right Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-[#221F51] text-white z-[120] shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto no-scrollbar"
            >
              {/* Header and Close */}
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[#FD8E0E] text-[9px] font-black uppercase tracking-[0.3em] block mb-1">
                      Request Catalogue
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-0 leading-tight">
                      {selectedCatalogue.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="text-white/60 hover:text-white p-2 focus:outline-none"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                {/* Form or Success State */}
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="request-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name Row (Mandatory) */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                            First Name <span className="text-[#FD8E0E]">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                            placeholder="John"
                            className={`w-full bg-white/5 border ${formErrors.firstname ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                          />
                          {formErrors.firstname && (
                            <span className="text-red-400 text-[9px] mt-1 block">{formErrors.firstname}</span>
                          )}
                        </div>
                        <div>
                          <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                            Last Name <span className="text-[#FD8E0E]">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className={`w-full bg-white/5 border ${formErrors.lastname ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                          />
                          {formErrors.lastname && (
                            <span className="text-red-400 text-[9px] mt-1 block">{formErrors.lastname}</span>
                          )}
                        </div>
                      </div>

                      {/* Company Email (Mandatory) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                          Company Email <span className="text-[#FD8E0E]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@company.com"
                          className={`w-full bg-white/5 border ${formErrors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                        />
                        {formErrors.email && (
                          <span className="text-red-400 text-[9px] mt-1 block">{formErrors.email}</span>
                        )}
                      </div>

                      {/* Mobile (Mandatory) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                          Mobile Number <span className="text-[#FD8E0E]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className={`w-full bg-white/5 border ${formErrors.mobile ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                        />
                        {formErrors.mobile && (
                          <span className="text-red-400 text-[9px] mt-1 block">{formErrors.mobile}</span>
                        )}
                      </div>

                      {/* Company Name (Mandatory) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                          Company Name <span className="text-[#FD8E0E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Agromech Hospitality"
                          className={`w-full bg-white/5 border ${formErrors.companyName ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                        />
                        {formErrors.companyName && (
                          <span className="text-red-400 text-[9px] mt-1 block">{formErrors.companyName}</span>
                        )}
                      </div>

                      {/* Country (Mandatory) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-[#FD8E0E] mb-2">
                          Country <span className="text-[#FD8E0E]">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United Arab Emirates"
                          className={`w-full bg-white/5 border ${formErrors.country ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all`}
                        />
                        {formErrors.country && (
                          <span className="text-red-400 text-[9px] mt-1 block">{formErrors.country}</span>
                        )}
                      </div>

                      {/* Address (Optional) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-white/50 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Business Bay, Dubai"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all"
                        />
                      </div>

                      {/* VAT Number (Optional) */}
                      <div>
                        <label className="block text-[8px] font-black uppercase tracking-widest text-white/50 mb-2">
                          VAT Number
                        </label>
                        <input
                          type="text"
                          name="vatnumber"
                          value={formData.vatnumber}
                          onChange={handleInputChange}
                          placeholder="100254879600003"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all"
                        />
                      </div>

                      {/* Zipcode & City (Optional) */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[8px] font-black uppercase tracking-widest text-white/50 mb-2">
                            Zipcode
                          </label>
                          <input
                            type="text"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleInputChange}
                            placeholder="00000"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[8px] font-black uppercase tracking-widest text-white/50 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Dubai"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FD8E0E] transition-all"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FD8E0E] hover:bg-[#e07a0c] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all active:scale-[0.98] focus:outline-none flex justify-center items-center gap-2 mt-8 shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner animate-spin"></i>
                            <span>Verifying...</span>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-file-download"></i>
                            <span>Request Catalogue</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="text-center py-20 space-y-6 flex flex-col items-center justify-center h-full"
                    >
                      <div className="w-20 h-20 bg-[#FD8E0E]/10 rounded-full flex items-center justify-center border-2 border-[#FD8E0E] mb-4">
                        <i className="fas fa-check text-4xl text-[#FD8E0E]"></i>
                      </div>
                      <h4 className="text-2xl font-black uppercase tracking-tight text-white">Request Received</h4>
                      <p className="text-white/60 text-sm max-w-sm leading-relaxed font-light">
                        Thank you, {formData.firstname}. Your request has been received. We will review your corporate details and email the <strong>{selectedCatalogue.title}</strong> catalogue brochure to you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Drawer Footer Contact Handles */}
              <div className="border-t border-white/10 pt-6 mt-12 text-center text-white/50 text-[10px] space-y-1">
                <p className="mb-0 font-light">Need physical booklets? Reach our technical desk:</p>
                <p className="font-bold text-[#FD8E0E]">info@agromechhospitality.com &mdash; +971 54 584 4774</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

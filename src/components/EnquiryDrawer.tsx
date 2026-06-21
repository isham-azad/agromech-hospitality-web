"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  "Commercial Kitchen Design",
  "Premium Tableware & Crockery",
  "Custom SS Fabrication",
  "Buffet & F&B Solutions",
  "Laundry Equipment Solutions",
  "General Consultation Inquiry"
];

export default function EnquiryDrawer({ isOpen, onClose }: EnquiryDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Enquiry from ${formData.name} - Solutions Needed: ${formData.service}`
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting enquiry drawer:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-[500px] bg-[#221F51] text-white z-[201] shadow-2xl flex flex-col h-[100dvh] border-l border-white/10"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase block mb-1">Enquiry Form</span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-0">Enquire Now</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#221F51] transition-all duration-300"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 sm:space-y-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-emerald-500/30 p-6 sm:p-8 rounded-3xl text-center space-y-4 my-auto"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-emerald-400">Thank You!</h4>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    Your enquiry has been received successfully. One of our brand representatives will contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-8 py-3 bg-[#D4AF37] hover:bg-white text-[#221F51] font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all text-sm"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">Solutions Needed *</label>
                    <div className="relative">
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#221F51] text-white/40">Select a solution</option>
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#221F51] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/80">Detailed message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline your requirements or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#D4AF37] text-[#221F51] font-bold uppercase tracking-[0.2em] py-3.5 sm:py-4 rounded-xl hover:bg-white hover:text-[#221F51] transition-all duration-300 disabled:opacity-50 text-xs flex items-center justify-center gap-3 mt-4"
                  >
                    {status === "loading" ? (
                      <>
                        <i className="fas fa-spinner animate-spin"></i> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-rose-400 text-[10px] uppercase tracking-widest text-center mt-2">
                      Submission failed. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Footer handles */}
            <div className="p-6 sm:p-8 border-t border-white/10 bg-white/5 space-y-4 pb-safe">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <i className="fas fa-envelope text-[#D4AF37]"></i>
                <a href="mailto:info@agromech.ae" className="text-white hover:text-[#D4AF37] transition-colors">info@agromechhospitality.com</a>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <i className="fas fa-phone-alt text-[#D4AF37]"></i>
                <a href="tel:+97143469900" className="text-white hover:text-[#D4AF37] transition-colors">+971 4 346 9900</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

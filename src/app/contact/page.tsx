"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const contactDetails = [
  {
    title: "Visit Our Showroom",
    desc: "Agromech Hospitality, 1208 - The Prism Tower, Business Bay, Dubai, United Arab Emirates",
    icon: "fa-map-marker-alt",
    link: "#",
    actionText: "Get Directions"
  },
  {
    title: "Call Us Today",
    desc: "+971 54 584 4774 \nSpeak directly to our hospitality consultants.",
    icon: "fa-phone-alt",
    link: "tel:+971545844774",
    actionText: "Call Now"
  },
  {
    title: "Email Inquiries",
    desc: "General: info@agromechhospitality.com \nSales & Projects: anusha@agromechhospitality.com",
    icon: "fa-envelope",
    link: "mailto:info@agromechhospitality.com",
    actionText: "Send Email"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-[#FCFCFC] min-h-screen pt-32 pb-40 selection:bg-[#FD8E0E] selection:text-white font-sans">
      {/* Background Ornaments */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Block */}
        <header className="text-center space-y-6 mb-24">
          <span className="text-[#FD8E0E] text-[10px] font-black uppercase tracking-[0.5em] block">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-zinc-900 italic">
            Contact <br />
            <span className="not-italic text-zinc-300">Us.</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind, need commercial kitchen equipment advice, or want to visit our showroom? Reach out to our dedicated team of experts.
          </p>
          <div className="w-16 h-0.5 bg-[#FD8E0E] mx-auto mt-8"></div>
        </header>

        {/* Info & Form Section */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left side: Content & Cards */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="text-[#FD8E0E] font-bold text-xs tracking-[0.3em] uppercase block">Get in Touch</span>
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">
                  How Can We <br /><span className="text-[#FD8E0E]">Help You?</span>
                </h2>
                <p className="text-zinc-600 text-lg font-light leading-relaxed">
                  Have a project in mind, need commercial kitchen equipment advice, or want to visit our showroom? Reach out to our dedicated team of experts.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] hover:shadow-xl hover:bg-white transition-all duration-300 group flex flex-col justify-between ${i === 2 ? "sm:col-span-2" : ""
                      }`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FD8E0E]/10 flex items-center justify-center text-[#FD8E0E] mb-6 group-hover:bg-[#221F51] group-hover:text-white transition-all duration-300">
                        <i className={`fas ${item.icon} text-lg`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wider mb-3">{item.title}</h3>
                      <p className="text-zinc-500 text-sm font-light leading-relaxed whitespace-pre-line mb-6">
                        {item.desc}
                      </p>
                    </div>
                    {item.link !== "#" && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-widest text-[#221F51] hover:text-[#FD8E0E] transition-colors inline-flex items-center gap-2 mt-auto"
                      >
                        {item.actionText} <i className="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side: Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#221F51] text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FD8E0E]/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Send Us a Message</h3>
                    <p className="text-white/60 text-sm font-light">Fill out the form below and we will respond within 24 hours.</p>
                  </div>

                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/5 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-check text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-bold uppercase tracking-wider text-emerald-400">Message Sent!</h4>
                      <p className="text-white/70 text-sm font-light max-w-md mx-auto">
                        Thank you for contacting Agromech Hospitality. One of our specialists will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 transition-all rounded-full text-xs font-bold uppercase tracking-widest"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-white/80">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-white/80">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-white/80">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+971 50 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-white/80">Company Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Hotel / Restaurant Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/80">Subject *</label>
                        <input
                          type="text"
                          required
                          placeholder="How can we assist you?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/80">Your Message *</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us more about your requirements, project timelines, or specific products you are interested in..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FD8E0E] focus:bg-white/10 transition-all text-sm resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-[#FD8E0E] text-[#221F51] font-bold uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-white hover:text-[#221F51] transition-all duration-300 disabled:opacity-50 text-xs flex items-center justify-center gap-3"
                      >
                        {status === "loading" ? (
                          <>
                            <i className="fas fa-spinner animate-spin"></i> Sending...
                          </>
                        ) : (
                          <>
                            Submit Inquiry <i className="fas fa-paper-plane"></i>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Styled Interactive Location Block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 bg-zinc-50"
              >
                <div className="h-[350px] relative w-full overflow-hidden">
                  {/* Stylized custom simulated map layout with gorgeous overlays */}
                  <div className="absolute inset-0 bg-[#221F51] flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#FD8E0E]/20 border border-[#FD8E0E]/40 flex items-center justify-center text-[#FD8E0E] animate-pulse">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold uppercase tracking-wider text-lg">Our Dubai Showroom & Head Office</h4>
                      <p className="text-white/60 font-light text-sm max-w-md">
                        Agromech Hospitality, 1208 - The Prism Tower, Business Bay, Dubai, United Arab Emirates
                      </p>
                    </div>
                    {/* <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 text-[#FD8E0E] hover:text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-[#FD8E0E]/30"
                    >
                      <i className="fas fa-route mr-2"></i> Get Route Map
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

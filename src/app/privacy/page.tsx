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
    id: "info-collect",
    num: "1",
    title: "Information We Collect",
    content: "We may collect the following types of information when you interact with our website or use our services:",
    boldBullets: [
      {
        term: "Personal Information",
        definition: "Name, email address, phone number, company name, and other details voluntarily provided via contact forms or catalogues request handles."
      },
      {
        term: "Business Information",
        definition: "Company profile, VAT credentials, country of operation, and logistics preferences related to commercial projects."
      },
      {
        term: "Technical Information",
        definition: "IP address, browser type, operating system, and general navigation behaviors collected through cookies and tracking systems."
      }
    ]
  },
  {
    id: "info-use",
    num: "2",
    title: "How We Use Your Information",
    content: "We process and utilize your information to optimize client relations, fulfill orders, and coordinate services, including to:",
    boldBullets: [
      {
        term: "Fulfill Operations",
        definition: "Process orders, schedule deliveries, manage active projects, and coordinate commercial kitchen design installations."
      },
      {
        term: "Improve Platform Experience",
        definition: "Analyze website performance, address system bugs, optimize layout paths, and enhance technical speed."
      },
      {
        term: "Client Relations",
        definition: "Reply to quote requests, dispatch digital archives/catalogues, and share news updates when explicitly consented."
      },
      {
        term: "Ensure Safety & Compliance",
        definition: "Observe local UAE commercial rules, manage tax reporting, and comply with state food control guidelines."
      }
    ]
  },
  {
    id: "info-protect",
    num: "3",
    title: "How We Protect Your Information",
    content: "We utilize robust technical and administrative security measures—including SSL encryption, secure data hosts, and restricted firewalls—to defend your personal profile against unlawful access, modification, exposure, or deletion. We continuously review our security protocols to protect client and visitor operations."
  },
  {
    id: "info-share",
    num: "4",
    title: "Sharing Your Information",
    content: "We do not sell, rent, commercialize, or share client details for third-party advertising. We share information only with restricted parties essential for operations under strict confidentiality frameworks:",
    boldBullets: [
      {
        term: "Service Providers",
        definition: "Trusted associates assisting in delivering our services (e.g. secure web hosts, CRM database systems, and payment gateways)."
      },
      {
        term: "Legal Authorities",
        definition: "When strictly required by applicable UAE laws, federal regulations, or legal processes to protect our corporate rights and client security."
      }
    ]
  },
  {
    id: "cookies",
    num: "5",
    title: "Cookies and Tracking",
    content: "Our website uses cookies and similar identifiers to enhance browsing efficiency and personalize your session. Cookies are small data archives saved locally on your device. You can configure your browser options to refuse cookies; however, please note that certain modules of our interactive platform may not execute or display correctly."
  },
  {
    id: "rights",
    num: "6",
    title: "Your Rights",
    content: "We respect your data rights. Depending on local laws and guidelines, you are entitled to the following actions regarding your personal data:",
    boldBullets: [
      {
        term: "Access",
        definition: "Request a structural summary and copy of all personal information we currently hold about you."
      },
      {
        term: "Correct",
        definition: "Request correction of inaccurate, obsolete, or incomplete personal data records."
      },
      {
        term: "Delete",
        definition: "Request deletion of your data profiles, subject to local regulatory record retention rules."
      },
      {
        term: "Opt-Out",
        definition: "Unsubscribe from automated updates, email campaigns, or marketing alerts via our quick-unsubscribe handles."
      }
    ]
  },
  {
    id: "prohibited",
    num: "7",
    title: "Prohibited Uses",
    content: "In compliance with our Terms of Service, users are strictly prohibited from using our website content, blueprints, catalog pages, or structural frameworks:",
    plainBullets: [
      "For any unlawful, fraudulent, or unauthorized purpose.",
      "To solicit others to conduct, participate in, or support illegal activities.",
      "To violate, infringe, or bypass any local, federal, or international laws, regulatory norms, or local ordinances.",
      "To harvest, extract, or scrape user profiles, email databases, or product configurations."
    ]
  },
  {
    id: "accuracy",
    num: "8",
    title: "Accuracy of Information",
    content: "While we make every effort to maintain accurate, detailed, and up-to-date documentation on this platform, we do not warrant that all specifications are entirely error-free. The content is provided for general commercial reference only. Any reliance on the material on this site is at your own discretion."
  },
  {
    id: "links",
    num: "9",
    title: "Third-Party Links",
    content: "Our site features cross-reference links leading to third-party websites or brand partner sites. We hold no responsibility or liability for their privacy architectures, cookie rules, or content quality. We strongly recommend reading the privacy logs of any external link you visit."
  },
  {
    id: "changes",
    num: "10",
    title: "Changes to This Policy",
    content: "We reserve the right to modify this Privacy Policy at any time. Any changes, updates, or revisions will be uploaded directly to this page. We encourage you to review this log periodically to stay informed about how we safeguard your data."
  },
  {
    id: "contact",
    num: "11",
    title: "Contact Information",
    content: "If you have any questions, complaints, or inquiries regarding this policy or how we store, process, and secure your personal corporate data, please direct your communication to our technical operations desk:"
  }
];

export default function PrivacyPage() {
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
              Privacy <span className="text-[#FD8E0E] not-italic">Policy.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
              We respect your data privacy. Learn how Agromech Hospitality Dubai collects, secures, and utilizes corporate and personal details.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-medium text-white/50">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <i className="far fa-calendar-alt text-[#FD8E0E]"></i>
                <span>Last Updated: June 2026</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                <i className="fas fa-shield-alt text-[#FD8E0E]"></i>
                <span>Certified GDPR / HACCP Data Rules</span>
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
                  Search Policy
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
                For formal data removal requests under GDPR or local authority regulations, please address our compliance department.
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
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#221F51]/50 block">Technical Support</span>
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

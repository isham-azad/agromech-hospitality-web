"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-zinc-50 min-h-screen py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-zinc-200/80 space-y-10"
        >
          <div className="text-center pb-6 border-b border-zinc-100">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight mb-4">
              Privacy <span className="text-[#D4AF37]">Policy</span>
            </h1>
            <p className="text-zinc-500 text-sm font-light">Last Updated: June 2026</p>
          </div>

          <div className="space-y-8 text-zinc-600 leading-relaxed font-light">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-800">Personal Information:</strong> Name, email address, phone number, company name, and other information voluntarily provided via contact forms or inquiries.</li>
                <li><strong className="text-zinc-800">Business Information:</strong> Company details related to service inquiries or purchases.</li>
                {/* <li><strong className="text-zinc-800">Payment Information:</strong> Credit card or banking details when processing transactions.</li> */}
                <li><strong className="text-zinc-800">Technical Information:</strong> IP address, browser type, and usage data collected through cookies and other tracking technologies.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">2. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-800">Provide Our Services:</strong> Process orders, manage contracts, and fulfill requests.</li>
                <li><strong className="text-zinc-800">Improve Our Website:</strong> Monitor website performance and enhance user experience.</li>
                <li><strong className="text-zinc-800">Communicate with You:</strong> Send updates, respond to inquiries, and deliver promotional content.</li>
                <li><strong className="text-zinc-800">Ensure Legal Compliance:</strong> Meet legal obligations, such as tax or record-keeping requirements.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">3. How We Protect Your Information</h2>
              <p>We implement appropriate security measures—including encryption and secure servers—to safeguard your personal information from unauthorized access, alteration, or disclosure.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">4. Sharing Your Information</h2>
              <p>We do not sell, trade, or rent your personal information. However, we may share it with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-800">Service Providers:</strong> Trusted third parties who help deliver our services (e.g., payment processors, hosting partners).</li>
                <li><strong className="text-zinc-800">Legal Authorities:</strong> When required by law or to protect our rights and comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">5. Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies to improve your browsing experience. These are small files stored on your device. You can change your browser settings to disable cookies; however, some site features may not function properly as a result.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-zinc-800">Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong className="text-zinc-800">Correct:</strong> Update inaccurate or incomplete information.</li>
                <li><strong className="text-zinc-800">Delete:</strong> Request deletion of your data, subject to legal obligations.</li>
                <li><strong className="text-zinc-800">Opt-Out:</strong> Unsubscribe from marketing communications at any time via the link in our emails.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">7. Prohibited Uses</h2>
              <p>In accordance with our Terms of Service, you are prohibited from using this site or its content:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose</li>
                <li>To solicit others to perform unlawful acts</li>
                <li>To violate any applicable laws, regulations, or ordinances</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">8. Accuracy and Timeliness of Information</h2>
              <p>We strive to ensure the information on our site is accurate and up to date. However, we are not liable for inaccuracies, and the content is provided for general information only. It is your responsibility to monitor any changes made to our website.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies before providing any personal information.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page, and we encourage you to review it regularly.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide">11. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:</p>
              <p className="font-medium text-zinc-900 mt-2">
                Email: <a href="mailto:info@agromechhospitaliy.com" className="text-[#D4AF37] hover:underline">info@agromechhospitaliy.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

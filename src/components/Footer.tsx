"use client";

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <footer className="footer-section">
      <div className="container-fluid px-4 relative">

        {/* <div className="sofa-img">
          <img src="/images/50-years-gold-round.png" alt="50 Years of Excellence" className="img-fluid" />
        </div> */}

        <div className="row justify-content-center pt-3">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center justify-content-center">
                <span className="icon"><span className="fa fa-paper-plane"></span></span>
                <span>Subscribe to Newsletter</span>
              </h3>

              {status === "success" ? (
                <div className="text-center py-3">
                  <p className="text-emerald-500 font-bold uppercase tracking-wider text-xs mb-0">
                    <span className="fa fa-check-circle me-2"></span> Thank you for subscribing!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="row g-3 justify-content-center">
                  <div className="col-6 col-md-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="col-6 col-md-auto">
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="col-12 col-md-auto">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn btn-secondary w-100 select-none d-flex align-items-center justify-content-center gap-2"
                      style={{ minWidth: "50px", height: "50px" }}
                    >
                      {status === "loading" ? (
                        <span className="fa fa-spinner fa-spin"></span>
                      ) : (
                        <span className="fa fa-paper-plane"></span>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {status === "error" && (
                <p className="text-rose-400 text-center text-[10px] uppercase tracking-widest mt-3 mb-0">
                  Subscription failed. Please try again.
                </p>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="footer-dark-bg">
        <div className="container-fluid px-5">
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo footer-logo-link">
                  <img src="/images/logo-white.png" alt="Logo" width={200} height={60} />
                </a>
              </div>
              <p className="mb-4">Agromech Hospitality Solutions provides premium interior and kitchen equipment for the hospitality industry. We help you create modern, efficient, and beautiful spaces.</p>

              <ul className="list-unstyled custom-social">
                <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
                <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap mb-4">
                <div className="col-6 col-md-2 mb-4 mb-md-0">
                  <ul className="list-unstyled">
                    <li><a href="/about">About us</a></li>
                    <li><a href="/journey">Our Journey</a></li>
                    <li><a href="/catalogues">Catalogues</a></li>
                    <li><a href="/collections">Collections</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-2 mb-4 mb-md-0">
                  <ul className="list-unstyled">
                    <li><a href="#">Support</a></li>
                    <li><a href="/solutions">Solutions</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("open-enquiry-drawer")); }}>Enquire Now</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li className="d-block d-md-none"><a href="/privacy">Privacy Policy</a></li>
                  </ul>
                </div>

                <div className="col-12 col-md-6">
                  <div className="categories-box p-3 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h6 className="mb-3" style={{ color: '#FD8E0E', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Categories
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {[
                        { name: "Table Top", link: "/categories/table-top" },
                        { name: "Buffetware", link: "/categories/buffetware" },
                        { name: "Barware", link: "/categories/barware" },
                        { name: "Linen", link: "/categories/linen" },
                        { name: "In-Room", link: "/categories/in-room" },
                        { name: "Kitchen Smallware", link: "/categories/kitchen-smallware-stewarding" },
                        { name: "Commercial Kitchen", link: "/categories/commercial-kitchen-laundry" },
                        { name: "Outdoor & Banquet", link: "/categories/outdoor-banquet-furniture" },
                      ].map((cat, i) => (
                        <a
                          key={i}
                          href={cat.link}
                          className="category-pill"
                          style={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            borderRadius: '50px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '11px',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#FD8E0E';
                            e.currentTarget.style.borderColor = '#FD8E0E';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          {cat.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Agromech Hospitality Solutions
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end d-none d-md-block">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  {/* <li className="me-4"><a href="#">Terms &amp; Conditions</a></li> */}
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

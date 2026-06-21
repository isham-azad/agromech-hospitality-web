"use client";

import { useEffect } from "react";

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">

              <div id="testimonial-nav">
                <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
              </div>

              <div className="testimonial-slider">

                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">

                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;Agromech Hospitality delivered our commercial kitchen project with exceptional professionalism and attention to detail. The installation was completed on time, and the kitchen operates efficiently to meet our daily demands.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic mx-auto rounded-full overflow-hidden" style={{ width: "100px", height: "90px" }}>
                            <img src="/images/testimonial-person-1.jpg" alt="Badr Benryane" className="img-fluid w-full h-full object-cover" />
                          </div>
                          <h3 className="font-weight-bold">Badr Benryane</h3>
                          <span className="position d-block mb-3">Co-Founder, Shinobi Japanese Restaurant, Dubai</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

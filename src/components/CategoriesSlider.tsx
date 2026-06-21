"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Table Top", image: "/images/categories/table-top.jpg" },
  { name: "Buffetware", image: "/images/categories/buffetware.jpg" },
  { name: "Barware", image: "/images/categories/barware.jpg" },
  { name: "Linen", image: "/images/categories/linen.jpg" },
  { name: "In-Room", image: "/images/categories/in-room.jpg" },
  { name: "Kitchen Smallware & Stewarding", image: "/images/categories/kitchen-smallware.jpg" },
  { name: "Commercial Kitchen & Laundry", image: "/images/categories/commercial-kitchen.jpg" },
  { name: "Outdoor & Banquet Furniture", image: "/images/categories/outdoor-banquet-furniture.jpg" },
];

const CategoriesSlider = () => {
  return (
    <section id="categories-section" className="categories-section">
      <style jsx>{`
        .categories-section {
          padding: 2.5rem 0 0.5rem 0;
          position: relative;
          scroll-margin-top: 100px;
        }
        @media (min-width: 768px) {
          .categories-section {
            padding: 4rem 0;
          }
        }
        .categories-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .section-title {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 1.5rem;
          margin: 0;
        }
        .swiper-nav-btns {
          display: flex;
          gap: 10px;
        }
        .swiper-button-custom {
          position: static;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 10;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
        }
        .swiper-button-custom:hover {
          color: #555;
        }
        .category-item {
          text-align: center;
          display: block;
          text-decoration: none;
          color: #000;
        }
        .category-item:hover {
          color: #000;
        }
        .category-img-wrap {
          width: 100%;
          aspect-ratio: 1/1;
          background: #f0f0f0;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .category-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .category-item:hover .category-img-wrap img {
          transform: scale(1.05);
        }
        .category-title {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }
      `}</style>
      <div className="w-full px-3 sm:px-5 md:px-12">
        <div className="categories-header">
          <h2 className="section-title">Our Categories</h2>
          <div className="swiper-nav-btns d-none d-md-flex">
            <div id="cat-prev" className="swiper-button-custom swiper-button-prev-custom"><i className="fas fa-chevron-left"></i></div>
            <div id="cat-next" className="swiper-button-custom swiper-button-next-custom"><i className="fas fa-chevron-right"></i></div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: "#cat-prev",
            nextEl: "#cat-next",
          }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1200: { slidesPerView: 6, spaceBetween: 40 },
          }}
          className="pb-2 md:pb-10"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i}>
              <Link
                href={`/categories/${cat.name.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`}
                className="group flex flex-col items-center text-center w-full"
                style={{ containerType: 'inline-size' }}
              >
                <div className="relative w-full aspect-square bg-white border border-zinc-100 mb-6 overflow-hidden flex items-center justify-center p-1 transition-all group-hover:shadow-xl group-hover:shadow-zinc-200 group-hover:-translate-y-2">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors"></div>
                </div>
                <div className="w-full text-center">
                  <h5 className="text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] text-zinc-900 group-hover:text-[#D4AF37] transition-all whitespace-pre-wrap text-ellipsis px-2">
                    {cat.name}
                  </h5>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesSlider;

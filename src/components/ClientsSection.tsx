"use client";

import Image from "next/image";

const ClientsSection = () => {
  // Array of 46 client logos
  const clientLogos = Array.from({ length: 46 }, (_, i) => `/images/clients-new/client_${i}.png`);

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: marquee 220s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container-fluid px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl relative inline-block">
            Our Clients
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Trusted by the region's leading hotels, resorts, and premium venues.
          </p>
        </div>

        {/* Infinite Slider Wrapper */}
        <div className="relative w-full flex overflow-x-hidden py-2">
          {/* Gradient Overlays for smooth fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-track shrink-0">
            {/* Double the list to create a seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="w-36 h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-zinc-100/80 shadow-sm shrink-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${(index % 46) + 1}`}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

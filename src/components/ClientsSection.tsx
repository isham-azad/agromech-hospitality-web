"use client";

import Image from "next/image";

const ClientsSection = () => {
  // Array of 46 client logos
  const clientLogos = Array.from({ length: 46 }, (_, i) => `/images/clients-new/client_${i}.png`);

  // Split logos into two rows for mobile view
  const half = Math.ceil(clientLogos.length / 2);
  const row1 = clientLogos.slice(0, half);
  const row2 = clientLogos.slice(half);

  return (
    <section className="pt-6 pb-12 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <style jsx>{`
        /* Desktop Marquee Animation */
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

        /* Mobile Marquee Animations */
        @keyframes marquee-mobile-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marquee-mobile-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track-mobile-left {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: marquee-mobile-left 10s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .marquee-track-mobile-right {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: marquee-mobile-right 10s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .marquee-track-mobile-left:hover,
        .marquee-track-mobile-right:hover {
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

        {/* Desktop View (1 row, right to left) */}
        <div className="hidden md:flex relative w-full overflow-x-hidden py-2">
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

        {/* Mobile View (2 rows, row 1 right-to-left, row 2 left-to-right) */}
        <div className="flex md:hidden relative w-full flex-col gap-4 overflow-x-hidden py-2">
          {/* Gradient Overlays for smooth fading effect (narrower on mobile) */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Right to Left */}
          <div className="marquee-track-mobile-left shrink-0">
            {[...row1, ...row1].map((logo, index) => (
              <div
                key={`mobile-row1-${index}`}
                className="w-36 h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-zinc-100/80 shadow-sm shrink-0 transform-gpu"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${(index % row1.length) + 1}`}
                    fill
                    className="object-contain"
                    sizes="150px"
                    priority={index < 4}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Left to Right */}
          <div className="marquee-track-mobile-right shrink-0">
            {[...row2, ...row2].map((logo, index) => (
              <div
                key={`mobile-row2-${index}`}
                className="w-36 h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-zinc-100/80 shadow-sm shrink-0 transform-gpu"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${(index % row2.length) + half + 1}`}
                    fill
                    className="object-contain"
                    sizes="150px"
                    priority={index < 4}
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

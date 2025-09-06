import React from "react";
import perfumeImg from "../assets/scent1.png";
import coupleImg from "../assets/girl.png";

const PerfumeAd: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white grid grid-cols-1 md:grid-cols-7">
      {/* Left side - 70% on desktop, full on mobile */}
      <div className="md:col-span-5 h-full">
        <div className="relative w-full h-[60vh] md:h-full">
          <img
            src={coupleImg}
            alt="Couple"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - 30% on desktop, full stacked on mobile */}
      <div className="md:col-span-2 relative flex flex-col gap-12 md:gap-20 px-6 md:px-12 py-10 md:py-12 bg-black font-['Poppins']">
        {/* Box 1: Headline + copy */}
        <div className="max-w-md bg-[#1A1A1A] px-6 md:px-10 py-5 rounded-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight">
            Powerful <br className="hidden md:block" /> Simplicity.
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
            An expression of quiet luxury, Côte Royale is designed for the man
            who commands attention without seeking it. A reflection of
            nature&apos;s raw beauty, redefined for today.
          </p>
        </div>

        {/* Box 2: Product Card */}
        <div className="relative bg-[#111111] px-6 md:px-10 py-8 rounded-2xl border border-white/10 shadow-2xl overflow-visible">
          {/* Perfume Bottle */}
          <img
            src={perfumeImg}
            alt="Ignis Perfume"
            className="
              absolute
              -top-20 md:-top-32
              right-1/2 md:-right-28
              translate-x-1/2 md:translate-x-0
              w-[260px] h-[260px] md:w-[420px] md:h-[400px]
              max-w-none
              drop-shadow-2xl
              z-30
              object-cover
              pointer-events-none
            "
          />

          {/* Content */}
          <div className="relative z-10 pt-[160px] md:pt-[220px]">
            {/* Subtitle */}
            <div className="text-xs tracking-[0.25em] uppercase text-gray-400">
              Eau de Parfum
            </div>
            <div className="mt-2 h-px w-14 bg-white/15" />

            {/* Name + Price */}
            <div className="mt-6 flex items-end justify-between w-full md:pr-40">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Ignis</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Côte Royale
                </p>
              </div>
              <span className="text-base md:text-lg">$110</span>
            </div>

            {/* CTA */}
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition rounded w-full md:w-auto">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeAd;

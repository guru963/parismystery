import React from "react";
import perfumeImg from "../assets/scent1.png";
import coupleImg from "../assets/girl.png";

const PerfumeAd: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white overflow-x-hidden grid grid-cols-1 md:grid-cols-7">
      {/* Left side */}
      <div className="md:col-span-5 h-[50vh] sm:h-[60vh] md:h-full w-full">
        <img
          src={coupleImg}
          alt="Couple"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side */}
      <div className="md:col-span-2 flex flex-col gap-8 md:gap-16 px-6 md:px-10 py-10 md:py-12 font-['Poppins'] relative">
        {/* Box 1: Headline + copy */}
        <div className="bg-[#1A1A1A] px-4 md:px-8 py-5 rounded-xl border border-white/10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight">
            Powerful <br className="hidden md:block" /> Simplicity.
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base md:text-base">
            An expression of quiet luxury, Côte Royale is designed for the man
            who commands attention without seeking it. A reflection of
            nature&apos;s raw beauty, redefined for today.
          </p>
        </div>

        {/* Box 2: Product Card */}
        <div className="relative bg-[#111111] px-4 md:px-8 py-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Perfume Bottle */}
          <img
            src={perfumeImg}
            alt="Ignis Perfume"
            className="
              absolute
              top-0 md:top-10
              left-1/2 md:left-auto md:right-0
              -translate-x-1/2 md:translate-x-0
              w-[150px] sm:w-[200px] md:w-[300px]
              h-auto
              max-w-full
              z-10
              object-contain
              pointer-events-none
            "
          />

          {/* Content */}
          <div className="relative z-10 pt-[130px] md:pt-[200px]">
            {/* Subtitle */}
            <div className="text-xs tracking-[0.25em] uppercase text-gray-400">
              Eau de Parfum
            </div>
            <div className="mt-2 h-px w-14 bg-white/15" />

            {/* Name + Price */}
            <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between w-full">
              <div>
                <h3 className="text-xl sm:text-xl md:text-2xl font-semibold">Ignis</h3>
                <p className="text-gray-400 text-sm sm:text-sm md:text-base">
                  Côte Royale
                </p>
              </div>
              <span className="text-base sm:text-lg md:text-lg mt-2 md:mt-0">$110</span>
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

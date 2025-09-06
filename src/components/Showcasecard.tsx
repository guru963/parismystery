import React, { useRef, useEffect } from "react";
import {
  motion,
  type Variants,
  useInView,
  useAnimation,
} from "framer-motion";

// Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const EssenceHero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Trigger when ~40% is visible; rootMargin tightens/loosens the trigger band.
  const inView = useInView(ref, {
    amount: 0.4,
    // adjust margins if you want earlier/later trigger:
    // rootMargin: "-10% 0px -10% 0px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden"); // fades out when leaving viewport
  }, [inView, controls]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-black text-white overflow-hidden">
      {/* Decorative vignette */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(100%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* WRAPPER that controls scroll-trigger */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="tracking-[0.3em] text-xs md:text-sm uppercase text-gray-300/80"
          >
            Our Fragrances
          </motion.p>

          {/* Headline (nested stagger for lines) */}
          <motion.h1
            variants={container}
            className="mt-6 font-serif font-semibold leading-[0.95] text-[10vw] md:text-[7vw] xl:text-[120px] tracking-tight"
          >
            <motion.span variants={fadeUp} className="block">
              AN ESSENCE
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              FOR EVERY MAN
            </motion.span>
          </motion.h1>

          {/* Copy */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-base md:text-lg text-gray-200 font-sans"
          >
            An expression of quiet luxury, Paris Mystery is designed for the man
            who embraces mystery without seeking it.
          </motion.p>

          {/* Underline accent */}
          <motion.div
            variants={fadeUp}
            className="mt-10 h-[1px] w-24 md:w-32 bg-white/70"
          />
        </motion.div>
      </div>

      {/* Soft gradient bar at the bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default EssenceHero;

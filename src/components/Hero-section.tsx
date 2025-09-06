import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import video from "../assets/hero-video.mp4";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,   // starts after first frame is ready
      staggerChildren: 0.15, // headline -> paragraph -> CTA
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      className="relative h-[90svh] w-full overflow-hidden bg-black"
      aria-label="Paris Mystery hero"
    >
      {/* Background video (plays once by default because no loop) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        autoPlay
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)} // trigger motion
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      {/* OVERLAY CONTENT */}
      <div className="absolute inset-0">
        {/* Headline block (stagger its children) */}
        <motion.div
          className="absolute top-[38%] left-[8%] md:top-[23%] md:left-[10%] max-w-[680px] drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]"
          variants={container}
          initial="hidden"
          animate={videoLoaded ? "visible" : "hidden"}
        >
          <motion.h1
            className="font-serif  text-white text-4xl leading-tight w-[400px] md:text-6xl md:leading-[1.1] font-semibold tracking-wide"
            variants={item}
          >
            The Scent of{" "}
            <span className="underline decoration-[#B8860B] underline-offset-8">
              Quiet Luxury
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 text-white/85 font-['Poppins'] font-bold text-base md:text-lg leading-relaxed"
            variants={item}
          >
            Rare accords. Patiently distilled. Compositions that whisper, then
            linger. Wear a memory—crafted for those who prefer subtlety over show.
          </motion.p>

          <motion.div className="mt-6 md:mt-8 pointer-events-auto" variants={item}>
            <a
              href="#collections"
              className="inline-block border border-white/70 bg-white px-5 py-2 text-sm font-['Inter'] font-bold text-black tracking-wide transition hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Explore the collection"
            >
              EXPLORE COLLECTIONS
            </a>
          </motion.div>
        </motion.div>

        {/* Tagline block (separate, with a slight delay) */}
        <motion.div
          className="absolute bottom-[10%] right-[8%] md:bottom-[8%] md:right-[10%] text-right drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
          variants={item}
          initial="hidden"
          animate={videoLoaded ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
        >
          <p className="text-white/80 font-['Inter'] text-xs md:text-sm tracking-[0.18em] uppercase">
            Paris Mystery
          </p>
          <p className="mt-1 text-white font-['Playfair_Display'] text-base md:text-lg italic">
            Perfume with Emotion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

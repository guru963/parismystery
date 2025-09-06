import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const RevealText: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const labelRef = useRef<HTMLParagraphElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words
      const text = new SplitType(textRef.current!, { types: "words" });

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Initial state
      gsap.set(text.words, {
        opacity: 0.2,
        color: "#b3b3b3", // softer gray start
      });

      // Word fade + brighten
      tl.to(
        text.words,
        {
          opacity: 1,
          color: "#ffffff", // final strong white
          stagger: 0.1,
        },
        0
      );

      // Label + text shadow
      tl.to(
        [textRef.current, labelRef.current],
        {
          color: "#ffffff",
          textShadow: "0px 0px 12px rgba(255,255,255,0.7)",
        },
        0
      );

      // Dark vignette overlay
      tl.to(
        overlayRef.current,
        {
          opacity: 0.28,
          ease: "none",
        },
        0
      );

      // Spotlight boom
      tl.fromTo(
        spotlightRef.current,
        { scale: 0.2, opacity: 0.4 },
        { scale: 4, opacity: 0, ease: "power2.out" },
        0
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full bg-black text-white" id="about">
      {/* tall section for scroll space */}
      <div className="relative h-[550vh]">
        {/* sticky viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-6">
          <p
            ref={labelRef}
            className="absolute top-14 md:top-20 w-full text-center font-[Inter] tracking-[0.22em] text-[11px] md:text-xs uppercase"
          >
            Defining Luxury
          </p>

          <h2
            ref={textRef}
            className="font-['Playfair_Display'] text-center leading-tight text-[9vw] md:text-[6vw] max-w-[1100px] mx-auto"
          >
            PARIS MYSTERY IS CREATED FOR THE SOUL WHO EMBRACES MYSTERY 
            <br className="hidden md:block" />
            WITHOUT CHASING IT
          </h2>
        </div>

        {/* vignette overlay */}
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 opacity-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(110%_80%at_50%_20%,_rgba(255,255,255,0.06),_rgba(0,0,0,0.75)_60%,_#000_95%)]" />
        </div>

        {/* spotlight boom */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            ref={spotlightRef}
            className="w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)]"
          />
        </div>
      </div>
    </section>
  );
};

export default RevealText;

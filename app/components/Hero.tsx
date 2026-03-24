"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const heroImages = [
  { src: "/hero/hoodie-closeup.jpg", alt: "Textural craft detail", textColor: "#1E1E1C", taglineColor: "#CDA558" },
  { src: "/hero/leather-coat.jpg", alt: "Structured outerwear", textColor: "#2A2A28", taglineColor: "#E0BA6E" },
];

const HOLD_DURATION = 6000;
const FADE_DURATION = 1.8;
const ZOOM_SCALE = 1.05;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, HOLD_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Both images always rendered, opacity controlled */}
      {heroImages.map((img, i) => (
        <motion.div
          key={img.src}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? [1, ZOOM_SCALE] : 1,
          }}
          transition={{
            opacity: { duration: FADE_DURATION, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: HOLD_DURATION / 1000, ease: "easeOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={1080}
            height={1280}
            className="max-h-full w-auto object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={i === 0}
          />
          {/* Subtle overlay for text legibility */}
          <div className="absolute inset-0 bg-[#EDEBE8]/20" />
        </motion.div>
      ))}

      {/* Fixed centered text — doesn't move */}
      <div className="relative z-20 text-center px-6">
        {/* Mask-reveal headline: clips from left to right */}
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
          className="text-[36px] sm:text-[52px] md:text-[72px] lg:text-[88px] font-[400] tracking-[0.08em] transition-colors duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            fontFamily: "var(--font-playfair)",
            color: heroImages[current].textColor,
            textShadow: "none",
          }}
        >
          NOAH JEREMIAH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-4 sm:mt-6 text-[10px] sm:text-[13px] font-[300] tracking-[0.5em] uppercase transition-colors duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ color: heroImages[current].taglineColor, fontFamily: "var(--font-inter)" }}
        >
          Hollywood. Handmade.
        </motion.p>
      </div>

      {/* NJ Monogram — top left with breathing animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.6,
          scale: [1, 1.06, 1],
        }}
        transition={{
          opacity: { delay: 0.3, duration: 1.2 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-8 left-8 sm:top-12 sm:left-12 text-[22px] sm:text-[26px] font-[500] tracking-[0.15em] text-[#1A1A18] z-20"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        NJ
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#2A2A28]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

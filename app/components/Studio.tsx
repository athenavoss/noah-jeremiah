"use client";

import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden py-14 sm:py-16">
      {/* Warm ambient — match hero atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(197,165,114,0.06) 0%, transparent 50%)" }}
      />

      {/* Faint NJ watermark */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[300px] font-[400] tracking-[0.1em] text-[#F0EBE3] pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        NJ
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-lg px-8 sm:px-12 text-center"
      >
        <p className="text-[9px] sm:text-[10px] font-[300] tracking-[0.5em] text-[#C5A572]/50 uppercase mb-7"
          style={{ fontFamily: "var(--font-inter)" }}>
          Studio
        </p>

        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-[400] leading-[1.15] text-[#F0EBE3] mb-7"
          style={{ fontFamily: "var(--font-playfair)" }}>
          Made in the USA.
          <br />
          Made by hand.
          <br />
          Made once.
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-12 h-[1px] bg-[#C5A572]/50 mx-auto mb-7 origin-center"
        />

        <p className="text-[13px] sm:text-[14px] font-[300] leading-[1.9] text-[#8A8580]/80 mb-7"
          style={{ fontFamily: "var(--font-inter)" }}>
          Every piece is conceived, cut, and finished in our Hollywood studio.
          No seasonal collections. No trend forecasting. We release when the garment is ready.
        </p>

        <motion.a
          href="mailto:inquire@noahjeremiah.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-block text-[9px] font-[300] tracking-[0.5em] text-[#C5A572]/60 uppercase hover:text-[#C5A572] transition-colors duration-300 border-b border-[#C5A572]/20 pb-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Request a Private Viewing
        </motion.a>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden py-16 sm:py-22">
      {/* Subtle warm ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(197,165,114,0.05) 0%, transparent 45%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-lg px-8 sm:px-12 text-center"
      >
        <p className="text-[9px] sm:text-[10px] font-[300] tracking-[0.5em] text-[#C5A572]/50 uppercase mb-8"
          style={{ fontFamily: "var(--font-inter)" }}>
          Studio
        </p>

        <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-[400] leading-[1.15] text-[#F0EBE3] mb-8"
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
          className="w-12 h-[1px] bg-[#C5A572]/50 mx-auto mb-8 origin-center"
        />

        <p className="text-[13px] sm:text-[14px] font-[300] leading-[1.9] text-[#8A8580]/80 mb-10"
          style={{ fontFamily: "var(--font-inter)" }}>
          Every piece is conceived, cut, and finished in our Hollywood studio.
          No seasonal collections. No trend forecasting. We release when the garment is ready.
        </p>

        {/* CTA */}
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

"use client";

import { motion } from "framer-motion";

const staggerDelay = 0.2;

export default function Studio() {
  return (
    <section className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden py-14 sm:py-16 scroll-mt-20">
      {/* Faint NJ watermark — cream on dark bg */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] sm:text-[300px] font-[400] tracking-[0.1em] text-[#2A2A28] pointer-events-none select-none whitespace-nowrap"
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
        <p
          className="text-[12px] sm:text-[14px] font-[300] tracking-[0.4em] text-[#C5A572] uppercase mb-7"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Studio
        </p>

        {/* Mixed weight headline with staggered fade */}
        <div
          className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] text-[#2A2A28] mb-7"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <motion.span
            className="block font-[400]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          >
            Made in the USA.
          </motion.span>
          <motion.span
            className="block font-[400] italic"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: staggerDelay }}
          >
            Made by hand.
          </motion.span>
          <motion.span
            className="block font-[500]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: staggerDelay * 2 }}
          >
            Made once.
          </motion.span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-12 h-[1px] bg-[#C5A572]/50 mx-auto mb-7 origin-center"
        />

        <p
          className="text-[13px] sm:text-[14px] font-[300] leading-[1.9] text-[#8A8580] mb-7"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Every piece is conceived, cut, and finished in our Hollywood studio.
          No seasonal collections. No trend forecasting. We release when the garment is ready.
        </p>

        <motion.a
          href="mailto:inquire@noahjeremiah.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-block px-8 py-3.5 text-[11px] font-[400] tracking-[0.4em] text-[#F5F2EE] uppercase bg-[#C9A96E] hover:bg-[#B8944E] transition-all duration-500"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Private Viewing
        </motion.a>
      </motion.div>
    </section>
  );
}

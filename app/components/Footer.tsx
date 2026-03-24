"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full py-10 sm:py-14 px-8 sm:px-12">
      {/* Thin gold divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-16 h-[1px] bg-[#C5A572]/40 mx-auto mb-10 sm:mb-14 origin-center"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <a
          href="mailto:inquire@noahjeremiah.com"
          className="block text-[12px] sm:text-[13px] font-[300] tracking-[0.15em] text-[#C5A572] hover:text-[#2A2A28] transition-colors duration-500"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          inquire@noahjeremiah.com
        </a>
        <a
          href="https://www.instagram.com/noahjeremi4h/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[11px] sm:text-[12px] font-[300] tracking-[0.15em] text-[#C5A572] hover:text-[#2A2A28] transition-colors duration-500"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          @noahjeremi4h
        </a>
        <p
          className="text-[10px] sm:text-[11px] font-[300] tracking-[0.4em] text-[#8A8580]/60 uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Hollywood, United States
        </p>
        <p
          className="text-[9px] font-[300] tracking-[0.3em] text-[#8A8580]/30 uppercase pt-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &copy; 2026 Noah Jeremiah
        </p>
      </motion.div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#111111]">
      {/* Warm directional side-light from left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(110deg, rgba(197,165,114,0.12) 0%, rgba(197,165,114,0.04) 25%, transparent 50%)",
        }}
      />

      {/* Warm radial glow behind product */}
      <div
        className="absolute top-[52%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[90vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,230,200,0.22) 0%, rgba(201,169,110,0.12) 35%, transparent 60%)",
        }}
      />

      {/* NJ Monogram — top left, gold */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute top-8 left-8 sm:top-12 sm:left-12 text-[22px] sm:text-[26px] font-[400] tracking-[0.15em] text-[#C5A572]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        NJ
      </motion.p>

      {/* Hero product — long sleeve dress */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Link href="/product/long-sleeve-dress">
          <img
            src="/products/long-sleeve-dress-nobg.png"
            alt="Ribbed Long Sleeve Dress"
            className="w-[60vw] sm:w-[33vw] max-w-[460px] product-glow"
          />
        </Link>
      </motion.div>

      {/* Product name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 text-center z-10"
      >
        <p className="text-[9px] font-[300] tracking-[0.5em] text-[#C5A572]/60 uppercase mb-2"
          style={{ fontFamily: "var(--font-inter)" }}>
          Women
        </p>
        <p className="text-[15px] sm:text-[24px] font-[400] tracking-[0.02em] sm:tracking-[0.05em] text-[#F0EBE3]/60 whitespace-nowrap"
          style={{ fontFamily: "var(--font-playfair)" }}>
          Ribbed Long Sleeve Dress
        </p>
        <Link href="/product/long-sleeve-dress"
          className="inline-block mt-3 text-[9px] font-[300] tracking-[0.4em] text-[#C5A572]/40 uppercase hover:text-[#C5A572] transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter)" }}>
          View Piece
        </Link>
      </motion.div>

      {/* Tagline — bottom left, in gold */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-14 sm:bottom-14 left-10 sm:left-12 text-[8px] sm:text-[10px] font-[300] tracking-[0.4em] sm:tracking-[0.5em] text-[#C5A572]/60 uppercase"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Hollywood. Handmade.
      </motion.p>

      {/* Scroll indicator — gold */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#C5A572]/50 to-transparent"
        />
      </motion.div>

      {/* Section number */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 sm:right-12 text-[11px] font-[300] tracking-[0.4em] text-[#F0EBE3]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        01
      </motion.p>
    </section>
  );
}

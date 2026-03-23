"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pieces = [
  { slug: "foxpurse", name: "Fox Purse", category: "Accessories", image: "/products/foxpurse-nobg.png" },
  { slug: "white-swimsuit", name: "White Swimsuit", category: "Swim", image: "/products/swimsuit-white-nobg.png" },
  { slug: "ee-zip-hoodie", name: "EE Zip Hoodie", category: "Outerwear", image: "/products/hoodie-nobg.png" },
  { slug: "ribbed-tank", name: "Ribbed Essential Tank", category: "Essentials", image: "/products/tank-nobg.png" },
  { slug: "indiana-long-sleeve", name: "Indiana Long Sleeve", category: "Shirts", image: "/products/long-sleeve-shirt-nobg.png" },
];

export default function Collection() {
  return (
    <section className="relative w-full">
      {pieces.map((piece, i) => (
        <div
          key={piece.slug}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        >
          {/* Warm directional side-light — alternating */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(110deg, rgba(197,165,114,0.10) 0%, rgba(197,165,114,0.03) 25%, transparent 50%)"
                : "linear-gradient(250deg, rgba(197,165,114,0.10) 0%, rgba(197,165,114,0.03) 25%, transparent 50%)",
            }}
          />

          {/* Warm radial glow behind product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(245,230,200,0.15) 0%, rgba(201,169,110,0.08) 35%, transparent 55%)" }}
          />

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <Link href={`/product/${piece.slug}`}>
              <img
                src={piece.image}
                alt={piece.name}
                className="w-[50vw] sm:w-[28vw] max-w-[380px] product-glow"
              />
            </Link>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-12 h-[1px] bg-[#C5A572]/50 mt-8 sm:mt-10 origin-center"
            />

            {/* Product info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-5 text-center"
            >
              <p className="text-[9px] sm:text-[10px] font-[300] tracking-[0.5em] text-[#C5A572]/60 uppercase mb-2"
                style={{ fontFamily: "var(--font-inter)" }}>
                {piece.category}
              </p>
              <Link href={`/product/${piece.slug}`}>
                <h2 className="text-[26px] sm:text-[34px] md:text-[42px] font-[400] tracking-[0.02em] text-[#F0EBE3]/80 hover:text-[#C5A572] transition-colors duration-500"
                  style={{ fontFamily: "var(--font-playfair)" }}>
                  {piece.name}
                </h2>
              </Link>
              <Link href={`/product/${piece.slug}`}
                className="inline-block mt-4 text-[9px] font-[300] tracking-[0.4em] text-[#C5A572]/40 uppercase hover:text-[#C5A572] transition-colors duration-300"
                style={{ fontFamily: "var(--font-inter)" }}>
                View Piece
              </Link>
            </motion.div>
          </motion.div>

          {/* Section index */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            className="absolute bottom-8 right-8 sm:right-12 text-[11px] font-[300] tracking-[0.4em] text-[#F0EBE3] z-20"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {String(i + 2).padStart(2, "0")}
          </motion.p>
        </div>
      ))}
    </section>
  );
}

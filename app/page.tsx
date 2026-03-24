"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Gallery from "./components/Gallery";
import Studio from "./components/Studio";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function GoldDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-[60px] h-[1px] bg-[#C5A572]/40 mx-auto origin-center"
    />
  );
}

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="relative">
        <Hero />

        {/* Content — cream/linen background throughout */}
        <div className="relative bg-[#EDEBE8]">
          <GoldDivider />
          <Collection />
          <GoldDivider />
          <Gallery />
          <GoldDivider />
          <Studio />
          <Footer />
        </div>
      </main>
    </>
  );
}

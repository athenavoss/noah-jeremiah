"use client";

import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Studio from "./components/Studio";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="relative">
        <Hero />
        <Collection />
        <Studio />
        <Footer />
      </main>
    </>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { src: "/gallery/ig-06.jpg", alt: "Construction notes" },
  { src: "/gallery/ig-07.jpg", alt: "Leather outerwear" },
  { src: "/gallery/ig-09.jpg", alt: "Muslin prototype" },
  { src: "/gallery/ig-11.jpg", alt: "Studio worktable" },
  { src: "/gallery/ig-13.jpg", alt: "Street shot" },
  { src: "/gallery/ig-16.jpg", alt: "Panoramic editorial" },
  { src: "/gallery/ig-10.jpg", alt: "Structured outerwear" },
];

function GalleryImage({ src, alt, index, scrollProgress }: { src: string; alt: string; index: number; scrollProgress: MotionValue<number> }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Each image gets a slightly different parallax offset based on its index
  const parallaxOffset = useTransform(
    scrollProgress,
    [0, 1],
    [index % 2 === 0 ? 40 : -40, index % 2 === 0 ? -40 : 40]
  );
  const smoothParallax = useSpring(parallaxOffset, { stiffness: 80, damping: 30 });

  // Mask reveal: observe when image enters viewport
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={imageRef}
      className="relative flex-shrink-0 w-[70vw] sm:w-[35vw] aspect-[3/4] overflow-hidden group"
      data-hover-gallery
    >
      <motion.div
        className="absolute inset-0"
        style={{ x: smoothParallax }}
      >
        {/* Scale slightly larger to accommodate parallax movement */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 70vw, 35vw"
          className="object-cover scale-110"
          loading="lazy"
        />
      </motion.div>
      {/* Gold tint overlay on hover */}
      <div className="absolute inset-0 bg-[#C5A572]/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Dark mask overlay — slides off to reveal image */}
      <div
        className="absolute inset-0 bg-[#2A2A28] pointer-events-none z-10"
        style={{
          transform: revealed ? "translateX(100%)" : "translateX(0%)",
          transition: revealed ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        }}
      />
    </motion.div>
  );
}

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Track scroll progress of the horizontal container for parallax
  const { scrollXProgress } = useScroll({ container: scrollContainerRef });

  const scrollGallery = (direction: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    // Scroll by one image width + gap
    const firstChild = container.querySelector(".snap-center") as HTMLElement;
    const scrollAmount = firstChild ? firstChild.offsetWidth + 24 : container.clientWidth * 0.6;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  // IntersectionObserver to track active image
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = imageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 sm:py-28 overflow-hidden scroll-mt-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 sm:mb-20"
      >
        <p
          className="text-[12px] sm:text-[14px] font-[300] tracking-[0.4em] text-[#C5A572] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Editorial
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-[1px] bg-[#C5A572]/50 mx-auto mt-4 origin-center"
        />
      </motion.div>

      {/* Horizontal scroll gallery with arrows */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-6 overflow-x-auto px-[15vw] sm:px-[10vw] snap-x snap-proximity touch-pan-x overscroll-x-contain"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapStop: "always",
          }}
        >
          {galleryItems.map((item, i) => (
            <div key={item.src} ref={(el) => { imageRefs.current[i] = el; }} className="snap-center flex-shrink-0" style={{ scrollSnapStop: "always" }}>
              <GalleryImage
                src={item.src}
                alt={item.alt}
                index={i}
                scrollProgress={scrollXProgress}
              />
            </div>
          ))}
          {/* Spacer to allow last image to center */}
          <div className="flex-shrink-0 w-[15vw] sm:w-[10vw]" />
        </div>

        {/* Desktop arrow buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); scrollGallery(-1); }}
          className="hidden sm:flex absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 items-center justify-center rounded-full border border-[#2A2A28]/30 text-[#2A2A28]/50 hover:text-[#2A2A28] hover:border-[#2A2A28]/60 hover:bg-[#2A2A28]/5 transition-all duration-300 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); scrollGallery(1); }}
          className="hidden sm:flex absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 w-12 h-12 items-center justify-center rounded-full border border-[#2A2A28]/30 text-[#2A2A28]/50 hover:text-[#2A2A28] hover:border-[#2A2A28]/60 hover:bg-[#2A2A28]/5 transition-all duration-300 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {galleryItems.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-2 h-2 bg-[#C5A572]"
                : "w-1.5 h-1.5 bg-[#2A2A28]/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

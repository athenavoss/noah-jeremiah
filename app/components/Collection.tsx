"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";

const pieces = [
  { slug: "foxpurse", name: "Fox Purse", category: "Accessories", image: "/products/foxpurse-nobg.png" },
  { slug: "white-swimsuit", name: "White Swimsuit", category: "Swim", image: "/products/swimsuit-white-nobg.png" },
  { slug: "black-swimsuit", name: "Black Swimsuit", category: "Swim", image: "/products/swimsuit-black-nobg.png" },
  { slug: "ee-zip-hoodie", name: "EE Zip Hoodie", category: "Outerwear", image: "/products/hoodie-nobg.png" },
  { slug: "black-hoodie", name: "Black Zip Hoodie", category: "Outerwear", image: "/products/hoodie-black-nobg.png" },
  { slug: "ribbed-tank", name: "Ribbed Essential Tank", category: "Essentials", image: "/products/tank-nobg.png" },
  { slug: "indiana-long-sleeve", name: "Indiana Long Sleeve", category: "Shirts", image: "/products/long-sleeve-shirt-nobg.png" },
  { slug: "short-sleeve", name: "Short Sleeve Shirt", category: "Shirts", image: "/products/short-sleeve-shirt-nobg.png" },

  { slug: "long-sleeve-dress", name: "Ribbed Long Sleeve Dress", category: "Women", image: "/products/long-sleeve-dress-nobg.png" },
  { slug: "womens-top", name: "Women\u2019s Essential Top", category: "Women", image: "/products/womens-top-nobg.png" },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 18,
  mass: 0.8,
};

function useMagneticFloat(containerRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const floatX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const floatY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = (e.clientX - centerX) / (rect.width / 2); // -1 to 1
      const offsetY = (e.clientY - centerY) / (rect.height / 2); // -1 to 1
      mouseX.set(offsetX * 8);
      mouseY.set(offsetY * 8);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, isMobile, mouseX, mouseY]);

  // Mobile: touch-based magnetic float
  useEffect(() => {
    if (!isMobile) return;
    const container = containerRef.current;
    if (!container) return;

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const touch = e.touches[0];
      const offsetX = ((touch.clientX - centerX) / (rect.width / 2)) * 8;
      const offsetY = ((touch.clientY - centerY) / (rect.height / 2)) * 4;
      mouseX.set(Math.max(-8, Math.min(8, offsetX)));
      mouseY.set(Math.max(-4, Math.min(4, offsetY)));
    };

    const handleTouchEnd = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);
    return () => {
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, containerRef, mouseX, mouseY]);

  return { floatX, floatY };
}

export default function Collection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { floatX, floatY } = useMagneticFloat(containerRef, isMobile);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = (index: number) => {
    const wrapped = ((index % pieces.length) + pieces.length) % pieces.length;
    setCurrent(wrapped);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      goTo(current + 1);
    } else if (info.offset.x > threshold) {
      goTo(current - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Section label */}
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
          Collection
        </p>
        <p
          className="text-[10px] font-[300] tracking-[0.3em] text-[#2A2A28]/30 uppercase mt-3 flex items-center justify-center gap-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>&#8592;</span>
          <span>Swipe</span>
          <span>&#8594;</span>
        </p>
      </motion.div>

      {/* Carousel surface — darker concrete band */}
      <div className="relative">
        {/* Subtle surface band */}
        <div
          className="absolute inset-0 -top-8 -bottom-8"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(197,165,114,0.04) 15%, rgba(197,165,114,0.06) 50%, rgba(197,165,114,0.04) 85%, transparent 100%)",
          }}
        />

        {/* Cover Flow Container */}
        <div
          ref={containerRef}
          className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center overflow-hidden"
        >
          {/* Drag area for mobile swipe */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 z-30 touch-pan-y"
            style={{ cursor: "grab" }}
          />

          {/* Products in cover flow layout */}
          {pieces.map((piece, i) => {
            let offset = i - current;
            // Wrap around for circular carousel
            const half = pieces.length / 2;
            if (offset > half) offset -= pieces.length;
            if (offset < -half) offset += pieces.length;
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;
            // On mobile, hide non-adjacent pieces and make adjacent ones invisible (for smooth slide animation)
            if (isMobile && Math.abs(offset) > 1) return null;

            return (
              <motion.div
                key={piece.slug}
                animate={{
                  x: offset * (isMobile ? 280 : 320),
                  scale: isCenter ? 1 : (isMobile ? 1 : 0.75),
                  opacity: isCenter ? 1 : (isMobile ? 0 : (Math.abs(offset) === 1 ? 0.5 : 0.25)),
                  zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                  y: isCenter ? -40 : 0,
                }}
                transition={springTransition}
                className="absolute flex flex-col items-center"
              >
                <motion.img
                  src={piece.image}
                  alt={piece.name}
                  className="w-[55vw] sm:w-[28vw] max-w-[380px] product-shadow pointer-events-none select-none"
                  draggable={false}
                  data-hover-gallery
                  style={isCenter ? { x: floatX, y: floatY } : undefined}
                />
                {/* Drop shadow below floating center item */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="absolute -bottom-4 w-[50%] h-[20px] rounded-full"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, transparent 70%)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Desktop arrow buttons */}
          <button
            onClick={() => goTo(current - 1)}
            
            className="hidden sm:flex absolute left-6 md:left-12 z-40 w-12 h-12 items-center justify-center rounded-full border border-[#2A2A28]/30 text-[#2A2A28]/50 hover:text-[#2A2A28] hover:border-[#2A2A28]/60 transition-all duration-300 "
            data-hover
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(current + 1)}
            
            className="hidden sm:flex absolute right-6 md:right-12 z-40 w-12 h-12 items-center justify-center rounded-full border border-[#2A2A28]/30 text-[#2A2A28]/50 hover:text-[#2A2A28] hover:border-[#2A2A28]/60 transition-all duration-300 "
            data-hover
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Product info below carousel */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-2 sm:mt-4"
        >
          <p
            className="text-[12px] sm:text-[14px] font-[300] tracking-[0.4em] text-[#C5A572] uppercase mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {pieces[current].category}
          </p>
          <h2
            className="text-[22px] sm:text-[34px] md:text-[42px] font-[400] tracking-[0.02em] text-[#2A2A28]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {pieces[current].name}
          </h2>
          <a
            href="mailto:inquire@noahjeremiah.com"
            className="inline-block mt-3 text-[10px] tracking-[0.4em] uppercase text-[#C5A572] border-b border-[#C5A572]/40 pb-[2px] hover:border-[#C5A572] transition-colors duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Inquire
          </a>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-5">
          {pieces.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#C5A572] scale-125"
                  : "bg-[#2A2A28]/20 hover:bg-[#2A2A28]/40"
              }`}
              data-hover
            />
          ))}
        </div>
      </div>
    </section>
  );
}

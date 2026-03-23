"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const products: Record<string, {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  materials: string;
}> = {
  "foxpurse": {
    name: "Fox Purse",
    category: "Accessories",
    price: "$2,800",
    image: "/products/foxpurse-nobg.png",
    description: "Handcrafted fur bucket bag with slim leather handle. Each piece is unique — natural variations in texture and tone make every bag a one-of-one.",
    materials: "Natural Fur · Leather Handle · Handstitched",
  },
  "white-swimsuit": {
    name: "White Swimsuit",
    category: "Swim",
    price: "$480",
    image: "/products/swimsuit-white-nobg.png",
    description: "Heavyweight recycled nylon spandex with halter neck tie fastening and back embroidery. Partially lined for a sculpted silhouette.",
    materials: "73% Recycled Nylon · 27% Spandex · Back Embroidery",
  },
  "black-swimsuit": {
    name: "Black Swimsuit",
    category: "Swim",
    price: "$480",
    image: "/products/swimsuit-black-nobg.png",
    description: "The same precision construction in black. Heavyweight recycled nylon spandex, halter neck, back embroidery detail.",
    materials: "73% Recycled Nylon · 27% Spandex · Back Embroidery",
  },
  "jersey-dress": {
    name: "Jersey Low Cut Dress",
    category: "Women",
    price: "$1,200",
    image: "/products/womens-top-nobg.png",
    description: "Jersey knit with a dramatic low cut. Designed to move with the body, not against it. Cut and finished by hand.",
    materials: "Premium Jersey Knit · Hand Finished · Made in USA",
  },
  "long-sleeve-dress": {
    name: "Ribbed Long Sleeve Dress",
    category: "Women",
    price: "$1,800",
    image: "/products/long-sleeve-dress-nobg.png",
    description: "Ribbed construction with structured shoulder pads. A silhouette that commands without trying. Every seam is intentional.",
    materials: "Ribbed Knit · Shoulder Pads · Full Length",
  },
  "ribbed-tank": {
    name: "Ribbed Essential Tank",
    category: "Essentials",
    price: "$380",
    image: "/products/tank-nobg.png",
    description: "The foundation piece. Black ribbed essential tank — the garment you reach for first and think about last. That's the point.",
    materials: "Premium Ribbed Cotton · Slim Fit · Made in USA",
  },
  "indiana-long-sleeve": {
    name: "Indiana Long Sleeve",
    category: "Shirts",
    price: "$680",
    image: "/products/long-sleeve-shirt-nobg.png",
    description: "Long sleeve button-up with custom fit. Named after the state of mind, not the state. Worn open or closed — both are correct.",
    materials: "Premium Cotton · Custom Buttons · Hand Cut",
  },
  "alt-trap-tee": {
    name: "Alternative Trap Music Tee",
    category: "Tees",
    price: "$280",
    image: "/products/short-sleeve-shirt-nobg.png",
    description: "Graphic tee with a message. Heavyweight cotton, oversized fit. The kind of shirt that starts conversations you didn't plan to have.",
    materials: "Heavyweight Cotton · Screen Printed · Oversized Fit",
  },
  "ee-zip-hoodie": {
    name: "EE Zip Hoodie",
    category: "Outerwear",
    price: "$1,400",
    image: "/products/hoodie-nobg.png",
    description: "Full zip hoodie with sheer organza cuff extensions. The unexpected detail that separates costume from clothing. White exposed zipper.",
    materials: "French Terry · Organza Cuffs · YKK Zipper",
  },
  "black-ee-zip-hoodie": {
    name: "Black EE Zip Hoodie",
    category: "Outerwear",
    price: "$1,400",
    image: "/products/hoodie-black-nobg.png",
    description: "The same silhouette in black. Full zip, sheer extensions, exposed hardware. Darkness with a whisper of transparency.",
    materials: "French Terry · Organza Cuffs · YKK Zipper",
  },
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <p className="text-[#8A8580] text-[13px] tracking-[0.3em]" style={{ fontFamily: "var(--font-inter)" }}>
          PIECE NOT FOUND
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-[#F0EBE3] overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-12 py-6"
        style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.95) 0%, transparent 100%)" }}
      >
        <Link href="/"
          className="text-[18px] sm:text-[20px] font-[300] tracking-[0.1em] text-[#F0EBE3]/40 hover:text-[#C5A572] transition-colors duration-500"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          NJ
        </Link>
        <Link href="/"
          className="text-[10px] font-[300] tracking-[0.5em] text-[#8A8580] uppercase hover:text-[#C5A572] transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Back
        </Link>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Product image */}
        <div className="relative flex items-center justify-center pt-24 pb-6" style={{ minHeight: "45vh" }}>
          {/* Warm side light */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(197,165,114,0.06) 0%, transparent 40%)" }}
          />
          {/* Warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(197,165,114,0.05) 0%, transparent 55%)" }}
          />

          <motion.img
            initial={{ opacity: 0, y: -30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring", stiffness: 40, damping: 16 }}
            src={product.image}
            alt={product.name}
            className="w-[70vw] max-w-[380px] product-glow relative z-10"
          />
        </div>

        {/* Product info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-8 pb-36 flex-1"
        >
          <p className="text-[9px] font-[300] tracking-[0.5em] text-[#8A8580] uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.category}
          </p>
          <h1 className="text-[32px] sm:text-[40px] font-[300] tracking-[0.02em] leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-[#C5A572]/60" />
            <p className="text-[18px] font-[300] text-[#F0EBE3]/80" style={{ fontFamily: "var(--font-inter)" }}>
              {product.price}
            </p>
          </div>
          <p className="text-[13px] font-[300] leading-[1.9] text-[#8A8580] mb-6"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.description}
          </p>
          <p className="text-[9px] font-[300] tracking-[0.3em] text-[#8A8580]/60 uppercase"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.materials}
          </p>
        </motion.div>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 px-8 pt-4 border-t border-[#F0EBE3]/5"
          style={{ background: "linear-gradient(to top, rgba(17,17,17,0.98) 70%, transparent 100%)", paddingBottom: "max(env(safe-area-inset-bottom, 12px), 16px)" }}
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 border border-[#C5A572]/40 text-[10px] font-[300] tracking-[0.5em] text-[#C5A572] uppercase hover:bg-[#C5A572] hover:text-[#111111] transition-colors duration-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Inquire About This Piece
          </motion.button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left — Product */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Warm side light */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(120deg, rgba(197,165,114,0.07) 0%, transparent 45%)" }}
          />
          {/* Warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(240,235,227,0.08) 0%, rgba(197,165,114,0.04) 35%, transparent 55%)" }}
          />

          <motion.img
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring", stiffness: 40, damping: 16 }}
            src={product.image}
            alt={product.name}
            className="w-[32vw] max-w-[480px] product-glow relative z-10"
          />
        </div>

        {/* Right — Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-[380px] xl:w-[420px] flex flex-col justify-center px-14 xl:px-16 py-20 border-l border-[#F0EBE3]/5"
        >
          <p className="text-[10px] font-[300] tracking-[0.5em] text-[#8A8580] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.category}
          </p>
          <h1 className="text-[40px] xl:text-[48px] font-[300] tracking-[0.02em] leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}>
            {product.name}
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#C5A572]/60" />
            <p className="text-[20px] font-[300] text-[#F0EBE3]/80" style={{ fontFamily: "var(--font-inter)" }}>
              {product.price}
            </p>
          </div>
          <p className="text-[13px] font-[300] leading-[1.9] text-[#8A8580] mb-8"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.description}
          </p>
          <p className="text-[8px] xl:text-[9px] font-[300] tracking-[0.25em] xl:tracking-[0.3em] text-[#8A8580]/50 uppercase mb-10 whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter)" }}>
            {product.materials}
          </p>
          <div className="w-full h-[1px] bg-[#F0EBE3]/5 mb-8" />
          <motion.button
            whileHover={{ backgroundColor: "#C5A572", color: "#111111" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 border border-[#C5A572]/40 text-[10px] font-[300] tracking-[0.5em] text-[#C5A572] uppercase transition-colors duration-500"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Inquire About This Piece
          </motion.button>
          <p className="text-center mt-4 text-[9px] font-[300] tracking-[0.3em] text-[#8A8580]/40 uppercase"
            style={{ fontFamily: "var(--font-inter)" }}>
            <a href="mailto:inquire@noahjeremiah.com" className="hover:text-[#C5A572] transition-colors">
              or email studio directly
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

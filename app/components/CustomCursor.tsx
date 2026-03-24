"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [hoveringGallery, setHoveringGallery] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);
    const addGalleryHover = () => setHoveringGallery(true);
    const removeGalleryHover = () => setHoveringGallery(false);

    window.addEventListener("mousemove", move);

    const watch = () => {
      document.querySelectorAll("a, button, input, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
      // Gallery and carousel images get a larger cursor
      document.querySelectorAll("[data-hover-gallery]").forEach((el) => {
        el.addEventListener("mouseenter", addGalleryHover);
        el.addEventListener("mouseleave", removeGalleryHover);
      });
    };
    watch();
    const observer = new MutationObserver(watch);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  const cursorClass = hoveringGallery
    ? "custom-cursor hovering-gallery"
    : hovering
      ? "custom-cursor hovering"
      : "custom-cursor";

  return (
    <div
      className={cursorClass}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

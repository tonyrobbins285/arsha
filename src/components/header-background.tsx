"use client";

import { useEffect, useRef } from "react";

export default function HeaderBackground() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.scrollY > 100) {
      ref.current?.classList.remove("opacity-0");
    }
  }, []);

  useEffect(() => {
    const eventHandler = () => {
      ref.current?.classList.toggle("opacity-0", !(window.scrollY > 100));
    };

    window.addEventListener("scroll", eventHandler);
    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(40, 58, 90,0.9)",
      }}
      className="absolute z-10 h-full w-full opacity-0 transition-opacity duration-500"
    />
  );
}

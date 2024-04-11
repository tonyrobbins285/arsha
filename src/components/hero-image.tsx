"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function HeroImage() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        refDiv.current?.classList.remove("scale-0", "opacity-0");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.5 },
  );

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex flex-1 items-center justify-center"
    >
      <div
        ref={refDiv}
        className="relative h-[300px] w-full scale-0 opacity-0 transition-all duration-1000 ease-in lg:h-[450px]"
      >
        <Image
          alt="hero-img"
          src="/img/hero-img.png"
          className="animate-up-down object-contain object-center"
          fill
          priority
          sizes="(min-width: 1360px) 640px, calc(47.12vw + 9px)"
        />
      </div>
    </div>
  );
}

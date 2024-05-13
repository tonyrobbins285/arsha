"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { CirclePlay } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function HeroContent() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 },
  );

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex flex-col justify-center opacity-0 lg:flex-1"
    >
      <h1 className="mb-[30px] text-center text-5xl font-bold leading-[1.17] tracking-wide text-white lg:text-left">
        Better Solutions For Your Business
      </h1>

      <h2 className="mb-[50px] text-center text-2xl font-medium leading-[1.2] text-white text-opacity-60 delay-1000 lg:text-left">
        We are team of talented designers making websites with Bootstrap
      </h2>
      <div className="flex items-center justify-center gap-6 lg:justify-start">
        <Link
          href="#"
          className="rounded-full bg-sky-400 px-7 py-2.5 font-medium text-white duration-500 hover:bg-sky-500"
        >
          Get Started
        </Link>
        <Link
          href="#"
          className="group flex items-center gap-1.5 text-white transition-all hover:scale-105"
        >
          <CirclePlay
            size={32}
            strokeWidth={1.5}
            className="group-hover:text-sky-500"
          />
          <span>Watch Video</span>
        </Link>
      </div>
    </div>
  );
}

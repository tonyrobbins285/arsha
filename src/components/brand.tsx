"use client";
import React, { useRef, useState } from "react";
import { Container } from "./ui/container";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { brandImages } from "@/assets/data";

export default function Brand() {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const refUl = useRef<HTMLUListElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        refUl.current?.classList.remove("scale-50", "opacity-0");
      }
    },
    { threshold: 0.1 },
  );

  return (
    <section ref={(newRef) => setRef(newRef)} className="bg-gray-200">
      <Container className="py-0">
        <ul
          ref={refUl}
          className="grid scale-50 grid-cols-2 place-items-center gap-2 opacity-0 transition-all duration-1000 md:grid-cols-3 lg:grid-cols-6"
        >
          {brandImages.map((img) => (
            <li
              className="relative h-[100px] w-[100px] items-center justify-center"
              key={img.src}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="object-contain object-center grayscale transition-all duration-500 hover:scale-125 hover:grayscale-0"
                fill
                sizes="(min-width: 1360px) 640px, calc(47.12vw + 9px)"
                priority
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

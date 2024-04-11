"use client";
import React, { useRef, useState } from "react";
import { Container } from "./ui/container";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const brands = [
  {
    src: "/img/clients/client-1.png",
    alt: "myob",
  },
  {
    src: "/img/clients/client-2.png",
    alt: "belimo",
  },
  {
    src: "/img/clients/client-3.png",
    alt: "lifegroups",
  },
  {
    src: "/img/clients/client-4.png",
    alt: "lilly",
  },
  {
    src: "/img/clients/client-5.png",
    alt: "citrus",
  },
  {
    src: "/img/clients/client-6.png",
    alt: "trustly",
  },
];

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
      <Container>
        <ul
          ref={refUl}
          className="grid scale-50 grid-cols-2 place-items-center gap-2 opacity-0 transition-all duration-1000 md:grid-cols-3 lg:grid-cols-6"
        >
          {brands.map((brand) => (
            <li
              className="relative h-[100px] w-[100px] items-center justify-center"
              key={brand.src}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
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

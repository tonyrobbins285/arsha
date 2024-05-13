"use client";

import React, { useRef, useState } from "react";
import { Container } from "./ui/container";
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCheckIcon } from "lucide-react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const content = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, iure!",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, laudantium!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam!",
];

export default function AboutUs() {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        refDiv.current?.classList.add("animate-fade-up");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 },
  );

  return (
    <section
      className="overflow-hidden"
      ref={(newRef) => setRef(newRef)}
      id="about-us"
    >
      <Container ref={refDiv} className="opacity-0">
        <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-wide text-sky-700">
          About Us
        </h2>
        <Carousel className="group w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col gap-5 lg:flex-row">
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-pretty">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quas voluptatem nobis aspernatur, modi quaerat voluptates.
                    </p>

                    <ul className="flex flex-col gap-2">
                      {content.map((value) => (
                        <li className="flex gap-2 text-pretty" key={value}>
                          <CheckCheckIcon className="text-blue-800" />
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <h4 className="text-pretty text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex porro magnam ducimus eligendi debitis, autem at illo
                      similique ipsum error quisquam sint adipisci molestiae
                      laborum perferendis nostrum eum a consequatur.
                    </h4>
                    <button className="relative overflow-hidden rounded-full border-2 border-blue-600 px-9 py-3 transition-all duration-700 before:absolute before:inset-0 before:-z-10 before:origin-top before:scale-y-0 before:bg-blue-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:origin-bottom before:hover:scale-y-100 ">
                      Learn More
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <CarouselNext className="opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <CarouselButton className="mt-[-20px]" />
        </Carousel>
      </Container>
    </section>
  );
}

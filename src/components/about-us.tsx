import React from "react";
import { Container } from "./ui/container";
import {
  Carousel,
  CarouselButton,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutUs() {
  return (
    <section>
      <Container className="py-16">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-sky-700">
          About Us
        </h2>
        <div className="h-full w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div>
                      <div className="flex items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
            <CarouselButton />
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { imagePlaceholder } from "@/assets/data";
import useOutsideClickHandler from "@/hooks/useCloseElementHandler";
import { useFullpageImageStore, useOverlayStore } from "@/store";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FullpageImage() {
  const { isOpen, close, data } = useFullpageImageStore();
  const { open: overlayOpen, close: overlayClose } = useOverlayStore();

  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(imgRef.current, close);

  useEffect(() => {
    isOpen ? overlayOpen() : overlayClose();
    document.body.classList.toggle("overflow-hidden", isOpen);
    ref.current?.classList.toggle("scale-0", !isOpen);
  }, [isOpen, overlayClose, overlayOpen]);

  return (
    <Carousel
      ref={ref}
      className="fixed inset-0 z-50 flex scale-0 items-center justify-center bg-transparent transition-transform duration-500"
    >
      <X
        onClick={() => close()}
        className="absolute right-10 top-10 cursor-pointer text-white hover:text-blue-300"
        size={40}
      />
      <CarouselContent>
        {data && (
          <div
            role="dialog"
            ref={imgRef}
            className="flex max-h-[80%] max-w-[80%] flex-col gap-5 bg-white p-5"
          >
            <div>
              <Image
                alt="img"
                src={data[0].src}
                className="w-full object-contain object-center"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div>
              <p>
                <b>Category: </b> {data[0].category}
              </p>
            </div>
          </div>
        )}
      </CarouselContent>
    </Carousel>
  );
}

{
  Array.from({ length: 5 }).map((_, index) => (
    <CarouselItem key={index}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  ));
}
// <CarouselPrevious />
// <CarouselNext />

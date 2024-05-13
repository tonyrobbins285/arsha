"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

export default function SectionImage({
  src,
  animate = false,
}: {
  src: string;
  animate?: boolean;
}) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        refDiv.current?.classList.add("animate-zoom-in");
        refDiv.current?.classList.remove("scale-0", "opacity-0");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 },
  );

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex flex-1 items-center justify-center"
    >
      <div
        ref={refDiv}
        className="relative h-[300px] w-full scale-0 opacity-0 lg:h-[450px]"
      >
        <Image
          alt="img"
          src={src}
          className={cn(
            "object-center, object-contain",
            animate && "animate-up-down",
          )}
          fill
          priority
          sizes="(min-width: 1360px) 640px, calc(47.12vw + 9px)"
        />
      </div>
    </div>
  );
}

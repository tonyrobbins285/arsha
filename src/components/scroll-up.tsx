"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ScrollUp() {
  const [isMounted, setIsMounted] = useState(false);
  const rollUpHandler = () => {};
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useIntersectionObserver(
    document.getElementById("hero"),
    (entries) => {
      const [entry] = entries;
      ref.current?.classList.toggle("opacity-0", entry.isIntersecting);
    },
    {
      threshold: 0.8,
    },
  );

  if (!isMounted) return;

  return (
    <div
      ref={ref}
      className="fixed -right-[50%] bottom-8 transition-opacity duration-500 lg:right-[2rem]"
    >
      <button
        onClick={() => rollUpHandler()}
        className="rounded-full bg-blue-300 p-3 transition-all duration-500 hover:scale-105 hover:bg-blue-400"
      >
        <ArrowUp
          size={32}
          className="text-white"
          strokeWidth={1.2}
          absoluteStrokeWidth
        />
      </button>
    </div>
  );
}

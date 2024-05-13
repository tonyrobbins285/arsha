"use client";

import useFadeUp from "@/hooks/useFadeUp";
import { useState } from "react";

export default function PortfolioTitle() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useFadeUp(ref);

  return (
    <div ref={(newRef) => setRef(newRef)} className="space-y-4 opacity-0">
      <h1 className="text-center text-4xl font-bold leading-9 tracking-wide text-sky-900">
        Portfolio
      </h1>
      <p className="text-pretty text-center text-black text-opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi
        provident distinctio culpa explicabo voluptatem id! Fugit blanditiis sed
        provident?
      </p>
    </div>
  );
}

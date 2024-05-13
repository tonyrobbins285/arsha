"use client";

import useFadeUp from "@/hooks/useFadeUp";
import { Dispatch, SetStateAction, useState } from "react";
import { portfolioData } from "@/assets/data";
import { cn } from "@/lib/utils";

type PortfolioFilterProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

export default function PortfolioFilter({
  setCategory,
  category,
}: PortfolioFilterProps) {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const categories = Array.from(
    new Set(portfolioData.map((item) => item.category)),
  )
    .sort()
    .toSpliced(0, 0, "All");

  useFadeUp(ref);

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex items-center justify-center gap-7 opacity-0"
    >
      {categories.map((state) => (
        <button
          className={cn(
            "rounded-full px-5 py-1 font-medium text-black text-opacity-70 transition-all hover:bg-sky-500 hover:text-white hover:text-opacity-100",
            state === category && "bg-sky-500 text-white text-opacity-100",
          )}
          onClick={() => setCategory(state)}
          key={state}
        >
          {state}
        </button>
      ))}
    </div>
  );
}

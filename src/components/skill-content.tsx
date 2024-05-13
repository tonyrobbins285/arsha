"use client";

import { skillData as data } from "@/assets/data";
import useFadeUp from "@/hooks/useFadeUp";
import { useState } from "react";

export default function SKillContent() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useFadeUp(ref);

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex-1 space-y-3 opacity-0"
    >
      <h1 className="text-4xl font-bold leading-9 tracking-wide text-sky-900">
        Eum ipsam laborum deleniti velit pariatur architecto aut nihil
      </h1>
      <p className="text-pretty text-black text-opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit
      </p>
      <div className="space-y-3">
        {data.map((value) => (
          <div key={value.language} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold text-sky-700">
              <p>{value.language}</p>
              <p>{value.proficiency + "%"}</p>
            </div>
            <div
              className="h-3 bg-sky-700"
              style={{ width: value.proficiency + "%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

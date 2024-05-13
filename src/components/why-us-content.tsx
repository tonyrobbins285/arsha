"use client";

import { whyUsData as data } from "@/assets/data";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export default function WhyUsContent() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2 },
  );

  return (
    <div
      ref={(newRef) => setRef(newRef)}
      className="flex-1 space-y-3 opacity-0"
    >
      <h1 className="text-4xl leading-9 tracking-wide text-sky-900">
        Eum ipsam laborum deleniti{" "}
        <span className="font-black">velit pariatur architecto aut nihil</span>
      </h1>
      <h6 className="text-pretty text-black text-opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit
      </h6>
      <div className="space-y-3">
        {data.map((value) => (
          <div key={value.body} className="rounded-lg bg-white">
            <input
              type="checkbox"
              id={value.id.toString()}
              className="peer absolute opacity-0"
            />
            <label
              htmlFor={value.id.toString()}
              className="flex cursor-pointer items-center gap-2 px-7 py-5 font-bold hover:text-sky-500 peer-checked:text-sky-500 peer-checked:[&>div:last-child]:rotate-180"
            >
              <span className="text-sky-500">{"0" + value.id}</span>
              <span className="mr-auto">{value.header}</span>
              <div className="transition">
                <ArrowDown />
              </div>
            </label>
            <div className="max-h-0 overflow-hidden transition-all duration-300 ease-linear peer-checked:max-h-[10rem]">
              <p className="text-pretty px-7 pb-5">{value.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

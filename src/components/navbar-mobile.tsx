"use client";

import useOutsideClickHandler from "@/hooks/useCloseElementHandler";
import { generateMainNavRoutes } from "@/lib/navigation";
import { useMobileNavStore } from "@/store";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function NavbarMobile() {
  const { isOpen, close } = useMobileNavStore();

  const ref = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const mainNavRoutes = generateMainNavRoutes(pathname);

  useOutsideClickHandler(ref.current, close);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    ref.current?.classList.toggle("translate-x-[100%]", !isOpen);
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="fixed right-0 top-0 z-50 h-full w-[500px] translate-x-[100%] rounded-l-[100px] bg-sky-800 transition-transform duration-500 lg:hidden"
    >
      <X
        onClick={() => close()}
        className="absolute left-[20%] top-[5%] cursor-pointer text-white hover:text-blue-300"
        size={40}
      />
      <div className="flex h-full flex-col pt-[150px]">
        <ul className="flex flex-col gap-8">
          {mainNavRoutes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="pl-20 text-lg font-light text-white hover:text-blue-200"
            >
              <li>{route.label}</li>
            </Link>
          ))}
          <button className="mx-5 mt-10 rounded-full border-2 border-blue-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-500">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
}

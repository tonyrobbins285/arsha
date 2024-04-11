"use client";

import { useMobileNavStore, useOverlayStore } from "@/store";
import { useEffect, useRef } from "react";

export default function Overlay() {
  const { isOpen, close, open } = useOverlayStore();
  const mobileNav = useMobileNavStore((state) => state.isOpen);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mobileNav ? open() : close();
  }, [close, mobileNav, open]);

  useEffect(() => {
    ref.current?.classList.toggle("opacity-0", !isOpen);
    ref.current?.classList.toggle("inset-0", isOpen);
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="fixed z-30 bg-black bg-opacity-50 transition-all duration-1000"
    />
  );
}

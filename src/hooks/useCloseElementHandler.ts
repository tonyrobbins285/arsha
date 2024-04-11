import { useMobileNavStore } from "@/store";
import { useEffect } from "react";

export default function useCloseElementHandler(element: HTMLElement | null) {
  const close = useMobileNavStore((state) => state.close);
  useEffect(() => {
    if (element === null) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (!element.contains(e.target as Node)) {
        close();
      }
    };
    const handleEscapeButton = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleEscapeButton);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keyup", handleEscapeButton);
    };
  }, [close, element]);
}

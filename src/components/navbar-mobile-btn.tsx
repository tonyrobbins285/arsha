"use client";

import { Menu } from "lucide-react";
import { useMobileNavStore } from "@/store";

export default function NavbarMobileBtn() {
  const setIsOpen = useMobileNavStore((state) => state.setIsOpen);

  return (
    <Menu
      onClick={() => setIsOpen()}
      size={36}
      color="white"
      strokeWidth={1.5}
      className="cursor-pointer lg:hidden"
    />
  );
}

"use client";

import { generateMainNavRoutes } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const mainNavRoutes = generateMainNavRoutes(pathname);
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      <ul className="flex gap-8">
        {mainNavRoutes.map((route) => (
          <li
            key={route.label}
            className="text-md font-light text-white hover:text-blue-200"
          >
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
      <button className="rounded-full border-2 border-blue-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-500">
        Get Started
      </button>
    </nav>
  );
}

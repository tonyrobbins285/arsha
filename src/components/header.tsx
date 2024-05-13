import { Container } from "@/components/ui/container";

import HeaderBackground from "./header-background";
import Navbar from "./navbar";
import Link from "next/link";
import NavbarMobileBtn from "./navbar-mobile-btn";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 h-16 w-full bg-transparent">
      <HeaderBackground />
      <Container className="relative z-40 py-0">
        <div className="flex h-full w-full items-center justify-between">
          <h1 className="text-3xl font-medium uppercase tracking-wider text-white">
            <Link href="/">Arsha</Link>
          </h1>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Hamburger button */}
          <NavbarMobileBtn />
        </div>
      </Container>
    </header>
  );
}

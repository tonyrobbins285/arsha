import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Overlay from "@/components/overlay";
import NavbarMobile from "@/components/navbar-mobile";
import NavbarMobileBtn from "@/components/navbar-mobile-btn";
import ScrollUp from "@/components/scroll-up";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Overlay />
        {/* Mobile Navbar */}
        <NavbarMobile />
        {/* Scroll up  */}
        <ScrollUp />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

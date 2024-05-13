import AboutUs from "@/components/about-us";
import Brand from "@/components/brand";
import WhyUs from "@/components/why-us";
import Hero from "@/components/hero";
import Skill from "@/components/skill";
import CTA from "@/components/CTA";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <AboutUs />
      <WhyUs />
      <Skill />
      <CTA />
      <Portfolio />
      <Contact />
    </>
  );
}

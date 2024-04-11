import HeroContent from "@/components/hero-content";
import HeroImage from "@/components/hero-image";
import { Container } from "@/components/ui/container";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-100px)] bg-[#37517e] py-16">
      <Container className="pt-5 md:pt-10 lg:pt-[6rem]">
        <div className="flex h-full flex-col-reverse gap-10 lg:flex-row lg:gap-5">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}

import HeroContent from "@/components/hero-content";
import { Container } from "@/components/ui/container";
import SectionImage from "./section-image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-100px)] bg-[#37517e] py-16">
      <Container className="pt-5 md:pt-10 lg:pt-[6rem]">
        <div className="flex h-full flex-col-reverse gap-10 lg:flex-row lg:gap-5">
          <HeroContent />
          <SectionImage src="/img/hero-img.png" animate={true} />
        </div>
      </Container>
    </section>
  );
}

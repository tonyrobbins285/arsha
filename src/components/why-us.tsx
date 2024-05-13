import { Container } from "./ui/container";
import SectionImage from "./section-image";
import WhyUsContent from "./why-us-content";

export default function WhyUs() {
  return (
    <section className="overflow-hidden bg-sky-100">
      <Container>
        <div className="flex flex-col-reverse gap-8 lg:flex-row">
          <WhyUsContent />

          <SectionImage src="/img/why-us.png" />
        </div>
      </Container>
    </section>
  );
}

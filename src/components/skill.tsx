import React from "react";
import { Container } from "./ui/container";
import SectionImage from "./section-image";
import SkillContent from "./skill-content";

export default function Skill() {
  return (
    <section>
      <Container>
        <div className="flex flex-col-reverse gap-8 lg:flex-row">
          <SectionImage src="/img/skills.png" />
          <SkillContent />
        </div>
      </Container>
    </section>
  );
}

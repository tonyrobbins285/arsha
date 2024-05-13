"use client";

import { Container } from "./ui/container";
import PortfolioFilter from "./portfolio-filter";
import PortfolioContainer from "./portfolio-container";
import PortfolioTitle from "./portfolio-title";
import { useState } from "react";

export default function Portfolio() {
  const [category, setCategory] = useState("All");

  return (
    <section>
      <Container className="space-y-7">
        <PortfolioTitle />
        <PortfolioFilter setCategory={setCategory} category={category} />
        <PortfolioContainer category={category} />
      </Container>
    </section>
  );
}

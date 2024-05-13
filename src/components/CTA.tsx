import React from "react";
import { Container } from "./ui/container";

export default function CTA() {
  return (
    <section
      className="h-[500px] min-h-[500px] bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url('/img/cta-bg.jpg')",
      }}
    >
      <Container className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-wider text-white">
            Call To Action
          </h1>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nemo
            dolor enim voluptatibus explicabo eaque, quisquam et reprehenderit
            deleniti eius.
          </p>
        </div>
        <button className="text-nowrap rounded-full border-2 px-10 py-4 text-xl text-white transition-all hover:border-sky-400 hover:bg-sky-400 hover:bg-opacity-80">
          Call To Action
        </button>
      </Container>
    </section>
  );
}

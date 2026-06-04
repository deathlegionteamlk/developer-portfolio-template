import React from "react";
import { useIntersection } from "@/hooks/use-intersection";

const STATS = [
  { value: "5+", label: "Years coding" },
  { value: "20+", label: "Projects shipped" },
  { value: "3", label: "Open source tools" },
  { value: "1", label: "Team founded" },
];

export function AboutSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-16 items-start reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          {/* Text side */}
          <div>
            <div className="font-space-mono text-accent text-xs mb-4">
              01 / About
            </div>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Who I am
            </h2>
            <div className="space-y-4 text-muted-foreground font-dm-sans leading-relaxed">
              <p>
                I go by Nick online — mostly Enuzna or Hexa depending on where
                you find me. I've been writing code since 2019 and building
                full stack applications since 2021.
              </p>
              <p>
                Most of my work lives on the backend: Node.js services, REST
                and GraphQL APIs, PostgreSQL and MongoDB. I know my way around
                the frontend too — React, TypeScript, and enough CSS to make
                things actually look right.
              </p>
              <p>
                I also run{" "}
                <span className="text-foreground font-medium">
                  Team DeathLegionLK
                </span>
                , a small group of developers and gamers from Sri Lanka. We
                build tools, ship projects, and occasionally compete.
              </p>
              <p>
                Right now I'm available for freelance work and open to
                interesting full stack contracts.
              </p>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`portfolio-card rounded-lg p-6 reveal reveal-delay-${i + 1} ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                <div className="font-syne font-extrabold text-4xl text-accent mb-1">
                  {stat.value}
                </div>
                <div className="font-dm-sans text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

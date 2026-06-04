import React from "react";
import { useIntersection } from "@/hooks/use-intersection";

const TIMELINE = [
  {
    year: "2019",
    title: "Started coding",
    org: "Self-taught",
    desc: "Picked up JavaScript and HTML. Built small tools and automations for games. Figured out the rest from there.",
  },
  {
    year: "2021",
    title: "Freelance developer",
    org: "Independent",
    desc: "Started taking on paid web development work. Mostly small business sites and Node.js backends for Sri Lankan clients.",
  },
  {
    year: "2022",
    title: "Founded Team DeathLegionLK",
    org: "DeathLegionLK",
    desc: "Built the team around a shared interest in dev and gaming. Grew from 2 people to an active group shipping projects together.",
  },
  {
    year: "2023 — Present",
    title: "Full stack developer",
    org: "Freelance & Team Projects",
    desc: "Larger client projects, internal team tools, and open source work. Currently focused on Node.js backends and React frontends.",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="font-space-mono text-accent text-xs mb-4">
            05 / Experience
          </div>
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            How I got here
          </h2>
        </div>

        <div className="max-w-2xl space-y-0">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`relative pl-8 pb-10 last:pb-0 reveal reveal-delay-${
                i + 1
              } ${isVisible ? "is-visible" : ""}`}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-1.5 bottom-0 w-px bg-border last:bg-transparent" />
              {/* Dot */}
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-accent bg-background" />

              {/* Content */}
              <div className="font-space-mono text-xs text-accent mb-1">
                {item.year}
              </div>
              <h3 className="font-syne font-semibold text-foreground text-lg leading-tight mb-0.5">
                {item.title}
              </h3>
              <div className="font-dm-sans text-sm text-muted-foreground/70 mb-2">
                {item.org}
              </div>
              <p className="font-dm-sans text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

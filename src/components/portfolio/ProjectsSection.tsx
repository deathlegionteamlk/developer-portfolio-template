import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const PROJECTS = [
  {
    name: "Legion Portal",
    description:
      "Team management dashboard for DeathLegionLK. Handles member tracking, project assignments, and internal announcements. Built when a Discord server stopped being enough.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    status: "In use",
    github: "#",
    demo: "#",
  },
  {
    name: "HexAuth",
    description:
      "Authentication middleware for Node.js. Wraps JWT, refresh tokens, and session management into a single module. Works with Express out of the box, easy to adapt elsewhere.",
    tech: ["Node.js", "TypeScript", "Redis", "JWT"],
    status: "Open source",
    github: "#",
    demo: null,
  },
  {
    name: "StackTrace CLI",
    description:
      "Command-line scaffolding tool for starting Node.js and React projects. Generates folder structure, installs common deps, and sets up ESLint / Prettier in under 10 seconds.",
    tech: ["Node.js", "Commander.js", "TypeScript"],
    status: "Open source",
    github: "#",
    demo: null,
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="font-space-mono text-accent text-xs mb-4">
            03 / Projects
          </div>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Things I've built
            </h2>
            <a
              href="https://github.com/Enuzna"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-sm text-muted-foreground hover:text-accent transition-colors hidden md:flex items-center gap-1.5"
            >
              <Github size={14} />
              All on GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className={`portfolio-card rounded-lg p-6 flex flex-col reveal reveal-delay-${i + 1} ${
                isVisible ? "is-visible" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-syne font-semibold text-lg text-foreground mb-1">
                    {project.name}
                  </h3>
                  <span className="font-space-mono text-xs text-accent">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="font-dm-sans text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-space-mono text-xs text-muted-foreground/70 bg-secondary px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

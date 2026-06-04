import { ArrowDown, Github, ExternalLink, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 hero-glow" />

      {/* Top-right terminal badge */}
      <div className="absolute top-24 right-6 md:right-12 flex items-center gap-2 font-space-mono text-xs text-muted-foreground border border-border rounded px-3 py-1.5 bg-card/60 backdrop-blur-sm">
        <Terminal size={12} className="text-accent" />
        <span>node v20 · react v18</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Status pill */}
        <div className="font-space-mono text-accent text-xs mb-6 flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 bg-accent/5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="font-syne font-extrabold text-[clamp(4rem,14vw,10rem)] leading-none tracking-tight text-foreground mb-2">
          NICK
        </h1>

        {/* Aliases */}
        <div className="font-space-mono text-muted-foreground text-sm mb-8 flex items-center gap-3">
          <span className="text-accent/70">// Enuzna</span>
          <span className="text-border">·</span>
          <span className="text-accent/70">// Hexa</span>
        </div>

        {/* Role */}
        <p className="font-syne font-semibold text-xl md:text-2xl text-foreground/80 mb-6 tracking-wide">
          Full Stack Developer
        </p>

        {/* Tagline */}
        <p className="font-dm-sans text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed mb-10">
          I build web applications end to end. Backend infrastructure, databases, and the UI users actually interact with.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <a
            href="#projects"
            className="font-dm-sans font-medium px-6 py-2.5 rounded bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-sm flex items-center gap-2"
          >
            <ExternalLink size={14} />
            View projects
          </a>
          <a
            href="#contact"
            className="font-dm-sans font-medium px-6 py-2.5 rounded border border-border text-foreground hover:border-accent/50 transition-all duration-200 text-sm"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/Enuzna"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2 text-xs font-space-mono"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-space-mono text-xs text-muted-foreground">
          Nick ·{" "}
          <span className="text-accent">Enuzna</span> ·{" "}
          <span className="text-accent">Hexa</span>
        </div>
        <div className="font-dm-sans text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} DeathLegionLK. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-cream/85 border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream text-xs font-sans">
            HU
          </span>
          <span className="hidden sm:inline">Hossain Ucchas</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    isActive
                      ? "text-deep-sage bg-sage/15"
                      : "text-charcoal hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay/90"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-hairline bg-cream">
          <ul className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-charcoal hover:bg-sage/15 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-cream"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

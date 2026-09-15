import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { n: "5+", l: "Years in Talent Acquisition" },
  { n: "Global", l: "Teams Hired For" },
  { n: "AI", l: "Enhanced Sourcing" },
  { n: "360°", l: "Full-Cycle Recruitment" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sage/25 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-12 md:gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-cream/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-deep-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Talent Acquisition & Global HR
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              I find the right person{" "}
              <span className="italic text-deep-sage">before the role</span> even feels urgent.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal md:text-lg">
              Senior Talent Acquisition Specialist with 5+ years of full-cycle recruitment
              experience, currently driving global hiring at Bevy Commerce. AI-enhanced
              sourcing, honest candidate matching, and hires that last.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay/90"
              >
                Let's Talk <ArrowRight size={16} />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-transparent px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-cream"
              >
                View Experience
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-sage via-deep-sage to-ink shadow-[0_20px_60px_-20px_rgba(32,41,58,0.35)] grid place-items-center overflow-hidden">
                <span className="font-serif text-7xl text-cream md:text-8xl">HU</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-cream border border-hairline px-4 py-2 shadow-sm">
                <MapPin size={14} className="text-clay" />
                <span className="text-xs font-medium text-ink">Dhaka, Bangladesh</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-hairline pt-8">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl md:text-4xl text-clay">{s.n}</div>
                <div className="mt-1 text-xs md:text-sm text-charcoal">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

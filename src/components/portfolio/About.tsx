import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-sage">
            About
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink max-w-2xl">
            Recruitment, done with intention.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-3xl border border-hairline bg-cream p-8 md:p-12 shadow-[0_10px_40px_-24px_rgba(32,41,58,0.25)]">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 md:gap-14">
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-charcoal">
                <p>
                  I'm a senior recruitment professional with over five years of experience
                  in strategic human resource planning and corporate recruiting — always
                  focused on the right fit, for the company and the candidate.
                </p>
                <p>
                  I hold an advanced diploma in HR Management and have trained as an AI
                  Generalist, blending traditional recruiting expertise with modern
                  AI-powered sourcing tools.
                </p>
                <p>
                  The goal is simple: build hiring pipelines that hold up under pressure,
                  and help teams grow with people who stay.
                </p>
              </div>

              <aside className="rounded-2xl border border-sage/40 bg-sand/70 p-6 md:p-7">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-deep-sage">
                  Currently Hiring For
                </div>
                <ul className="mt-4 space-y-2.5 text-ink">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                    Senior Shopify Engineers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                    SEO Managers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                    QA Engineers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                    Project Managers
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-deep-sage hover:text-ink transition-colors"
                >
                  Refer a candidate <ArrowRight size={14} />
                </a>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

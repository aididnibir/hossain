import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-20 md:py-28 border-t border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-sage">
            Education & Certifications
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink max-w-2xl">
            Foundations, and staying current.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={80}>
            <div className="rounded-3xl border border-hairline bg-cream p-8 h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage/25 text-deep-sage">
                  <GraduationCap size={18} />
                </span>
                <h3 className="font-serif text-xl text-ink">Education</h3>
              </div>
              <div className="mt-6">
                <div className="font-medium text-ink">Khulna University</div>
                <div className="text-sm text-charcoal mt-1">Master's Degree · 2021</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-hairline bg-cream p-8 h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-clay/20 text-clay">
                  <Award size={18} />
                </span>
                <h3 className="font-serif text-xl text-ink">Licenses & Certifications</h3>
              </div>
              <ul className="mt-6 space-y-4">
                <li>
                  <div className="font-medium text-ink">IELTS</div>
                  <div className="text-sm text-charcoal mt-0.5">British Council</div>
                </li>
                <li>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-ink">Generative AI MasterMind</div>
                      <div className="text-sm text-charcoal mt-0.5">
                        Outskill — AI Strategist, AI for Design + 1 skill
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-sage/20 px-2.5 py-1 text-xs font-medium text-deep-sage shrink-0">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

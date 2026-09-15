import { Reveal } from "./Reveal";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Talent Acquisition & Sourcing",
    items: [
      "Global Talent Acquisition",
      "Boolean & X-Ray Searching",
      "Strategic Sourcing",
      "Global Sourcing",
      "Sourcing",
      "Corporate Recruiting",
      "Technical Recruiting",
    ],
  },
  {
    title: "Process & Strategy",
    items: [
      "Stakeholder Collaboration",
      "Strategic Human Resource Planning",
      "Recruitment Analytics",
      "DEI Initiative Implementation",
      "Interview Preparation",
      "Mock Interviews",
      "Interviewing",
      "Employer Branding",
      "Onboarding",
    ],
  },
  {
    title: "AI & Modern HR Tools",
    items: [
      "AI Strategist",
      "AI Agents",
      "Artificial Intelligence for Design",
      "AI-Enhanced Talent Acquisition",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-sage">
            Skills
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink max-w-2xl">
            A recruiter's toolkit, thoughtfully applied.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div>
                <h3 className="font-serif text-lg text-ink">{g.title}</h3>
                <div className="mt-2 h-px w-10 bg-clay" />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block rounded-full border border-sage/60 bg-cream px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:bg-deep-sage hover:border-deep-sage hover:text-cream cursor-default">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

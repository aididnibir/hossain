import { Reveal } from "./Reveal";

type Role = {
  title: string;
  company: string;
  dates: string;
  duration: string;
  location?: string;
  description?: string;
  bevy?: boolean;
};

const ROLES: Role[] = [
  {
    title: "Senior Talent Acquisition Specialist",
    company: "Bevy Commerce",
    dates: "May 2025 – Present",
    duration: "1 yr 3 mos",
    description:
      "Partnering with hiring managers and leadership to align workforce planning with business goals, delivering timely, quality hiring across global teams.",
    bevy: true,
  },
  {
    title: "Technical Recruiter",
    company: "Bevy Commerce",
    dates: "Feb 2022 – May 2025",
    duration: "3 yrs 4 mos",
    location: "Toronto, Ontario, Canada",
    description:
      "Owned full-cycle technical recruitment — sourcing through offer close — for engineering and product roles.",
    bevy: true,
  },
  {
    title: "HR & Admin Officer",
    company: "Rose Valley International School, Khulna",
    dates: "Nov 2021 – Feb 2022",
    duration: "4 mos",
    location: "Hybrid",
  },
  {
    title: "HR Associate",
    company: "HR HelpLine BD",
    dates: "May 2021 – Nov 2021",
    duration: "7 mos",
    description: "Focused on interview preparation and candidate sourcing.",
  },
  {
    title: "Human Resources Assistant",
    company: "GAOTek Inc.",
    dates: "Feb 2021 – May 2021",
    duration: "4 mos",
    description: "Supported onboarding, interviewing, and employer branding initiatives.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-cream/60 py-20 md:py-28 border-y border-hairline"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-sage">
            Experience
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink max-w-2xl">
            Five years of pipelines built with care.
          </h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-sage/50" aria-hidden />

          <ul className="space-y-8">
            {ROLES.map((role, i) => (
              <Reveal key={i} delay={i * 60} as="li">
                <div className="relative pl-12 md:pl-20">
                  <span className="absolute left-4 md:left-6 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-clay ring-4 ring-sand" />
                  <div className="rounded-2xl border border-hairline bg-cream p-6 md:p-7 shadow-[0_8px_28px_-20px_rgba(32,41,58,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sage/60">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-serif text-xl md:text-2xl text-ink">
                          {role.title}
                        </h3>
                        <div className="mt-1 text-sm font-medium text-deep-sage">
                          {role.company}
                        </div>
                      </div>
                      <div className="text-right text-xs md:text-sm text-charcoal shrink-0">
                        <div>{role.dates}</div>
                        <div className="text-charcoal/70">{role.duration}</div>
                      </div>
                    </div>
                    {role.location && (
                      <div className="mt-2 text-xs text-charcoal/80">{role.location}</div>
                    )}
                    {role.description && (
                      <p className="mt-4 text-sm md:text-base leading-relaxed text-charcoal">
                        {role.description}
                      </p>
                    )}
                    {role.bevy && (
                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-deep-sage">
                        <span className="h-1.5 w-1.5 rounded-full bg-deep-sage" />
                        4 yrs 6 mos total tenure at Bevy Commerce
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

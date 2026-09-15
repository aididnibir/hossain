import { Mail, Phone, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ROWS = [
  { icon: Mail, label: "Email", value: "wahid.hossain@bevycommerce.com", href: "mailto:wahid.hossain@bevycommerce.com" },
  { icon: Phone, label: "WhatsApp / Call", value: "+880 1318 49 21 22", href: "tel:+8801318492122" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hossain-ucchas-0a78552a7", href: "https://linkedin.com/in/hossain-ucchas-0a78552a7" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl max-w-3xl">
            Hiring, or looking to hire? Let's talk.
          </h2>
          <p className="mt-5 max-w-xl text-cream/75 md:text-lg">
            Open to discussing Talent Acquisition opportunities, hiring partnerships, and
            referrals across global markets.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal delay={100}>
            <ul className="space-y-5">
              {ROWS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-sage shrink-0">
                      <Icon size={16} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-cream/50">
                        {label}
                      </div>
                      <div className="mt-0.5 text-cream truncate">{value}</div>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block group hover:text-sage transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-3xl border border-cream/15 bg-cream/[0.04] p-8 md:p-10">
              <h3 className="font-serif text-xl">Start a conversation</h3>
              <p className="mt-2 text-sm text-cream/70">
                A quick note about the role, team, or candidate goes a long way.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:wahid.hossain@bevycommerce.com"
                  className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay/90"
                >
                  Send an Email <ArrowRight size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/hossain-ucchas-0a78552a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-cream/60"
                >
                  Message on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 text-xs text-cream/50">
          © 2026 Hossain Ucchas. Built with intention.
        </div>
      </div>
    </section>
  );
}

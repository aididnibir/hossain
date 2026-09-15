import { useEffect, useState } from "react";
import {
  Users,
  Target,
  Sparkles,
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Copy,
  Check,
  X,
  CreditCard,
  Send,
  Loader2,
} from "lucide-react";
import { Reveal } from "./Reveal";

const CAL_URL = "https://cal.com/wahid-hossain-ucchas-xi6e78";
const PAY_NUMBER = "01938130747";
const FORMSPREE_URL = "https://formspree.io/f/xeeyljaq";

const SERVICES = [
  {
    icon: Target,
    title: "Full-Cycle Recruitment",
    desc: "From role scoping to offer close — pipelines built with intention, not spray-and-pray.",
    tag: "Most booked",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Sourcing",
    desc: "Modern sourcing workflows with AI copilots — faster shortlists, better signal, less noise.",
  },
  {
    icon: Users,
    title: "HR Setup & Process Design",
    desc: "Onboarding, interview loops, and hiring rubrics tailored to small and mid-size teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Interview & Career Coaching",
    desc: "One-on-one prep for candidates — resume, positioning, and interview craft.",
  },
];

type Step = 1 | 2 | 3;

export function Services() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [copied, setCopied] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    txn: "",
    method: "bKash",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const openFlow = () => {
    setStep(1);
    setSubmitted(false);
    setSubmitError(null);
    setOpen(true);
  };
  const closeFlow = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFlow();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PAY_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    else if (form.name.trim().length > 100) e.name = "Too long";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    else if (!/^[0-9+\-\s()]{6,20}$/.test(form.phone.trim()))
      e.phone = "Invalid phone";
    if (!form.txn.trim()) e.txn = "Required";
    else if (form.txn.trim().length > 60) e.txn = "Too long";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          payment_method: form.method,
          transaction_id: form.txn.trim(),
          _subject: `Consultation payment confirmation — ${form.name.trim()}`,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (err) {
      setSubmitError("Couldn't send. Please try again or WhatsApp Wahid.");
    } finally {
      setSubmitting(false);
    }
  };

  const stepLabels = ["Book a slot", "Payment", "Confirm"];

  return (
    <section
      id="services"
      className="scroll-mt-20 relative overflow-hidden bg-sand py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-clay/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-sage">
                HR Consultancy
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-5xl text-ink max-w-2xl">
                Hire smarter.{" "}
                <span className="italic text-deep-sage">Book a 15-min call.</span>
              </h2>
              <p className="mt-4 max-w-xl text-charcoal md:text-lg">
                Independent HR consultancy for founders, hiring managers, and
                candidates. Practical, honest, and shaped by 5+ years in global
                talent acquisition.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-hairline bg-cream/70 px-4 py-2 text-xs text-charcoal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
              </span>
              Accepting new clients this month
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-hairline bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-[0_20px_50px_-25px_rgba(32,41,58,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sage/20 text-deep-sage transition-colors group-hover:bg-clay group-hover:text-cream">
                    <s.icon size={20} />
                  </span>
                  {s.tag && (
                    <span className="rounded-full bg-clay/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-clay">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 relative overflow-hidden rounded-3xl border border-ink/10 bg-ink text-cream p-8 md:p-12">
            <div
              className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-clay/30 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
              aria-hidden
            />
            <div className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-3 py-1 text-[11px] uppercase tracking-widest text-sage">
                  <Calendar size={12} /> 15-min consultation
                </span>
                <h3 className="mt-5 font-serif text-2xl md:text-4xl leading-tight">
                  Bring me your hardest hire —
                  <br className="hidden md:block" />
                  <span className="italic text-sage"> let's map it out.</span>
                </h3>
                <p className="mt-4 max-w-lg text-cream/75">
                  Three simple steps — pick a slot, send payment, and confirm.
                  No pitch decks, no fluff.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openFlow}
                    className="group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay/90"
                  >
                    <Calendar size={16} />
                    Book a Call
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/60">
                  <li className="flex items-center gap-1.5">
                    <Check size={12} className="text-sage" /> Free discovery
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={12} className="text-sage" /> bKash & Nagad accepted
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={12} className="text-sage" /> Global time zones
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="rounded-2xl border border-cream/15 bg-cream/[0.06] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs text-cream/60">
                    <span>3-step booking</span>
                    <span className="flex items-center gap-1 text-sage">
                      <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Live
                    </span>
                  </div>
                  <ol className="mt-4 space-y-3">
                    {[
                      { icon: Calendar, label: "Pick a slot on Cal.com" },
                      { icon: CreditCard, label: "Send payment via bKash / Nagad" },
                      { icon: Send, label: "Confirm with transaction ID" },
                    ].map((row, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-clay/20 text-clay text-xs font-medium">
                          {i + 1}
                        </span>
                        <span className="flex items-center gap-2 text-sm text-cream/85">
                          <row.icon size={14} className="text-sage" />
                          {row.label}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <button
                    type="button"
                    onClick={openFlow}
                    className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg bg-cream text-ink py-2 text-xs font-medium transition-colors hover:bg-cream/90"
                  >
                    Start booking <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a consultation"
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={closeFlow}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <div className="relative flex w-full max-w-3xl max-h-[92vh] flex-col overflow-hidden rounded-2xl border border-hairline bg-cream shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream">
                  {step === 1 ? (
                    <Calendar size={16} />
                  ) : step === 2 ? (
                    <CreditCard size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-charcoal/70">
                    Step {step} of 3
                  </div>
                  <div className="font-serif text-lg text-ink leading-tight">
                    {stepLabels[step - 1]}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={closeFlow}
                className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-charcoal hover:text-ink"
                aria-label="Close dialog"
              >
                <X size={16} />
              </button>
            </div>

            {/* Stepper */}
            <div className="flex items-center gap-2 px-5 sm:px-6 py-3 border-b border-hairline bg-sand/60">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex flex-1 items-center gap-2">
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-medium ${
                      step >= (n as Step)
                        ? "bg-clay text-cream"
                        : "bg-hairline text-charcoal"
                    }`}
                  >
                    {step > (n as Step) ? <Check size={12} /> : n}
                  </span>
                  <span
                    className={`text-xs ${
                      step === (n as Step)
                        ? "text-ink font-medium"
                        : "text-charcoal/70"
                    }`}
                  >
                    {stepLabels[n - 1]}
                  </span>
                  {n < 3 && (
                    <span className="flex-1 h-px bg-hairline mx-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              {step === 1 && (
                <div className="p-0">
                  <div className="aspect-[4/5] sm:aspect-[16/11] w-full bg-cream">
                    <iframe
                      src={CAL_URL}
                      title="Book a slot with Wahid Hossain Ucchas"
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t border-hairline px-5 sm:px-6 py-3 flex items-center justify-between gap-3 text-xs text-charcoal">
                    <span>Once your slot is confirmed on Cal.com, continue to payment.</span>
                    <a
                      href={CAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-deep-sage hover:text-ink underline underline-offset-2 whitespace-nowrap"
                    >
                      Open in new tab <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="p-5 sm:p-6">
                  <p className="text-sm text-charcoal">
                    Send the consultation fee to the number below (Personal) via
                    bKash or Nagad. Save the transaction ID — you'll need it in
                    the next step.
                  </p>

                  <div className="mt-4 rounded-xl border border-hairline bg-sand p-4">
                    <div className="text-[11px] uppercase tracking-widest text-charcoal/70">
                      Mobile number
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <span className="font-serif text-2xl text-ink tracking-wide">
                        {PAY_NUMBER}
                      </span>
                      <button
                        type="button"
                        onClick={copyNumber}
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-cream hover:bg-ink/90"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-hairline bg-cream p-4 text-center">
                      <div className="text-[11px] uppercase tracking-widest text-charcoal/70">
                        bKash
                      </div>
                      <div className="mt-1 font-medium text-ink">Personal</div>
                    </div>
                    <div className="rounded-xl border border-hairline bg-cream p-4 text-center">
                      <div className="text-[11px] uppercase tracking-widest text-charcoal/70">
                        Nagad
                      </div>
                      <div className="mt-1 font-medium text-ink">Personal</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5 text-xs text-charcoal">
                    <li className="flex items-start gap-2">
                      <Check size={12} className="mt-0.5 text-deep-sage" />
                      Use the "Send Money" option (Personal).
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={12} className="mt-0.5 text-deep-sage" />
                      Keep the TrxID / Transaction number handy.
                    </li>
                  </ul>
                </div>
              )}

              {step === 3 && (
                <div className="p-5 sm:p-6">
                  {submitted ? (
                    <div className="text-center py-8">
                      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage/20 text-deep-sage">
                        <Check size={22} />
                      </span>
                      <h4 className="mt-4 font-serif text-2xl text-ink">
                        Confirmation sent!
                      </h4>
                      <p className="mt-2 text-sm text-charcoal max-w-md mx-auto">
                        Wahid has received your payment details and will reach
                        out shortly to confirm your consultation.
                      </p>
                      <button
                        type="button"
                        onClick={closeFlow}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream hover:bg-ink/90"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4" noValidate>
                      <p className="text-sm text-charcoal">
                        Share your payment details so Wahid can confirm your
                        booking.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field
                          label="Full name"
                          error={errors.name}
                          input={
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              maxLength={100}
                              className="input-base"
                              placeholder="Your name"
                              required
                            />
                          }
                        />
                        <Field
                          label="Email"
                          error={errors.email}
                          input={
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              maxLength={255}
                              className="input-base"
                              placeholder="you@example.com"
                              required
                            />
                          }
                        />
                        <Field
                          label="Phone"
                          error={errors.phone}
                          input={
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              maxLength={20}
                              className="input-base"
                              placeholder="01xxxxxxxxx"
                              required
                            />
                          }
                        />
                        <Field
                          label="Payment method"
                          input={
                            <select
                              value={form.method}
                              onChange={(e) =>
                                setForm({ ...form, method: e.target.value })
                              }
                              className="input-base"
                            >
                              <option>bKash</option>
                              <option>Nagad</option>
                            </select>
                          }
                        />
                      </div>

                      <Field
                        label="Transaction ID (TrxID)"
                        error={errors.txn}
                        input={
                          <input
                            type="text"
                            value={form.txn}
                            onChange={(e) =>
                              setForm({ ...form, txn: e.target.value })
                            }
                            maxLength={60}
                            className="input-base"
                            placeholder="e.g. 8N7A2B1C9D"
                            required
                          />
                        }
                      />

                      {submitError && (
                        <div className="rounded-lg border border-clay/40 bg-clay/10 px-3 py-2 text-sm text-clay">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream hover:bg-clay/90 disabled:opacity-70"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send confirmation
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Footer nav */}
            {!(step === 3 && submitted) && (
              <div className="flex items-center justify-between gap-3 border-t border-hairline bg-sand/60 px-5 sm:px-6 py-3">
                <button
                  type="button"
                  onClick={() =>
                    step > 1 ? setStep(((step - 1) as Step)) : closeFlow()
                  }
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-cream px-4 py-2 text-xs font-medium text-charcoal hover:text-ink"
                >
                  <ArrowLeft size={14} />
                  {step === 1 ? "Cancel" : "Back"}
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(((step + 1) as Step))}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-xs font-medium text-cream hover:bg-ink/90"
                  >
                    {step === 1 ? "I've booked — continue" : "I've paid — confirm"}
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <span className="text-[11px] text-charcoal/70">
                    Secure form — details go straight to Wahid.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-widest text-charcoal/70">
        {label}
      </span>
      <div className="mt-1">{input}</div>
      {error && (
        <span className="mt-1 block text-[11px] text-clay">{error}</span>
      )}
    </label>
  );
}

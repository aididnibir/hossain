import { createFileRoute } from "@tanstack/react-router";
import { StickyNav } from "@/components/portfolio/StickyNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";

const TITLE = "Hossain Ucchas — Senior Talent Acquisition Specialist";
const DESCRIPTION =
  "Senior Talent Acquisition & HR professional with 5+ years of full-cycle recruitment experience. AI-enhanced sourcing, honest candidate matching, hires that last.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <StickyNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

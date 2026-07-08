import {
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Microscope,
  Rocket,
  ShieldCheck,
  Target,
  Users
} from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { CourseworkEvidence } from "@/components/CourseworkEvidence";
import { DigitalTreeHero } from "@/components/DigitalTreeHero";
import { FinanceSection } from "@/components/FinanceSection";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/GlowCard";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionShell } from "@/components/SectionShell";
import { WritingCard } from "@/components/WritingCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { writing } from "@/data/writing";

const researchThemes = [
  "Nested sampling",
  "Uncertainty quantification",
  "Statistical modelling",
  "Machine learning",
  "Decision-making under uncertainty",
  "Rigorous explanation"
];

const aiThemes = [
  "Agentic workflows",
  "AI-assisted development",
  "Research-to-product thinking",
  "Useful automation",
  "Strategic prototyping",
  "Systems that solve real problems"
];

const analyticsThemes = [
  "Messy real-world data",
  "Statistical modelling",
  "Dashboards",
  "Decision intelligence",
  "Customer analytics",
  "Insight communication"
];

function ThemeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const aboutIcons = [GraduationCap, Layers3, Brain, Users];

  return (
    <>
      <Navigation />
      <main>
        <DigitalTreeHero />

        <SectionShell
          id="about"
          eyebrow="About"
          title="A profile for people deciding whether to hire, back, or build with me."
          intro={profile.aboutLead}
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <GlowCard>
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-gold/25 bg-gold/10 text-gold">
                  <Target size={21} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    The thesis
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-8 text-white">
                    Quantitative depth, builder range, and clear judgement.
                  </h3>
                  <p className="mt-4 text-pretty text-base leading-8 text-slate-300">
                    {profile.aboutThesis}
                  </p>
                </div>
              </div>
            </GlowCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {profile.credibilitySignals.map((signal, index) => {
                const Icon = aboutIcons[index] ?? CheckCircle2;
                return (
                  <GlowCard key={signal.title}>
                    <Icon size={24} className="text-cyan" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold text-white">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{signal.text}</p>
                  </GlowCard>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {profile.evaluationFit.map((fit) => (
              <GlowCard key={fit.title}>
                <h3 className="text-lg font-semibold text-white">{fit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{fit.text}</p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlowCard>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Operating philosophy
              </p>
              <p className="mt-3 text-xl font-semibold leading-8 text-white">
                {profile.philosophy}
              </p>
            </GlowCard>

            <GlowCard>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.capabilityGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{group.text}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.principles.map((principle) => (
              <span
                key={principle}
                className="rounded-md border border-cyan/15 bg-cyan/[0.045] px-3 py-2 text-sm text-slate-300"
              >
                {principle}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <CourseworkEvidence
              title="MMORSE evidence map"
              intro="A compact map of the Warwick modules behind the claims on this site: finance, statistics, machine learning, stochastic processes, optimisation, economics, and communication. It is evidence of formal preparation, not a claim of mastery in every area."
            />
          </div>
        </SectionShell>

        <SectionShell
          id="projects"
          eyebrow="Projects"
          title="Proof-of-work across AI, analytics, research, finance, and identity."
          intro="The project layer is built to be filled with stronger evidence over time: links, demos, screenshots, methods, results, and honest limitations."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="research"
          eyebrow="Research"
          title="Rigorous technical work, explained without hiding the assumptions."
          intro="The research section is for statistical modelling, uncertainty, nested sampling, and technical explanation that remains accessible to the right audience."
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlowCard>
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
                  <Microscope size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Research direction</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    The emphasis is not just technical difficulty. It is careful reasoning:
                    assumptions, uncertainty, robustness, and the ability to communicate what a
                    result actually means.
                  </p>
                </div>
              </div>
            </GlowCard>
            <GlowCard>
              <ThemeList items={researchThemes} />
            </GlowCard>
          </div>

          <div className="mt-8">
            <CourseworkEvidence
              clusterIds={["statistics-inference", "stochastic-probability"]}
              title="Research and uncertainty foundations"
              intro="Relevant coursework behind the research layer: applied modelling, Bayesian reasoning, probability, stochastic processes, Monte Carlo methods, and time-series thinking."
              compact
            />
          </div>
        </SectionShell>

        <SectionShell
          id="ai-startups"
          eyebrow="AI and startups"
          title="Applied AI, agentic systems, and the path from idea to useful product."
          intro="This section positions AI as a practical systems layer: useful automation, sharper research, faster prototyping, and better products."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <GlowCard className="lg:col-span-2">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-mint/25 bg-mint/10 text-mint">
                  <Rocket size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Builder-oriented AI</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    The focus is on systems that reduce friction and solve real problems: agent
                    workflows, applied AI prototypes, research-to-product thinking, and automation
                    that earns its place by being useful.
                  </p>
                </div>
              </div>
            </GlowCard>
            <GlowCard>
              <ThemeList items={aiThemes} />
            </GlowCard>
          </div>

          <div className="mt-8">
            <CourseworkEvidence
              clusterIds={["machine-learning-data", "foundations-optimisation"]}
              title="Technical preparation for AI systems"
              intro="The AI and startup layer is supported by formal work in statistical learning, machine learning frameworks, programming, visual communication, optimisation, game-theoretic decision-making, and mathematical foundations."
              compact
            />
          </div>
        </SectionShell>

        <FinanceSection />

        <SectionShell
          id="data"
          eyebrow="Data and analytics"
          title="Turning messy information into useful decisions."
          intro="The data layer is where statistical reasoning, business context, dashboards, and communication meet. The point is not just analysis, but better action."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <GlowCard>
              <Brain size={28} className="text-cyan" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Model-aware analysis</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Separate facts, assumptions, noise, and uncertainty so the output survives contact
                with reality.
              </p>
            </GlowCard>
            <GlowCard>
              <BarChart3 size={28} className="text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Decision dashboards</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Use visuals to improve understanding, not decorate weak analysis.
              </p>
            </GlowCard>
            <GlowCard>
              <ShieldCheck size={28} className="text-mint" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Practical credibility</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Make data quality, limitations, and trade-offs clear enough for real decisions.
              </p>
            </GlowCard>
          </div>
          <div className="mt-6">
            <GlowCard>
              <ThemeList items={analyticsThemes} />
            </GlowCard>
          </div>

          <div className="mt-8">
            <CourseworkEvidence
              clusterIds={["machine-learning-data", "statistics-inference"]}
              title="Data analysis stream evidence"
              intro="Coursework that supports analytics and decision intelligence claims: statistical modelling, GLMs, Bayesian methods, machine learning, Python, R, visualisation, and communication."
              compact
            />
          </div>
        </SectionShell>

        <SectionShell
          id="writing"
          eyebrow="Writing and notes"
          title="A future library for clear explanations and technical notes."
          intro="This section is ready for essays, explainers, research notes, and public thinking across statistics, AI, finance, startups, and decision-making."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {writing.map((item) => (
              <WritingCard key={item.title} item={item} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Connect, collaborate, or explore useful work together."
          intro="The contact layer is intentionally clean. LinkedIn and GitHub are attached; public email and CV can be added when ready."
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <GlowCard>
              <BriefcaseBusiness size={28} className="text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">Best fit conversations</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Career opportunities, research or analytics work, AI systems, product strategy,
                finance reasoning, and difficult problems that need clear thinking and execution.
              </p>
            </GlowCard>
            <ContactPanel />
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}

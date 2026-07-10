import {
  Bot,
  BrainCircuit,
  ChartSpline,
  DatabaseZap,
  FileChartColumnIncreasing,
  MessageSquareText
} from "lucide-react";
import { FinanceSection } from "@/components/FinanceSection";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

const capabilityIcons = [
  BrainCircuit,
  ChartSpline,
  Bot,
  FileChartColumnIncreasing,
  DatabaseZap,
  MessageSquareText
];

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      number="02"
      title="What I can build"
      intro="The practical outputs behind the labels: analytical products, AI workflows, simulations, and explanations that improve a real decision."
      className="capabilities-section"
    >
      <div className="capability-path">
        <div className="capability-path-line" aria-hidden="true" />
        {profile.capabilities.map((capability, index) => {
          const Icon = capabilityIcons[index] ?? BrainCircuit;
          return (
            <article key={capability.id} className="capability-item">
              <div className="capability-icon"><Icon size={20} aria-hidden="true" /></div>
              <h3>{capability.title}</h3>
              <p>{capability.outcome}</p>
            </article>
          );
        })}
      </div>

      <FinanceSection />
    </SectionShell>
  );
}

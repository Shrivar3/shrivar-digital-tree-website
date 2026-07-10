import {
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  Landmark,
  Scale,
  Sigma
} from "lucide-react";
import { CourseworkEvidence } from "@/components/CourseworkEvidence";
import { SectionShell } from "@/components/SectionShell";
import { profile } from "@/data/profile";

const foundationIcons = [ChartNoAxesCombined, BrainCircuit, Landmark, Scale, Code2];

export function FoundationSection() {
  return (
    <SectionShell
      id="foundation"
      number="04"
      title="Quantitative and professional foundation"
      intro={profile.foundationLead}
      className="foundation-section"
    >
      <div className="foundation-timeline">
        <article className="foundation-milestone">
          <span className="milestone-icon"><GraduationCap size={25} aria-hidden="true" /></span>
          <div>
            <p className="micro-label">Formal foundation</p>
            <h3>{profile.education.institution} — {profile.education.programme}</h3>
            <strong>{profile.education.stream}</strong>
            <p>{profile.education.summary}</p>
          </div>
        </article>

        <div className="foundation-connector" aria-hidden="true"><i /><i /><i /></div>

        <article className="foundation-milestone">
          <span className="milestone-icon"><BriefcaseBusiness size={24} aria-hidden="true" /></span>
          <div>
            <p className="micro-label">Professional context</p>
            <h3>{profile.experience.organisation}</h3>
            <strong>{profile.experience.area}</strong>
            <p>{profile.experience.summary}</p>
          </div>
        </article>
      </div>

      <div className="foundation-areas">
        {profile.foundationAreas.map((area, index) => {
          const Icon = foundationIcons[index] ?? Sigma;
          return (
            <article key={area.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          );
        })}
      </div>

      <CourseworkEvidence />
    </SectionShell>
  );
}

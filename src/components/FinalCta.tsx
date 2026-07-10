import { ContactPanel } from "@/components/ContactPanel";

function ClosingBranch() {
  return (
    <svg viewBox="0 0 520 220" aria-hidden="true" className="closing-branch">
      <path d="M16 110 C105 109 161 106 228 110 C300 114 355 91 410 54" className="closing-branch-main" />
      <path d="M228 110 C285 111 340 130 401 164 M286 105 C332 83 372 63 440 51 M330 94 C365 106 410 112 488 102" className="closing-branch-line" />
      <path d="M373 74 C397 53 421 35 457 24 M397 164 C428 169 453 180 487 197 M407 115 C435 135 460 143 505 145" className="closing-branch-twig" />
      {[
        [410, 54], [401, 164], [440, 51], [488, 102], [457, 24], [487, 197], [505, 145]
      ].map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r={index % 3 === 0 ? 4 : 2.5} fill={index % 2 ? "#74a6ff" : "#e7b85f"} />
      ))}
      {Array.from({ length: 32 }, (_, index) => (
        <circle key={index} cx={338 + ((index * 41) % 168)} cy={24 + ((index * 67) % 172)} r="1.2" fill={index % 4 ? "#73e9ff" : "#e7b85f"} opacity="0.48" />
      ))}
    </svg>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="final-cta">
      <div className="site-container final-cta-grid">
        <div className="final-cta-heading">
          <span className="section-index"><span>05</span><span className="section-index-line" /></span>
          <h2>Build, back, or solve something difficult.</h2>
        </div>
        <div className="final-cta-copy">
          <p>
            I&apos;m interested in venture and product conversations, technical collaboration,
            investment discussions, and select career opportunities where quantitative judgement
            and execution both matter.
          </p>
          <ContactPanel />
        </div>
        <ClosingBranch />
      </div>
    </section>
  );
}

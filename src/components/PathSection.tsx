import { CourseworkEvidence } from "@/components/CourseworkEvidence";
import { PhotoReady } from "@/components/PhotoReady";
import { siteContent } from "@/data/content";

export function PathSection() {
  return (
    <section id="path" className="path-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>04</span><i /></div>
      <div className="page-shell path-layout">
        <div className="path-copy">
          <h2>{siteContent.path.title}</h2>
          {siteContent.path.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <CourseworkEvidence />
        </div>
        <PhotoReady
          src={siteContent.photography.work}
          alt="Shrivar Singh presenting, writing or working through a technical problem"
          role="work"
          className="path-photo"
        />
      </div>
      <div className="page-shell path-timeline" aria-label="The path into the work">
        {siteContent.path.moments.map((moment, index) => (
          <div key={moment.label} data-future={index === siteContent.path.moments.length - 1}>
            <i aria-hidden="true" />
            <strong>{moment.label}</strong>
            <span>{moment.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

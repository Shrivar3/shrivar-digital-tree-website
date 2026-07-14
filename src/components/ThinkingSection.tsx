import { siteContent } from "@/data/content";

export function ThinkingSection() {
  return (
    <section id="thinking" className="thinking-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>03</span><i /></div>
      <div className="page-shell thinking-layout">
        <header>
          <p>How I think</p>
          <h2>{siteContent.thinking.title}</h2>
          <span>{siteContent.thinking.body}</span>
        </header>
        <ol className="principle-list">
          {siteContent.thinking.principles.map((principle, index) => (
            <li key={principle.title}>
              <span>0{index + 1}</span>
              <i aria-hidden="true" />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="thinking-root" aria-hidden="true" />
    </section>
  );
}

import { ArrowIcon } from "@/components/ArrowIcon";
import { nowQuestions, siteContent } from "@/data/content";

export function NowSection() {
  return (
    <section id="now" className="now-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>01</span><i /></div>
      <div className="page-shell now-layout">
        <header className="section-intro">
          <p className="section-date">{siteContent.now.date}</p>
          <h2>{siteContent.now.title}</h2>
          <p>{siteContent.now.intro}</p>
        </header>
        <ol className="question-rail">
          {nowQuestions.map((item, index) => (
            <li key={item.id}>
              <a href={item.href} className="focus-ring question-link">
                <span className="question-number">0{index + 1}</span>
                <span className="question-copy">
                  <strong>{item.question}</strong>
                  <small>{item.territory} · {item.context}</small>
                </span>
                <ArrowIcon />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

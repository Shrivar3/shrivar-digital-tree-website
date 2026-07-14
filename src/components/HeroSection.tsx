import { ArrowIcon } from "@/components/ArrowIcon";
import { LivingTree } from "@/components/LivingTree";
import { PhotoReady } from "@/components/PhotoReady";
import { siteContent } from "@/data/content";

export function HeroSection() {
  return (
    <section id="home" className="hero-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>00</span><i /></div>
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <h1>{siteContent.hero.headline}</h1>
          <p>{siteContent.hero.body}</p>
          <div className="hero-actions">
            <a href="#work" className="focus-ring button button-primary">
              {siteContent.hero.primaryCta}<ArrowIcon />
            </a>
            <a href="#now" className="focus-ring button button-quiet">
              {siteContent.hero.secondaryCta}<ArrowIcon direction="down" />
            </a>
          </div>
        </div>
        <div className="hero-media">
          <PhotoReady
            src={siteContent.photography.portrait}
            alt="Shrivar Singh in an environment connected to his work"
            role="portrait"
            priority
            className="hero-photo"
          />
          <LivingTree />
        </div>
      </div>
      <div className="new-growth" aria-hidden="true"><i /><span>new growth</span></div>
    </section>
  );
}

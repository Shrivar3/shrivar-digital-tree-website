import { ArrowIcon } from "@/components/ArrowIcon";
import { PhotoReady } from "@/components/PhotoReady";
import { siteContent } from "@/data/content";
import { contactLinks } from "@/data/links";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section-numbered">
      <div className="coordinate-rail" aria-hidden="true"><span>06</span><i /></div>
      <div className="page-shell contact-layout">
        <div className="contact-copy">
          <h2>{siteContent.contact.title}</h2>
          <p>{siteContent.contact.body}</p>
          <div className="contact-routes">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="focus-ring">
                <span><strong>{link.label}</strong><small>{link.value}</small></span><ArrowIcon />
              </a>
            ))}
          </div>
        </div>
        <PhotoReady
          src={siteContent.photography.life}
          alt="A candid image of Shrivar Singh showing life and energy beyond the screen"
          role="life"
          className="contact-photo"
        />
      </div>
    </section>
  );
}

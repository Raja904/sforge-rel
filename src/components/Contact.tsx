import { SITE_CONFIG } from "@/config/site";

export default function Contact() {
  return (
    <section className="section-contact" id="contact" aria-labelledby="contact-heading">
      <div className="container-lg">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-heading" id="contact-heading">
          Running AI agents in production? Let&rsquo;s talk.
        </h2>
        <p className="section-intro">
          If your team is dealing with agent failures that are hard to diagnose, slow to
          investigate, or keep coming back — we&rsquo;d like to understand your setup and
          show you how SignalsForge AI can help.
        </p>

        <div className="contact-cta-wrapper">
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="btn-primary btn-large contact-main-btn"
            id="contact-email-btn"
            aria-label={`Send an email to ${SITE_CONFIG.contactEmail}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="16" height="12" rx="2" />
              <path d="M2 7l8 5 8-5" />
            </svg>
            Email {SITE_CONFIG.contactEmail}
          </a>
        </div>

        {SITE_CONFIG.linkedinUrl && (
          <div className="contact-social">
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-link"
              className="contact-linkedin-link"
            >
              Connect with us on LinkedIn →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

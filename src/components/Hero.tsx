import { SITE_CONFIG } from "@/config/site";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-headline">
      <div className="container-lg">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          AI Agent Reliability · Built for Production
        </div>

        <h1 className="hero__headline" id="hero-headline">
          Stop guessing why your<br className="hero__br" />
          <em>AI agents are failing.</em>
        </h1>

        <p className="hero__subtext">
          Production AI agents fail across complex chains of LLMs, tools, APIs, and retrieval
          systems. SignalsForge AI connects the evidence — traces, logs, and tool call
          outputs — so your team gets a clear diagnosis, not a debugging marathon.
        </p>

        <div className="hero__actions">
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="btn-primary"
            id="hero-cta-talk"
          >
            Talk to us
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#approach"
            className="btn-ghost"
            id="hero-cta-approach"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="section-about" id="about" aria-labelledby="about-heading">
      <div className="container-lg">
        <p className="section-eyebrow">About SignalsForge AI</p>
        <h2 className="section-heading" id="about-heading">
          Engineering reliable AI agents for teams operating in production.
        </h2>
        <div className="about-content">
          <p className="about-lead">
            SignalsForge AI focuses on one critical problem: making production AI agent failures
            faster to diagnose and impossible to repeat silently.
          </p>
          <p className="about-text">
            As autonomous agents handle more customer-facing workflows, unexpected tool behaviors,
            retrieval drift, and multi-step reasoning breakdowns create severe operational overhead.
            We work directly with engineering teams to turn chaotic debugging sessions into
            structured, reproducible root cause intelligence.
          </p>

          <div className="about-highlights" role="list">
            <div className="about-highlight" role="listitem">
              <div className="about-highlight__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <h3 className="about-highlight__title">Root Cause Over Raw Logs</h3>
              <p className="about-highlight__body">
                We surface the exact tool call or context failure, eliminating hours of manual log inspection.
              </p>
            </div>

            <div className="about-highlight" role="listitem">
              <div className="about-highlight__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <h3 className="about-highlight__title">Deterministic Evidence</h3>
              <p className="about-highlight__body">
                Traces, tool parameters, and schema responses are correlated into a single coherent timeline.
              </p>
            </div>

            <div className="about-highlight" role="listitem">
              <div className="about-highlight__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 11 8 15 16 6" />
                </svg>
              </div>
              <h3 className="about-highlight__title">Continuous Protection</h3>
              <p className="about-highlight__body">
                Every resolved incident is converted into an automated regression test before future releases ship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

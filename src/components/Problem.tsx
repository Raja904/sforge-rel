const problems = [
  {
    id: "scattered-evidence",
    icon: (
      <svg className="problem-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="3" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="15" y="3" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <rect x="8.5" y="15" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M5.5 9v3h13V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Evidence is everywhere — and connected nowhere",
    body: "Failures leave signals across traces, logs, tool calls, API responses, and conversation history. We pull it all into one place so engineers aren't hunting across five dashboards.",
  },
  {
    id: "expensive-investigations",
    icon: (
      <svg className="problem-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <polyline points="12 7 12 12 15.5 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Investigations eat engineering hours",
    body: "Root-causing a single agent failure can take hours of manual log-reading and additional LLM calls. We cut that down by surfacing the most relevant evidence and a reasoned diagnosis directly.",
  },
  {
    id: "recurring-failures",
    icon: (
      <svg className="problem-card__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 12a8 8 0 0 1 14.5-4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <polyline points="18.5 3.5 18.5 7.5 14.5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12a8 8 0 0 1-14.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <polyline points="5.5 20.5 5.5 16.5 9.5 16.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "The same failure comes back",
    body: "Incidents that aren't captured as tests come back — often in a slightly different form. We help teams turn confirmed failures into regression tests before the next deploy ships.",
  },
];

export default function Problem() {
  return (
    <section className="section-problem" id="problem" aria-labelledby="problem-heading">
      <div className="container-lg">
        <p className="section-eyebrow">The problem we solve</p>
        <h2 className="section-heading" id="problem-heading">
          AI agent failures are hard to diagnose. We make them not be.
        </h2>
        <p className="section-intro">
          When autonomous agents fail in production, finding the real cause requires sifting through
          sprawling logs and non-deterministic behavior. We bring clarity to the chaos.
        </p>

        <div className="problem-cards" role="list">
          {problems.map((p) => (
            <div key={p.id} id={p.id} className="problem-card" role="listitem">
              <div className="problem-card__icon-wrap">{p.icon}</div>
              <h3 className="problem-card__title">{p.title}</h3>
              <p className="problem-card__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

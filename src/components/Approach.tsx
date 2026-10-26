const steps = [
  {
    id: "gather-evidence",
    number: "01",
    title: "We gather the evidence",
    body: "SignalsForge pulls in traces, logs, tool results, and expected outcomes — everything relevant to the failure — so engineers don't have to hunt across systems manually.",
  },
  {
    id: "investigate-failure",
    number: "02",
    title: "We diagnose the root cause",
    body: "We identify which step failed, why it failed, and what the supporting evidence says — giving engineers a clear, reasoned answer instead of a list of raw logs to interpret.",
  },
  {
    id: "make-fix-reusable",
    number: "03",
    title: "We turn the fix into a test",
    body: "Once a failure is confirmed, we help convert it into a regression test — so the same issue can't silently ship again in a future release.",
  },
];

export default function Approach() {
  return (
    <section className="section-approach" id="approach" aria-labelledby="approach-heading">
      <div className="container-lg">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-heading" id="approach-heading">
          From failure signal to root cause — in one workflow.
        </h2>
        <p className="section-intro">
          SignalsForge AI handles the investigation so your engineers can focus on the fix.
          Here&rsquo;s how we go from a production failure to a resolved, tested outcome.
        </p>

        {/* Step-flow diagram */}
        <div className="approach-diagram" aria-hidden="true">
          <ApproachDiagram />
        </div>

        {/* Step cards */}
        <div className="approach-steps" role="list">
          {steps.map((step) => (
            <div key={step.id} id={step.id} className="approach-step" role="listitem">
              <div className="approach-step__number" aria-hidden="true">
                {step.number}
              </div>
              <h3 className="approach-step__title">{step.title}</h3>
              <p className="approach-step__body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachDiagram() {
  const nodes = [
    { x: 70, y: 35, label: "Traces" },
    { x: 210, y: 35, label: "Execution Logs" },
    { x: 370, y: 35, label: "Tool Calls" },
    { x: 530, y: 35, label: "Expected Outputs" },
  ];
  const midX = 300;
  const midY = 100;

  return (
    <svg
      viewBox="0 0 600 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {/* Source nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <rect
            x={n.x - 52}
            y={n.y - 14}
            width={104}
            height={28}
            rx={6}
            fill="#ffffff"
            stroke="#dce6f2"
            strokeWidth={1.25}
          />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fill="#071426"
            fontSize={11}
            fontWeight={600}
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {n.label}
          </text>
          <line
            x1={n.x}
            y1={n.y + 14}
            x2={midX}
            y2={midY - 14}
            stroke="#4388f5"
            strokeOpacity={0.35}
            strokeWidth={1.25}
            strokeDasharray="3 3"
          />
        </g>
      ))}

      {/* Center diagnosis node */}
      <rect
        x={midX - 95}
        y={midY - 14}
        width={190}
        height={30}
        rx={6}
        fill="#071426"
        stroke="#4388f5"
        strokeWidth={1.5}
      />
      <text
        x={midX}
        y={midY + 5}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={12}
        fontWeight={700}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Root cause diagnosis
      </text>

      {/* Downward connector */}
      <line
        x1={midX}
        y1={midY + 16}
        x2={midX}
        y2={138}
        stroke="#4388f5"
        strokeOpacity={0.6}
        strokeWidth={1.5}
      />
      <polygon points={`${midX - 4},138 ${midX + 4},138 ${midX},144`} fill="#4388f5" />

      {/* Regression test node */}
      <rect
        x={midX - 80}
        y={145}
        width={160}
        height={24}
        rx={6}
        fill="#ffffff"
        stroke="#4388f5"
        strokeWidth={1.25}
      />
      <text
        x={midX}
        y={161}
        textAnchor="middle"
        fill="#071426"
        fontSize={11}
        fontWeight={600}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Automated regression test
      </text>
    </svg>
  );
}

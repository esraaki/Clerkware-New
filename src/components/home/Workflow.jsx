import { Fragment } from 'react';

const NODES = [
  {
    step: 'Step 01',
    title: 'Resident request',
    body: 'Submitted online, by email, or phone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    step: 'Step 02',
    title: 'Routed to clerk or team',
    body: 'Automatically assigned and tracked.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        <path d="M15 20v-1a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1" />
      </svg>
    ),
  },
  {
    step: 'Step 03',
    title: 'Action taken',
    body: 'Work gets done and updates are logged.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 3v2h4V3" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: 'Step 04',
    title: 'Residents stay informed',
    body: 'Website, alerts, and updates happen automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

const Arrow = () => (
  <span className="wf-arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  </span>
);

export default function Workflow() {
  return (
    <section className="workflow-section" data-reveal-section>
      <div className="container-wide">
        <div className="wf-layout">
          <div className="sec-head wf-head" data-reveal>
            <span className="wf-eyebrow">The civic workflow, end-to-end</span>
            <h2>
              From request<br />to resolution.
            </h2>
            <p>
              Clear steps. Connected teams. Informed residents — without a clerk chasing every loose
              end.
            </p>
          </div>

          <div className="workflow-rail" data-reveal data-reveal-delay="1">
            {NODES.map((node, i) => (
              <Fragment key={node.step}>
                <article className="wf-node">
                  <span className="wf-step">{node.step}</span>
                  <span className="wf-icon">{node.icon}</span>
                  <h4>{node.title}</h4>
                  <p>{node.body}</p>
                </article>
                {i < NODES.length - 1 && <Arrow />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

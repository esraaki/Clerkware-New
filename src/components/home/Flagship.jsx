import { useFlagshipSteps } from '../../hooks/useFlagshipSteps.js';

const STEPS = [
  {
    title: 'Record the meeting',
    body: "One click starts the session. ClerkMinutes captures audio and tracks who's speaking.",
  },
  {
    title: 'AI drafts clean minutes',
    body: "Action items, motions, and decisions — written in your municipality's voice and format.",
  },
  {
    title: 'You review and approve',
    body: 'Edit any word, add context, and sign off. Every line stays under your control.',
  },
  {
    title: 'Publish everywhere at once',
    body: 'Site, archive, and subscribers update together — one click, every channel.',
  },
];

export default function Flagship() {
  const { activeIndex, watchRef } = useFlagshipSteps(STEPS.length);

  return (
    <section className="flagship" data-reveal-section>
      <div className="container">
        <div className="flagship-grid" ref={watchRef}>
          <div className="flagship-copy" data-reveal>
            <h2>
              Stop typing minutes<br />at 11 PM.
            </h2>
            <p className="lead">
              ClerkMinutes™ listens, understands, and writes clean minutes in your style. All you do
              is review, make any edits, and publish.
            </p>

            <ol className="flagship-steps" id="flagship-steps">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={'flagship-step' + (i === activeIndex ? ' is-active' : '')}
                  data-step={i + 1}
                >
                  <span className="num">{i + 1}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flagship-cta">
              <a className="btn btn-primary" href="#/feature/meetings">
                See it in action<span className="arrow" />
              </a>
              <a className="btn btn-link" href="#/feature/meetings">
                Learn more <span className="arrow" />
              </a>
            </div>
          </div>

          <div className="flagship-stage" data-reveal data-reveal-delay="2">
            <figure className="flagship-screen">
              <img
                className="flagship-img"
                src="/assets/images/meetings-and-minutes.png"
                alt="ClerkMinutes meeting minutes editor — Town Web platform"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

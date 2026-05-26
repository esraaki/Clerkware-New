export default function HomeCTA() {
  return (
    <section className="cta-final cta-final--home" data-reveal-section>
      <div className="container">
        <div className="cta-inner" data-reveal>
          <span className="eyebrow eyebrow-dark">
            <span className="dot" />
            Modern civic infrastructure
          </span>
          <h2 className="cta-headline">Run your municipality like it's 2026.</h2>
          <p>
            Your website, payments, minutes, forms, and notifications — all in one system, backed by
            a team that actually picks up the phone.
          </p>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="#/demo">
              Request a demo
            </a>
            <a className="btn btn-ondark btn-lg" href="#/feature/meetings">
              See it in action
            </a>
          </div>
          <div className="micro">
            Or call <a href="tel:+16085355388">608-535-5388 ext. 303</a> — a real person picks up.
          </div>
        </div>
      </div>
    </section>
  );
}

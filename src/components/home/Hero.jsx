export default function Hero() {
  return (
    <section className="hero" data-reveal-section>
      <div className="container-wide">
        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <h1>
              Municipal Websites &amp;<br />
              <span className="accent">
                Clerkware<span className="tm">™</span>
              </span>
              <br />
              for clerks who<br />
              run the show.
            </h1>
            <p className="hero-sub">
              Professional websites. Connected tools.<br />
              Real people. Built for how local<br />
              government actually works.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="#/demo">
                Request a demo
              </a>
              <a className="btn btn-outline btn-lg" href="#/feature/meetings">
                See it in action
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-cell">
                <span className="trust-val">
                  800<small>+</small>
                </span>
                <span className="trust-meta">municipalities</span>
              </div>
              <div className="trust-cell">
                <span className="trust-val">40</span>
                <span className="trust-meta">states</span>
              </div>
              <div className="trust-cell">
                <span className="trust-val">
                  20<small>+</small>
                </span>
                <span className="trust-meta">years</span>
              </div>
            </div>
          </div>

          <div className="hero-stage" data-reveal data-reveal-delay="1" aria-hidden="true">
            <img
              className="hero-img"
              src="/assets/images/hero-image.png"
              alt="Town of Townville municipal website with Town Web platform dashboard overlay"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

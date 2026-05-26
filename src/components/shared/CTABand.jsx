/**
 * Reusable dark CTA band shown at the bottom of internal pages.
 * Accepts a heading (HTML allowed) and a paragraph (HTML allowed).
 * The primary/secondary buttons are constant across pages.
 */
export default function CTABand({ headingHtml, bodyHtml }) {
  return (
    <section className="cta-final">
      <div className="container">
        <div className="cta-inner" data-reveal>
          <span className="eyebrow eyebrow-dark">
            <span className="dot" style={{ background: '#fb593e' }} />
            Ready when you are
          </span>
          <h2 style={{ marginTop: 18 }} dangerouslySetInnerHTML={{ __html: headingHtml }} />
          <p dangerouslySetInnerHTML={{ __html: bodyHtml }} />
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="#/quote">
              Request a quote<span className="arrow" />
            </a>
            <a className="btn btn-ondark btn-lg" href="#/demo">
              Book a demo
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

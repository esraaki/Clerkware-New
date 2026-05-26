import { TESTIMONIALS } from '../../data/testimonials.js';
import { useTestimonialCarousel } from '../../hooks/useTestimonialCarousel.js';

export default function Testimonials() {
  const { index, next, prev, goTo, hoverHandlers } = useTestimonialCarousel(TESTIMONIALS.length);

  return (
    <section className="quote-section" id="testimonials" data-reveal-section>
      <div className="container">
        <div className="sec-head quote-head" data-reveal>
          <span className="eyebrow">
            <span className="dot" />
            Customer voices
          </span>
          <h2>What our customers say.</h2>
        </div>
        <div
          className="quote-carousel"
          data-reveal
          data-testimonial-carousel
          {...hoverHandlers}
        >
          <div className="quote-track">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className={'quote-block' + (i === index ? ' is-active' : '')}
                data-slide={i}
              >
                <blockquote className="quote-body">
                  <span className="qb-open" aria-hidden="true">
                    “
                  </span>
                  {t.quote}
                </blockquote>
                <div className="quote-aside">
                  <div className="quote-portrait" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div className="quote-citation">
                    <strong>{t.name}</strong>
                    {t.role}
                    <br />
                    {t.org}
                    <p className="quote-stars" aria-hidden="true">
                      ★★★★★
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="quote-controls" aria-label="Testimonial navigation">
            <button
              className="qc-btn"
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span className="qc-dots" aria-hidden="true">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className={'qc-dot' + (i === index ? ' is-active' : '')}
                  onClick={() => goTo(i)}
                />
              ))}
            </span>
            <button
              className="qc-btn"
              type="button"
              aria-label="Next testimonial"
              onClick={next}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

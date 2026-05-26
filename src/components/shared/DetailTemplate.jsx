import FAQ from './FAQ.jsx';
import PageHero from './PageHero.jsx';
import CTABand from './CTABand.jsx';

const cleanAmp = (s) => (s || '').replace(/&amp;/g, '&');

const Breadcrumb = ({ kind, title }) => {
  const parent = kind === 'feature' ? { label: 'Features', href: '#/features' } : { label: 'Solutions', href: '#/services' };
  return [
    { label: 'Home', href: '#/home' },
    parent,
    { label: cleanAmp(title) },
  ];
};

const ShotPlaceholder = ({ title, desc, replaceWith, icon }) => (
  <div className="shot" data-reveal>
    <div className="shot-chrome">
      <div className="dots">
        <span /><span /><span />
      </div>
      <div className="title">{title.toLowerCase()}</div>
    </div>
    <div className="shot-body">
      <span className="ph-icon">{icon}</span>
      <div className="ph-title">Screenshot placeholder</div>
      <p className="ph-desc" dangerouslySetInnerHTML={{ __html: desc }} />
      <p className="ph-note">{replaceWith}</p>
    </div>
  </div>
);

const SquareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 9v12" />
  </svg>
);

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

/**
 * Single shared template that renders both /feature/:id and /service/:id pages.
 * Pass `kind` to vary copy/icons that differ between the two.
 */
export default function DetailTemplate({ data, kind }) {
  const isService = kind === 'service';

  return (
    <>
      <PageHero
        breadcrumb={Breadcrumb({ kind, title: data.title })}
        headlineHtml={data.headline}
        leadHtml={data.lead}
        actions={
          isService ? (
            <>
              <a className="btn btn-primary" href="#/quote">
                Request a quote<span className="arrow" />
              </a>
              <a className="btn btn-outline" href="#/demo">
                Book a demo
              </a>
            </>
          ) : (
            <>
              <a className="btn btn-primary" href="#/demo">
                Book a demo<span className="arrow" />
              </a>
              <a className="btn btn-outline" href="#/quote">
                Request a quote
              </a>
            </>
          )
        }
      />

      <section className="section">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              {isService ? 'What it looks like' : 'The interface'}
            </span>
            <h2>{isService ? 'The deliverable.' : 'What it looks like.'}</h2>
            {!isService && (
              <p>
                Screenshot below shows the live {cleanAmp(data.title)} module. Every screen is yours
                to customize on launch.
              </p>
            )}
          </div>
          <ShotPlaceholder
            title={cleanAmp(data.shotTitle)}
            desc={data.shotDesc}
            replaceWith={isService ? 'Replace with live deliverable example' : 'Replace with live product screenshot'}
            icon={<SquareIcon />}
          />
        </div>
      </section>

      <section
        className="section"
        style={{ background: '#fff', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}
      >
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              How it works
            </span>
            <h2 dangerouslySetInnerHTML={{ __html: isService ? 'Process, <em>end-to-end</em>.' : 'Four steps. <em>End-to-end</em>.' }} />
          </div>
          <div className="process">
            {data.workflow.map((w, i) => (
              <div key={w.title} className="process-step">
                <span className="step-num">{i + 1}</span>
                <h4 dangerouslySetInnerHTML={{ __html: w.title }} />
                <p dangerouslySetInnerHTML={{ __html: w.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              {isService ? "What's included" : 'What you get'}
            </span>
            <h2
              dangerouslySetInnerHTML={{
                __html: isService ? "Everything you'd ask for." : 'Built around <em>clerk workflows</em>.',
              }}
            />
          </div>
          <div className="benefit-grid">
            {data.benefits.map((b) => (
              <article key={b.t} className="benefit">
                <div className="ic" dangerouslySetInnerHTML={{ __html: data.icon || '' }} />
                <h4 dangerouslySetInnerHTML={{ __html: b.t }} />
                <p dangerouslySetInnerHTML={{ __html: b.b }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.usecases && data.usecases.length > 0 && (
        <section className="section" style={{ background: 'var(--canvas-2)' }}>
          <div className="container">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">
                <span className="dot" />
                {isService ? 'In practice' : 'In the wild'}
              </span>
              <h2>{isService ? 'How municipalities use this.' : 'How real municipalities use it.'}</h2>
            </div>
            {data.usecases.map((u, i) => (
              <div key={u.t} className={'usecase' + (i % 2 === 1 ? ' flip' : '')}>
                <div className="usecase-copy">
                  <span className="tag" dangerouslySetInnerHTML={{ __html: u.tag }} />
                  <h3 dangerouslySetInnerHTML={{ __html: u.t }} />
                  <p dangerouslySetInnerHTML={{ __html: u.b }} />
                </div>
                <ShotPlaceholder
                  title={(isService ? 'scenario · ' : 'use case · ') + (i + 1)}
                  desc={
                    isService
                      ? `${u.tag} scenario — interface or document deliverable showing ${u.t.toLowerCase()}.`
                      : `${u.tag} workflow: ${u.t.toLowerCase()} — interface composed of agenda/intake on the left, status pipeline in the middle, and approver/citizen-facing view on the right.`
                  }
                  replaceWith={isService ? 'Replace with deliverable photo' : 'Replace with use-case screenshot'}
                  icon={isService ? <GlobeIcon /> : <HomeIcon />}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {!isService && data.integrations && (
        <section
          className="section"
          style={{ background: '#fff', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}
        >
          <div className="container">
            <div className="sec-head center" data-reveal>
              <span className="eyebrow">
                <span className="dot" />
                Integrates with
              </span>
              <h2>Talks to the rest of the platform.</h2>
              <p>No silos. No duplicate data entry. No "the website team needs to do that."</p>
            </div>
            <div className="integration-row">
              {data.integrations.map((label) => (
                <span key={label} className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: label }} />
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="section"
        style={
          isService
            ? { background: '#fff', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }
            : undefined
        }
      >
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              FAQ
            </span>
            <h2>{isService ? 'Questions municipalities ask first.' : 'Questions clerks ask first.'}</h2>
          </div>
          <FAQ items={data.faq} />
        </div>
      </section>

      {isService ? (
        <CTABand
          headingHtml="Ready to talk specifics?"
          bodyHtml="Get a quote sized to your municipality."
        />
      ) : (
        <CTABand
          headingHtml="Ready to see it in action?"
          bodyHtml="Book a 30-minute demo or request a quote sized to your municipality."
        />
      )}
    </>
  );
}

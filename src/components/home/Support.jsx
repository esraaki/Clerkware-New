const PROMISES = [
  {
    title: 'Call us. We answer.',
    body: 'No phone trees. No hold music. You get a person who knows your town and solves your problem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: 'White-glove service.',
    body: "Too busy to upload minutes or update your site? We'll do it. Think of us as your team, minus the PTO.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2.5 5.1 5.6.8-4.05 4 .95 5.6L12 15.9 6.95 18.5 7.9 12.9 3.85 8.9l5.65-.8z" />
      </svg>
    ),
  },
  {
    title: 'Midwestern values.',
    body: "We remember your name, ask how things are going, and actually mean it. This isn't a call center — it's a partnership.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11.2L12 4l9 7.2V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
];

export default function Support() {
  return (
    <section className="support-section support-section--ana" data-reveal-section>
      <div className="container-wide">
        <div className="sp-grid">
          <figure className="sp-photo" data-reveal>
            <img
              className="sp-photo-img"
              src="/assets/images/support.png"
              alt="Town Web customer success representative"
              loading="lazy"
            />
          </figure>

          <div className="sp-copy" data-reveal data-reveal-delay="1">
            <span className="sp-eyebrow">Because you deserve more than ticket numbers</span>
            <h2>Support that feels like a friendly neighbor.</h2>
            <p>
              Most software companies give you a support portal and wish you luck. We give you actual
              humans with Midwestern charm who genuinely want to help — by name, on the first call.
            </p>

            <ul className="sp-promises sp-promises--inline">
              {PROMISES.map((p) => (
                <li key={p.title} className="sp-promise">
                  <span className="sp-p-ic">{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="sp-team">
              <div className="sp-avs">
                <span className="sp-av sp-av-1" />
                <span className="sp-av sp-av-2" />
                <span className="sp-av sp-av-3" />
              </div>
              <div className="sp-team-meta">
                <strong>U.S.-based support</strong>
                <span>608-535-5388 ext. 303</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

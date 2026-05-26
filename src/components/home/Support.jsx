const PROMISES = [
  {
    title: 'Call us. We answer.',
    body: 'No phone trees. No hold music. You get a person who knows your town and solves your problem.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'White-glove service.',
    body: "Too busy to upload minutes or update your site? We'll do it. Think of us as your team, minus the PTO.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Midwestern values.',
    body: "We remember your name, ask how things are going, and actually mean it. This isn't a call center — it's a partnership.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21V9l4-3 5 4 5-4 4 3v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export default function Support() {
  return (
    <section className="support-section" data-reveal-section>
      <div className="container-wide">
        <div className="sp-grid">
          <div className="sp-copy" data-reveal>
            <span className="sp-eyebrow">Because you deserve more than ticket numbers</span>
            <h2>Support that feels like a friendly neighbor.</h2>
            <p>
              Most software companies give you a support portal and wish you luck. We give you actual
              humans with Midwestern charm who genuinely want to help.
            </p>
            <div className="sp-team">
              <div className="sp-avs">
                <span className="sp-av sp-av-1" />
                <span className="sp-av sp-av-2" />
                <span className="sp-av sp-av-3" />
              </div>
              <div className="sp-team-meta">
                <strong>U.S.-based support</strong>
                <span>Mon–Fri, 7am–7pm CT</span>
              </div>
            </div>
          </div>

          <div className="sp-promises" data-reveal data-reveal-delay="1">
            {PROMISES.map((p) => (
              <article key={p.title} className="sp-promise">
                <span className="sp-p-ic">{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="sp-photo" data-reveal data-reveal-delay="2">
            <img
              className="sp-photo-img"
              src="/assets/images/support.png"
              alt="Town Web support team member at desk"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

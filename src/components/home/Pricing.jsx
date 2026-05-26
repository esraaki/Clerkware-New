export default function Pricing() {
  return (
    <section className="pricing-tease" data-reveal-section>
      <div className="container">
        <div className="pt-strip" data-reveal>
          <div className="pt-lead">
            <span className="pt-lock">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </span>
            <div>
              <span className="pt-eyebrow">Pricing built for civic budgets</span>
              <h2 className="pt-title">Fixed-price, rate-locked, all-inclusive.</h2>
              <p className="pt-sub">
                One annual number — agreed up front and held year over year. Onboarding, support,
                and platform updates included.
              </p>
            </div>
          </div>
          <div className="pt-stats">
            <div className="pt-stat">
              <b>$0</b>
              <span>setup fees</span>
            </div>
            <div className="pt-stat">
              <b>
                20<small>+ yrs</small>
              </b>
              <span>without a price hike</span>
            </div>
            <div className="pt-stat">
              <b>∞</b>
              <span>all features included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [1, 2, 3, 4, 5];

export default function TrustStrip() {
  return (
    <section className="trust-strip" data-reveal-section>
      <div className="container-wide">
        <div className="ts-grid">
          <span className="ts-label">Trusted by municipalities across the U.S.</span>
          <div className="ts-logos">
            {LOGOS.map((n) => (
              <img
                key={n}
                className="ts-logo-img"
                src={`/assets/images/municipality-logo-${n}.png`}
                alt="Municipality logo"
                loading="lazy"
              />
            ))}
          </div>
          <span className="ts-more">And hundreds more</span>
        </div>
      </div>
    </section>
  );
}

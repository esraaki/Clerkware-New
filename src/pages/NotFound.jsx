export default function NotFound() {
  return (
    <section className="section" style={{ padding: 'clamp(96px,12vw,180px) 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 560 }}>
        <span className="eyebrow">
          <span className="dot" />
          404
        </span>
        <h1 style={{ margin: '16px 0 18px' }}>Page not found</h1>
        <p className="lead" style={{ margin: '0 0 32px' }}>
          That link doesn't exist. Try the homepage or jump back to the platform overview.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a className="btn btn-primary" href="#/home">
            Back to home<span className="arrow" />
          </a>
          <a className="btn btn-outline" href="#/features">
            See the platform
          </a>
        </div>
      </div>
    </section>
  );
}

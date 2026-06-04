/* ============================================================
   TEMPORARY DESIGN-IN-PROGRESS OVERLAY
   ------------------------------------------------------------
   Temporary development lock screen. Shows a dark/blurred,
   non-dismissible modal over the site while homepage changes are
   in progress. The page behind STAYS SCROLLABLE — the overlay does
   not lock body scroll and uses pointer-events:none so wheel/touch
   events pass straight through to the page underneath.
   To remove: delete this file and its <DesignInProgressOverlay />
   usage in src/App.jsx. Nothing else depends on it.
   ============================================================ */
export default function DesignInProgressOverlay() {
  // No scroll lock: body scrolling is intentionally left enabled.

  const backdrop = {
    position: 'fixed',
    inset: 0,
    zIndex: 2147483647,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: 'rgba(10, 12, 18, 0.62)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    // Let scroll/clicks pass through to the page behind so it stays scrollable.
    // There are no dismiss handlers anywhere, so the modal still cannot be closed.
    pointerEvents: 'none',
  };

  const card = {
    maxWidth: '440px',
    width: '100%',
    background: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 36px 60px -20px rgba(20,22,30,.28), 0 8px 18px -6px rgba(20,22,30,.12)',
    padding: '40px 36px',
    textAlign: 'center',
    borderTop: '4px solid #e7000b',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const eyebrow = {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#e7000b',
    background: '#fff3f1',
    padding: '6px 12px',
    borderRadius: '999px',
    marginBottom: '18px',
  };

  const title = {
    fontSize: '24px',
    fontWeight: 700,
    color: '#0a0c12',
    margin: '0 0 14px',
    lineHeight: 1.2,
  };

  const body = {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#3a4159',
    margin: '0 0 14px',
  };

  const note = {
    fontSize: '13px',
    color: '#6f7790',
    margin: 0,
  };

  return (
    // Backdrop is pointer-events:none so the page behind keeps scrolling.
    // No dismiss handlers exist (no close button, no outside-click, no Escape),
    // so the overlay cannot be closed until removed from code.
    <div style={backdrop} role="dialog" aria-modal="true" aria-labelledby="dip-title">
      <div style={card}>
        <span style={eyebrow}>Clerkware</span>
        <h1 id="dip-title" style={title}>Design Update In Progress</h1>
        <p style={body}>
          This preview is currently being updated and is temporarily unavailable
          while design improvements are being implemented.
        </p>
        <p style={note}>Please check back later.</p>
      </div>
    </div>
  );
}

import { useState } from 'react';

/**
 * Form wrapper that mirrors the static site's submit-to-success behaviour:
 * intercepts submit, replaces the form with a green success card.
 */
export default function FormCard({ kind = 'contact', children }) {
  const [submitted, setSubmitted] = useState(false);

  const message =
    kind === 'demo'
      ? "We'll email you with available times within 1 business day."
      : kind === 'quote'
      ? "We'll review your request and send your custom quote within 1 business day."
      : "We've got it. A real person will respond within 4 hours (business hours).";

  if (submitted) {
    return (
      <div className="form-success">
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: '#dcf6ec',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto 18px',
            border: '1px solid #b8e8d3',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a7d56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Thanks — we got it.</h3>
        <p style={{ marginTop: 8 }}>{message}</p>
        <a className="btn btn-outline btn-sm" href="#/home" style={{ marginTop: 18 }}>
          Back to home
        </a>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      data-form={kind}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {children}
    </form>
  );
}

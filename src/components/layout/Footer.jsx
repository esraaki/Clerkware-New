import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#/home" aria-label="Town Web home">
              <BrandLogo tone="dark" />
            </a>
            <p className="footer-blurb">
              The civic operating system for American municipalities. Websites, payments, AI minutes,
              alerts, permits, and resident services — on one platform, supported by humans.
            </p>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#/features">All features</a>
              </li>
              <li>
                <a href="#/feature/meetings">AI Meeting Minutes</a>
              </li>
              <li>
                <a href="#/feature/payments">Online Payments</a>
              </li>
              <li>
                <a href="#/feature/notifications">Notifications</a>
              </li>
              <li>
                <a href="#/feature/permits">Permits &amp; Licensing</a>
              </li>
              <li>
                <a href="#/feature/forms">Forms &amp; Workflows</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#/service/design">Municipal Websites</a>
              </li>
              <li>
                <a href="#/service/ada">ADA Compliance</a>
              </li>
              <li>
                <a href="#/service/gov">.gov Registration</a>
              </li>
              <li>
                <a href="#/service/packages">Pricing</a>
              </li>
              <li>
                <a href="#/compare">Compare vendors</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#/about">About</a>
              </li>
              <li>
                <a href="#/compare">Compare vendors</a>
              </li>
              <li>
                <a href="#/resources">Resources</a>
              </li>
              <li>
                <a href="#/support">Support</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Talk to us</h4>
            <div className="footer-contact">
              <a href="tel:+16085355388">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                608-535-5388 ×303
              </a>
              <a href="mailto:hello@townweb.com">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@townweb.com
              </a>
              <a href="#/demo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book a demo
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Town Web · Clerkware™. Built in Madison, Wisconsin.</span>
          <span className="footer-meta">
            <span className="mint-dot">All systems operational</span>
            <a href="#/legal/privacy">Privacy</a>
            <a href="#/legal/terms">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

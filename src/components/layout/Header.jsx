import { useEffect, useRef, useState } from 'react';
import BrandLogo from './BrandLogo.jsx';

const ChevronDown = () => (
  <svg className="chev" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const FEATURE_ITEMS = {
  Internal: [
    {
      href: '#/feature/meetings',
      title: 'AI Meeting Minutes',
      desc: 'Draft, review, publish',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
    {
      href: '#/feature/content',
      title: 'Documents',
      desc: 'One searchable archive',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
    {
      href: '#/feature/forms',
      title: 'Forms & Workflows',
      desc: 'Routed, approved, audited',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
  ],
  Citizen: [
    {
      href: '#/feature/notifications',
      title: 'Notifications',
      desc: 'Email · text · voice',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      href: '#/feature/311',
      title: '311 Reporting',
      desc: 'Mobile-first, geo-tagged',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M9 6h6" />
        </svg>
      ),
    },
    {
      href: '#/feature/calendar',
      title: 'Event Calendar',
      desc: 'Site · Google · Outlook',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      ),
    },
  ],
  Revenue: [
    {
      href: '#/feature/payments',
      title: 'Online Payments',
      desc: 'Cards, ACH, autopay',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      href: '#/feature/facility',
      title: 'Facility Booking',
      desc: 'Real-time availability',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      href: '#/feature/permits',
      title: 'Permits & Licensing',
      desc: 'Central review queue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
  ],
};

const SOLUTION_ITEMS = [
  {
    href: '#/service/design',
    title: 'Municipal Websites',
    desc: 'Custom design, not templates',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    href: '#/service/ada',
    title: 'ADA Compliance',
    desc: 'WCAG 2.1 AA guaranteed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: '#/service/gov',
    title: '.gov Registration',
    desc: 'Federal verification handled',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    href: '#/service/packages',
    title: 'Fixed-Price Packages',
    desc: 'No annual price hikes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

function DropdownItem({ item, onSelect }) {
  return (
    <a className="dropdown-item" href={item.href} onClick={onSelect}>
      <span className="di-icon">{item.icon}</span>
      <div>
        <strong>{item.title}</strong>
        <span>{item.desc}</span>
      </div>
    </a>
  );
}

export default function Header({ activeRoute }) {
  const [openDropdown, setOpenDropdown] = useState(null); // 'features' | 'solutions' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Close everything on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [activeRoute]);

  // Close dropdowns on outside click
  useEffect(() => {
    if (!openDropdown) return undefined;
    const onClick = (e) => {
      if (!e.target.closest('.nav-group')) setOpenDropdown(null);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [openDropdown]);

  const toggleDropdown = (key) => (e) => {
    e.stopPropagation();
    setOpenDropdown((cur) => (cur === key ? null : key));
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="site-header" id="site-header">
      <div className="header-inner">
        <a className="brand" href="#/home" aria-label="Town Web home" data-route-link="home" onClick={closeMenus}>
          <BrandLogo />
        </a>

        <nav
          ref={navRef}
          className={'nav' + (mobileOpen ? ' is-open' : '')}
          id="primary-nav"
          aria-label="Primary"
        >
          <div className={'nav-group' + (openDropdown === 'features' ? ' is-open' : '')} data-dropdown>
            <button
              className={'nav-btn' + (openDropdown === 'features' ? ' is-open' : '')}
              data-dropdown-toggle
              aria-expanded={openDropdown === 'features'}
              onClick={toggleDropdown('features')}
            >
              Features
              <ChevronDown />
            </button>
            <div className={'nav-dropdown mega' + (openDropdown === 'features' ? ' is-open' : '')}>
              <div className="mega-groups">
                <div className="mega-group">
                  <h6>Internal Operations</h6>
                  {FEATURE_ITEMS.Internal.map((item) => (
                    <DropdownItem key={item.href} item={item} onSelect={closeMenus} />
                  ))}
                </div>
                <div className="mega-group">
                  <h6>Citizen Engagement</h6>
                  {FEATURE_ITEMS.Citizen.map((item) => (
                    <DropdownItem key={item.href} item={item} onSelect={closeMenus} />
                  ))}
                </div>
                <div className="mega-group">
                  <h6>Revenue &amp; Services</h6>
                  {FEATURE_ITEMS.Revenue.map((item) => (
                    <DropdownItem key={item.href} item={item} onSelect={closeMenus} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={'nav-group' + (openDropdown === 'solutions' ? ' is-open' : '')} data-dropdown>
            <button
              className={'nav-btn' + (openDropdown === 'solutions' ? ' is-open' : '')}
              data-dropdown-toggle
              aria-expanded={openDropdown === 'solutions'}
              onClick={toggleDropdown('solutions')}
            >
              Solutions
              <ChevronDown />
            </button>
            <div className={'nav-dropdown' + (openDropdown === 'solutions' ? ' is-open' : '')}>
              {SOLUTION_ITEMS.map((item) => (
                <DropdownItem key={item.href} item={item} onSelect={closeMenus} />
              ))}
            </div>
          </div>

          <a
            className={'nav-link' + (activeRoute === 'compare' ? ' is-active' : '')}
            href="#/compare"
            data-route-link="compare"
            onClick={closeMenus}
          >
            Compare
          </a>
          <a
            className={'nav-link' + (activeRoute === 'resources' ? ' is-active' : '')}
            href="#/resources"
            data-route-link="resources"
            onClick={closeMenus}
          >
            Resources
          </a>
          <a
            className={'nav-link' + (activeRoute === 'about' ? ' is-active' : '')}
            href="#/about"
            data-route-link="about"
            onClick={closeMenus}
          >
            About
          </a>

          <span className="nav-cta">
            <a className="btn btn-primary btn-sm" href="#/demo" onClick={closeMenus}>
              Request a demo<span className="arrow" />
            </a>
          </span>
        </nav>

        <button
          className={'menu-toggle' + (mobileOpen ? ' is-open' : '')}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

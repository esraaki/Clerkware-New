import { useEffect } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';
import { useReveal } from './hooks/useReveal.js';
// TEMPORARY DESIGN-IN-PROGRESS OVERLAY — remove this import and its usage below to unlock the site.
import DesignInProgressOverlay from './components/shared/DesignInProgressOverlay.jsx';

import Home from './pages/Home.jsx';
import Features from './pages/Features.jsx';
import FeatureDetail from './pages/FeatureDetail.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Compare from './pages/Compare.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import Support from './pages/Support.jsx';
import Contact from './pages/Contact.jsx';
import Demo from './pages/Demo.jsx';
import Quote from './pages/Quote.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

import { FEATURES } from './data/features.js';
import { SERVICES } from './data/services.js';

function renderRoute({ name, param }) {
  if (name === 'home') return <Home />;
  if (name === 'features') return <Features />;
  if (name === 'feature') {
    if (param && FEATURES[param]) return <FeatureDetail data={FEATURES[param]} />;
    return <NotFound />;
  }
  if (name === 'services') return <Services />;
  if (name === 'service') {
    if (param && SERVICES[param]) return <ServiceDetail data={SERVICES[param]} />;
    return <NotFound />;
  }
  if (name === 'compare') return <Compare />;
  if (name === 'about') return <About />;
  if (name === 'resources') return <Resources />;
  if (name === 'support') return <Support />;
  if (name === 'contact') return <Contact />;
  if (name === 'demo') return <Demo />;
  if (name === 'quote') return <Quote />;
  if (name === 'legal/privacy') return <Privacy />;
  if (name === 'legal/terms') return <Terms />;
  return <NotFound />;
}

export default function App() {
  const route = useHashRoute();
  const pathKey = route.name + (route.param ? '/' + route.param : '');

  // Re-observe revealed elements whenever the route changes.
  useReveal(pathKey);

  // Header scrolled / over-hero state — kept here so it survives navigation.
  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return undefined;
    const isHome = route.name === 'home';
    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) {
        header.classList.toggle('over-hero', y < 80);
        header.classList.toggle('scrolled', y >= 80);
      } else {
        header.classList.remove('over-hero');
        header.classList.toggle('scrolled', y > 12);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [route.name]);

  // Year in footer is updated via a token; nothing else needed here.
  return (
    <>
      {/* TEMPORARY DESIGN-IN-PROGRESS OVERLAY — remove this line to unlock the site. */}
      <DesignInProgressOverlay />
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header activeRoute={route.name} />
      <main id="main">{renderRoute(route)}</main>
      <Footer />
    </>
  );
}

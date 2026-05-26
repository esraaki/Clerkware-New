import Hero from '../components/home/Hero.jsx';
import TrustStrip from '../components/home/TrustStrip.jsx';
import Switch from '../components/home/Switch.jsx';
import Platform from '../components/home/Platform.jsx';
import Flagship from '../components/home/Flagship.jsx';
import Workflow from '../components/home/Workflow.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Support from '../components/home/Support.jsx';
import Pricing from '../components/home/Pricing.jsx';
import HomeCTA from '../components/home/HomeCTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Switch />
      <Platform />
      <Flagship />
      <Workflow />
      <Testimonials />
      <Support />
      <Pricing />
      <HomeCTA />
    </>
  );
}

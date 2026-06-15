import Hero from '../components/home/Hero.jsx';
import WebsiteTransition from '../components/home/WebsiteTransition.jsx';
import ConnectedDashboard from '../components/home/ConnectedDashboard.jsx';
import Municipalities from '../components/home/Municipalities.jsx';
import FeatureCategories from '../components/home/FeatureCategories.jsx';
import Switch from '../components/home/Switch.jsx';
import Flagship from '../components/home/Flagship.jsx';
import Workflow from '../components/home/Workflow.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Support from '../components/home/Support.jsx';
import HomeCTA from '../components/home/HomeCTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <WebsiteTransition />
      <ConnectedDashboard />
      <Municipalities />
      <FeatureCategories />
      <Switch />
      <Flagship />
      <Workflow />
      <Testimonials />
      <Support />
      <HomeCTA />
    </>
  );
}

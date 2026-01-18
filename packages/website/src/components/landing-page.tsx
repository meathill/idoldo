import LandingFeatures from './landing-features';
import LandingFooter from './landing-footer';
import LandingHero from './landing-hero';

export default function LandingPage() {
  return (
    <div>
      <LandingHero />
      <LandingFeatures />
      <LandingFooter />
    </div>
  );
}

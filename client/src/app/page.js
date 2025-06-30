import HeroSection from '../components/HeroSection';
import InvestmentPhilosophySection from '../components/InvestmentPhilosophySection';
import IndustriesSection from '../components/IndustriesSection';
import PortfolioHighlights from '../components/PortfolioHighlights';
import ValueBeyondCapital from '../components/ValueBeyondCapital';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InvestmentPhilosophySection />
      <IndustriesSection />
      <PortfolioHighlights />
      <ValueBeyondCapital />
      <Testimonials />
      <CallToAction />
      <FAQSection />
    </>
  );
}

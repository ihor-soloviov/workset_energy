import HeroSection from '@/components/common/HeroSection/HeroSection';
import VorteileSection from '@/components/common/VorteileSection/VorteileSection';
import PricingPlansSection from '@/components/common/PricingPlansSection/PricingPlansSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { pvAnlagenVideo } from '@/utils/video';
import { pvAnlagenHero } from '@/utils/hero';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';

const PvAnlagen = () => {
  return (
    <>
      <HeroSection {...pvAnlagenHero} />
      <PricingPlansSection />
      <VideoSection {...pvAnlagenVideo} />
      <VorteileSection />

      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default PvAnlagen;

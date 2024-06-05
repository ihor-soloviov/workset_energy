import HeroSection from '@/components/common/HeroSection/HeroSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import VorteileSection from '@/components/common/VorteileSection/VorteileSection';
import PricingPlansSection from '@/components/common/PricingPlansSection/PricingPlansSection';
import EmployeeSection from '@/components/common/EmployeeSection/EmployeeSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import { wallboxHero } from '@/utils/hero';
import { wallboxVideo } from '@/utils/video';
import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import RedHelpSection from '@/components/common/RedHelpSection/RedHelpSection';

const Wallbox = () => {
  return (
    <>
      <HeroSection {...wallboxHero} />
      <PricingPlansSection />
      <VideoSection {...wallboxVideo} />
      <VorteileSection />

      <EmployeeSection />
      <GoogleComSection />
      <TeamSection />
      <ContactUsSection />
      <RedHelpSection />
    </>
  );
};

export default Wallbox;

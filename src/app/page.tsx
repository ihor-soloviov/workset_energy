import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import QuestionSection from '@/components/home/QuestionSection/QuestionSection';
import AngebotSection from '@/components/home/AngebotSection/AngebotSection';
import AmenitiesSection from '@/components/home/AmenitiesSection/AmenitiesSection';
import StepSection from '@/components/common/StepSection/StepSection';
import VisionSection from '@/components/common/VisionSection/VisionSection';
import RegionSection from '@/components/home/RegionSection/RegionSection';
import LeadgenSection from '@/components/common/LeadgenSection/LeadgenSection';
import HomeHeroSection from '@/components/home/HomeHeroSection/HomeHeroSection';
import ObjectSection from '@/components/common/ObjectSection/ObjectSection';

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <AmenitiesSection />
      <LeadgenSection />
      <ObjectSection />
      <RegionSection />
      <TeamSection />
      <AngebotSection />
      <GoogleComSection />
      <QuestionSection />
      <VisionSection />
      <StepSection />
      <ContactUsSection />
    </>
  );
};

export default HomePage;

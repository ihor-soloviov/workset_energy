import ContactUsSection from '@/components/common/ContactUsSection/ContactUsSection';
import GoogleComSection from '@/components/common/GoogleComSection/GoogleComSection';
import TeamSection from '@/components/common/TeamSection/TeamSection';
import VideoSection from '@/components/common/VideoSection/VideoSection';
import { firstVideo, secondVideo } from '@/utils/video';
import { homeHero } from '@/utils/hero';
import QuestionSection from '@/components/home/QuestionSection/QuestionSection';
import AngebotSection from '@/components/home/AngebotSection/AngebotSection';
import ProductSection from '@/components/home/ProductSection/ProductSection';
import AmenitiesSection from '@/components/home/AmenitiesSection/AmenitiesSection';
import StepSection from '@/components/common/StepSection/StepSection';
import VisionSection from '@/components/common/VisionSection/VisionSection';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import RegionSection from '@/components/home/RegionSection/RegionSection';
import LeadgenSection from '@/components/common/LeadgenSection/LeadgenSection';
import HomeHeroSection from '@/components/home/HomeHeroSection/HomeHeroSection';
import ObjectSection from '@/components/common/ObjectSection/ObjectSection';

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      {/* <HeroSection {...homeHero} /> */}
      <AmenitiesSection />
      <LeadgenSection />
      {/* <VideoSection {...firstVideo} /> */}
      {/* <ProductSection /> */}
      {/* <VideoSection {...secondVideo} /> */}
      <RegionSection />
      <TeamSection />
      <AngebotSection />
      <GoogleComSection />
      <ObjectSection />
      <QuestionSection />
      <VisionSection />
      <StepSection />
      <ContactUsSection />
    </>
  );
};

export default HomePage;

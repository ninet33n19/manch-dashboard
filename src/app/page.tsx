import { Navbar } from "@/components/landing/Navbar";
import { HeroText } from "@/components/landing/HeroText";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import ServicesSection from "@/components/landing/ServicesSection";
import DisputeTypes from "@/components/landing/DisputeTypes";
import { CtaAndTeam } from "@/components/landing/CtaAndTeam";
import Footer from "@/components/ui/footer";
import PlatformFeatures from "@/components/landing/PlatformFeatures";
import Testimonial from "@/components/landing/Testimonial";

export default function Page() {
  return (
    <div className="w-full">
      <div className="px-10 xl:px-10 2xl:mx-auto 2xl:max-w-[1300px]">
        <Navbar />
        <HeroText />
        <DashboardShowcase />
        <FeatureShowcase />
        <ServicesSection />
        <DisputeTypes />
        <PlatformFeatures />
        <Testimonial />
        <CtaAndTeam />
      </div>

      <div className="px-10 xl:px-10 2xl:mx-auto 2xl:max-w-[1300px]">
        <Footer
          footerText="Offering online arbitration & mediation services to parties who wish to have their disputes resolved outside of the courtroom"
          className="text-3xl max-w-2xl"
        />
      </div>
    </div>
  );
}

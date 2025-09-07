import { Navbar } from "@/components/landing/Navbar";
import { HeroText } from "@/components/landing/HeroText";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import ServicesSection from "@/components/landing/ServicesSection";
import DisputeTypes from "@/components/landing/DisputeTypes";
import { Testimonial } from "@/components/landing/Testimonial";
import { CtaAndTeam } from "@/components/landing/CtaAndTeam";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroText />
      <DashboardShowcase />
      <FeatureShowcase />
      <ServicesSection />
      <DisputeTypes />
      <Testimonial />
      <CtaAndTeam />
    </>
  );
}

import { AcademyHero } from "@/components/academy/AcademyHero";
import ComparePlans from "@/components/academy/ComparePlans";
import CourseGrid from "@/components/academy/CourseGrid";
import FaqSection from "@/components/academy/FaqSection";
import { Navbar } from "@/components/landing/Navbar";

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <AcademyHero />
      <CourseGrid />
      <ComparePlans />
      <FaqSection />
    </>
  );
}

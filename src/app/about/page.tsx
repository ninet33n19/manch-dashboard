import ImageCarousel from "@/components/ui/image-carousel";
import { Navbar } from "@/components/landing/Navbar";
import { Badge } from "@/components/ui/badge";
import OurPanel from "@/components/about/OurPanel";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/ui/footer";

const images = [
  "/assests/office.jpg",
  "/assests/office.jpg",
  "/assests/office.jpg",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="mt-56">
        <div className="flex flex-col gap-6 justify-center items-center text-center mb-20 mx-10">
          <p className="text-5xl font-medium font-inter leading-snug">
            Manch is on a mission <br />
            to transform dispute resolution
          </p>
          <p className="text-xl font-normal font-inter leading-normal text-[#666666]">
            Extend your healthspan through scientifically <br />
            proven, non-invasive, safe and effective red-light
          </p>
        </div>
        <ImageCarousel images={images} />
        <div className="flex flex-col gap-12 mt-56 mx-10">
          <div className="flex items-center justify-center">
            <Badge className="bg-[#D8F9B8] font-inter font-normal text-sm text-black">
              मंच
            </Badge>
            <Badge className="bg-[#FAFAF9] font-inter font-normal text-sm text-black">
              Our Vision
            </Badge>
          </div>
          <div className="flex flex-col items-center justify-center gap-12">
            <p className="text-4xl font-medium font-inter leading-snug text-center mt-6 lg:mx-72">
              Resolving disputes shouldn’t require a passport, a courtroom, or
              even pants— just an internet connection and the desire for justice
              made easy.
            </p>
            <p className="text-lg font-normal text-[#666666] font-inter">
              Founding team @Manch.live
            </p>
          </div>
        </div>
        <OurPanel />
        <AboutCta />
        <Footer />
      </div>
    </>
  );
}

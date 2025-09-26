import { ArrowUpRightIcon, ChevronRightIcon, Star } from "lucide-react";
import HighlightedText from "../ui/highlighted-text";

interface TestimonialCardProps {
  isImage: boolean;
  comment?: string;
  imageSrc?: string; // Changed from React.ReactNode to string for simplicity
  avatarSrc?: string; // For the small avatar in text cards
  name?: string;
  position?: string;
}

const TestimonialCard = ({
  isImage,
  comment,
  imageSrc,
  avatarSrc,
  name,
  position,
}: TestimonialCardProps) => {
  if (isImage) {
    return (
      // Image Card
      <div className="relative w-full h-[270px] rounded-2xl bg-gray-300 overflow-hidden group">
        <img
          src={imageSrc}
          alt="Testimonial background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        {/*<div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white font-bold text-lg">Galaxy</h3>
              <p className="text-white text-sm">Finance / 12 Employees</p>
            </div>
            <div className="bg-[#B9FF66] p-2 rounded-full">
              <ArrowUpRightIcon className="size-5 text-black" />
            </div>
          </div>
        </div>*/}
      </div>
    );
  }

  return (
    // Text Card
    <div className="w-full h-[270px] rounded-2xl bg-white p-6 flex flex-col justify-between shadow-sm border border-gray-100">
      <p className="text-gray-700">"{comment}"</p>
      <div className="flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

const testimonialsData = [
  {
    isImage: true,
    imageSrc: "/assets/overlay-1.png",
  },
  {
    isImage: false,
    comment:
      "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
    avatarSrc: "/assets/zoie.png",
    name: "Sarah Olsson",
    position: "Founder & CEO @Finns",
  },
  {
    isImage: true,
    imageSrc: "/assets/overlay-2.png",
  },
  {
    isImage: false,
    comment:
      "The automation features have saved us countless hours. What used to take days now takes minutes, allowing us to focus on growth.",
    avatarSrc: "/assets/zoie.png",
    name: "John Doe",
    position: "COO @InnovateCo",
  },
  {
    isImage: false,
    comment:
      "This platform turned our messy finances into clear, actionable insights from day one. It's incredibly intuitive and powerful.",
    avatarSrc: "/assets/zoie.png",
    name: "Jane Smith",
    position: "Marketing Head @Solutions",
  },
  {
    isImage: true,
    imageSrc: "/assets/overlay-1.png",
  },
  {
    isImage: false,
    comment:
      "A must-have for any startup. It provides clarity and control over our financials, which is crucial for making smart decisions.",
    avatarSrc: "/assets/zoie.png",
    name: "Emily White",
    position: "Founder @TechStart",
  },
  {
    isImage: true,
    imageSrc: "/assets/overlay-2.png",
  },
  {
    isImage: true,
    imageSrc: "/assets/overlay-1.png",
  },
  {
    isImage: false,
    comment:
      "As a solo founder, I needed something that wouldn't require a CFO to understand. This platform turned our messy finances into clear, actionable insights from day one.",
    avatarSrc: "/assets/zoie.png",
    name: "Sarah Olsson",
    position: "Founder & CEO @Finns",
  },
  {
    isImage: true,
    imageSrc: "/assets/overlay-2.png",
  },
  {
    isImage: false,
    comment:
      "The customer support is top-notch. They are always responsive and helpful, making the onboarding process a breeze.",
    avatarSrc: "/assets/zoie.png",
    name: "Michael Chen",
    position: "CEO @GrowthPath",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-1 justify-center items-center text-sm text-gray-700">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-black size-4" fill="black" />
          ))}
          <div className="pl-3 flex gap-1 justify-center items-center">
            <span>4.9 rating</span>
            <ChevronRightIcon className="text-black size-4" />
          </div>
        </div>
        <h2 className="text-5xl font-medium text-center text-gray-800 w-full">
          Here's why businesses trust{" "}
          <HighlightedText>मंच Manch</HighlightedText>
        </h2>

        {/* The relative container for the grid/row and the fade overlays */}
        <div className="relative w-full mt-8">
          {/* The scrollable grid container */}
          <div className="flex flex-row gap-6 overflow-x-auto overflow-y-hidden pb-8 pt-8 [scrollbar-width:none] [-ms-overflow-style:none] xl:grid xl:grid-cols-4 xl:gap-4 xl:h-[720px] xl:overflow-y-scroll xl:pb-20 xl:pt-20">
            {/* Map over the data array */}
            {testimonialsData.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[340px] w-[340px] shrink-0 xl:min-w-0 xl:w-auto xl:h-auto"
              >
                <TestimonialCard
                  isImage={testimonial.isImage}
                  imageSrc={testimonial.imageSrc}
                  comment={testimonial.comment}
                  avatarSrc={testimonial.avatarSrc}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              </div>
            ))}
          </div>

          {/* Left/Right fade overlays for horizontal scroll (shown on mobile/tablet, hidden on xl+) */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F7F7] to-transparent pointer-events-none xl:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F7F7] to-transparent pointer-events-none xl:hidden" />

          {/* Top/Bottom fade overlays for vertical scroll (hidden on mobile/tablet, shown on xl+) */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F7F7F7] to-transparent pointer-events-none hidden xl:block" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F7F7F7] to-transparent pointer-events-none hidden xl:block" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import Image from "next/image";
import React from "react";

// --- Placeholder Icons ---
// You can replace these with actual icons from a library like Heroicons,
// Font Awesome, or custom SVG assets.
const MaritalIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M12 20.057l-1.424-1.424M12 20.057l1.424-1.424M12 20.057l-.093-.094M12 8.44L5.707 14.73l-1.414 1.414L12 20.057l7.707-7.707-1.414-1.414L12 8.44z"
    />
  </svg>
); // Represents relationships/heart
const ArtIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4h-4a2 2 0 01-2-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 01-2 2z"
    />
  </svg>
); // Represents painting/art
const SportsIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.176l1.519 4.674c.3.921-.755 1.688-1.539 1.175l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.513-1.838-.254-1.539-1.175l1.519-4.674a1 1 0 00-.329-1.176l-3.976-2.888c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
    />
  </svg>
); // Represents a trophy/star
const TechIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-1.006-3.006M9.75 17a3 3 0 100-6h.002M9.75 17a3 3 0 110-6h.002M9.75 17v-5.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 10v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h16a2 2 0 012 2zm-7 0v2.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V10"
    />
  </svg>
); // Represents a laptop/technology
const EcommerceIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
); // Represents a shopping cart
const LoanIcon = () => (
  <svg
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
); // Represents money/bank

// --- Dispute Type Data Structure ---
interface Dispute {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Dispute Data ---
const disputes: Dispute[] = [
  {
    icon: <MaritalIcon />,
    title: "Marital disputes",
    description:
      "Conflicts between spouses often arise from differences in finances, communication, trust, parenting, or lifestyle. Such disagreements can create emotional stress, disrupt family harmony, and may sometimes result in separation or legal action. Monch offers to provide counseling, mediation, or court proceedings.",
  },
  {
    icon: <ArtIcon />,
    title: "Art disputes",
    description:
      "Navigate disputes in the art and cultural heritage sector with expert guidance. Address issues of authenticity, ownership, provenance, copyright, and exhibition agreements with neutrals who understand both law and market practices.",
  },
  {
    icon: <SportsIcon />,
    title: "Sports disputes",
    description:
      "Resolve sports-related conflicts efficiently through a neutral forum. Our arbitrators understand the unique dynamics and urgency of the sports world, helping you reach fair and timely resolutions so you can get back in the game.",
  },
  {
    icon: <TechIcon />,
    title: "Tech disputes",
    description:
      "Handle technology and cross-border contract disputes with expert arbitration services. Specializing in software licensing, intellectual property, data privacy, and international commercial transactions, we provide effective, confidential resolutions tailored to global tech complexities.",
  },
  {
    icon: <EcommerceIcon />,
    title: "E-commerce disputes",
    description:
      "Designed for the digital marketplace, our e-commerce dispute module efficiently addresses consumer complaints, product issues, refund failures, and cross-border conflicts, ensuring smooth resolution for all parties involved.",
  },
  {
    icon: <LoanIcon />,
    title: "Loan disputes",
    description:
      "Streamline fintech and lending conflicts, including loan defaults and debt recovery. Our arbitration services leverage technology to accelerate resolution, reduce litigation costs, and provide fair outcomes for financial institutions and borrowers alike.",
  },
];

// --- DisputeTypes Component ---
const DisputeTypes: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      {/* This div acts as the 1280px wide container with 40px padding on sides */}
      <div className="mx-10 px-10">
        {" "}
        {/* px-10 equals 40px */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side: Text content and dispute cards */}
          <div className="flex-1 lg:max-w-[50%] flex flex-col items-start">
            {/* Why Monch header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E0FF6A] text-xs font-semibold text-black">
                M
              </div>
              <span className="text-sm font-medium text-gray-700">
                Why Monch
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-12 max-w-lg">
              Your money working as hard as you do
            </h2>

            {/* Dispute Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {disputes.map((dispute, index) => (
                <div key={index} className="flex flex-col gap-3 max-w-sm">
                  <div className="text-gray-900 mb-2">{dispute.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {dispute.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {dispute.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 lg:max-w-[50%] flex justify-end">
            Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisputeTypes;

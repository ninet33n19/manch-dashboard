"use client";

import React, { useState } from "react";

// --- TYPE DEFINITION ---
type Course = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  isPopular?: boolean;
};

// --- MOCK DATA ---
const coursesData: Course[] = [
  {
    id: 1,
    title: "Investment Arbitration Procedures",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 2,
    title: "Jurisdictional Investment Treaties",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 3,
    title: "International Investment Law Framework",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
    isPopular: true,
  },
  {
    id: 4,
    title: "Investment Treaty Arbitration",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 5,
    title: "Energy Disputes: Sector-Specific Arbitration",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 6,
    title: "Construction Disputes: Global Systems",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 7,
    title: "Mock Arbitration Trials",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 8,
    title: "Arbitrator's Guide to ODR",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 9,
    title: "International Arbitration : Comparative Systems",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
  {
    id: 10,
    title: "Introduction to ADR & ODR",
    price: 3000,
    imageUrl: "/assests/course-placeholder.png",
  },
];

// --- COURSE CARD COMPONENT ---
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const { title, price, imageUrl, isPopular } = course;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("₹", "₹");

  return (
    <div className="relative flex flex-col">
      {isPopular && (
        <div className="bg-[#343a40] text-white text-center text-sm font-semibold py-1.5 rounded-t-xl">
          Most popular
        </div>
      )}
      <div className="bg-white rounded-xl flex flex-col flex-grow overflow-hidden shadow-lg h-full">
        <div className="w-full h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-gray-800 font-semibold text-lg h-14">{title}</h3>
          <hr className="my-3 border-gray-200" />
          <p className="text-gray-700 font-medium my-2">
            <span className="mr-2">•</span>
            {formattedPrice}
          </p>
          <button
            aria-label={`View course details for ${title}`}
            className={`
              w-full mt-auto py-2.5 px-4 rounded-lg font-semibold text-base transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                isPopular
                  ? "bg-[#d8f3dc] text-black hover:bg-[#c7f0d0] focus:ring-[#d8f3dc]"
                  : "bg-[#343a40] text-white hover:bg-[#495057] focus:ring-[#343a40]"
              }
            `}
          >
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN GRID COMPONENT ---
const CourseGrid: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleSetBillingCycle = (cycle: "monthly" | "yearly"): void => {
    setBillingCycle(cycle);
  };

  return (
    <div className="min-h-screen antialiased font-sans p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* --- Billing Toggle --- */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 rounded-full p-1 flex items-center space-x-1">
            <button
              onClick={() => handleSetBillingCycle("monthly")}
              aria-pressed={billingCycle === "monthly"}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${billingCycle === "monthly" ? "bg-white text-black shadow" : "bg-transparent text-gray-700"}
              `}
            >
              Monthly
            </button>
            <button
              onClick={() => handleSetBillingCycle("yearly")}
              aria-pressed={billingCycle === "yearly"}
              className={`
                px-6 py-2 rounded-full text-sm font-medium flex items-center transition-colors duration-300
                ${billingCycle === "yearly" ? "bg-white text-black shadow" : "bg-transparent text-gray-700"}
              `}
            >
              Yearly
              <span className="ml-2 bg-[#d8f3dc] text-[#2d6a4f] text-xs font-bold px-2 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* --- Courses Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;

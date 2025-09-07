"use client";

import React, { useState } from "react";

// --- TYPE DEFINITION ---
type FaqItem = {
  question: string;
  answer: string;
};

// --- MOCK DATA ---
const faqData: FaqItem[] = [
  {
    question: "What's included in each plan?",
    answer:
      "All plans include our core HR platform with essential features like employee data management, onboarding tools, and basic reporting. Premium and Enterprise plans unlock advanced features like custom workflows, API access, and dedicated support.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can easily upgrade or downgrade your plan at any time from your account settings. Prorated charges or credits will be applied automatically.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes, we offer a discount equivalent to two months free when you opt for an annual subscription. You can select this option during the checkout process.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer email support for all plans. Our Premium and Enterprise plans also include priority phone support and a dedicated account manager to assist you with any questions.",
  },
  {
    question: "Do you offer a trial period?",
    answer:
      "Yes, we offer a 14-day free trial on our Premium plan. No credit card is required to get started. This allows you to explore all our features before making a commitment.",
  },
];

// --- CHEVRON ICON COMPONENT ---
const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

// --- ACCORDION ITEM COMPONENT ---
const AccordionItem: React.FC<{
  item: FaqItem;
  isOpen: boolean;
  handleToggle: () => void;
}> = ({ item, isOpen, handleToggle }) => {
  const { question, answer } = item;
  const answerId = `faq-answer-${question.replace(/\s+/g, "-")}`;

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="text-base font-medium text-gray-700">{question}</span>
        {/* The original design shows chevron-down for open and chevron-right for closed.
            I'm rotating a chevron-right to match that behavior. */}
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        id={answerId}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN FAQ SECTION COMPONENT ---
const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number): void => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased">
      <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Frequently asked questions
        </h2>

        <div>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

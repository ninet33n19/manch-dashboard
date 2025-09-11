"use client";

import { artDisputesFaqData } from "@/data/art-disputes-faq-data";
import { ecommerceDisputesFaqData } from "@/data/ecommerce-disputes-faq-data";
import { generalFaqData } from "@/data/general-faq-data";
import { loanDisputesFaqData } from "@/data/loan-disputes-faq-data";
import { sportDisputeFaqData } from "@/data/sports-dispute-faq-data";
import { techDisputesFaqData } from "@/data/tech-disputes-faq-data";
import Link from "next/link";
import { useState } from "react";

const faqDataMap = {
  General: generalFaqData,
  "Sports Disputes": sportDisputeFaqData,
  "Tech Disputes": techDisputesFaqData,
  "Loan Disputes": loanDisputesFaqData,
  "E-commerce Disputes": ecommerceDisputesFaqData,
  "Art Disputes": artDisputesFaqData,
};

const pages = Object.keys(faqDataMap) as Array<keyof typeof faqDataMap>;

const FaqsPage = () => {
  const [disputePage, setDisputePage] =
    useState<keyof typeof faqDataMap>("General");

  const renderContent = () => {
    const data = faqDataMap[disputePage];

    if (data) {
      return (
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-4 max-w-[500px] text-wrap">
            <p className="font-inter font-normal text-sm text-[#666666]">
              {data.lastUpdated}
            </p>
            <h1 className="font-inter font-medium text-5xl text-black">
              {data.title}
            </h1>
            <div>
              {data.sections.map((item) => (
                <div key={item.id} className="mt-10">
                  <h2
                    className="font-inter font-medium text-2xl text-black mb-5"
                    id={String(item.id)}
                  >
                    {item.question}
                  </h2>
                  <p className="font-inter font-normal text-lg text-[#666666] whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Fallback content for other pages
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-inter font-medium text-5xl text-black">
          {disputePage}
        </h1>
        <p className="font-inter font-normal text-lg text-[#666666]">
          Content for {disputePage} will be added soon.
        </p>
      </div>
    );
  };

  return (
    <div className="mx-10 mt-40 flex">
      <aside className="flex flex-col text-lg gap-5 font-inter font-normal text-[#666666] min-w-80">
        {pages.map((page) => (
          <Link
            key={page}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setDisputePage(page);
            }}
          >
            {page}
          </Link>
        ))}
      </aside>
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default FaqsPage;

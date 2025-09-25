"use client";

import React, { useState } from "react";
import { getAllGlossaryTerms, getGlossaryTerm } from "@/data/glossary";
import {
  GlossaryContent,
  GlossarySubsection,
} from "@/types/glossary-type";

const ContentRenderer: React.FC<{
  content: string | string[] | GlossarySubsection[];
}> = ({ content }) => {
  if (typeof content === "string") {
    return (
      <p className="font-inter font-normal text-lg text-[#666666] whitespace-pre-line">
        {content}
      </p>
    );
  }

  if (Array.isArray(content) && content.length > 0) {
    // Check if it's an array of strings (bullet points)
    if (typeof content[0] === "string") {
      return (
        <ul className="space-y-2 ml-4">
          {(content as string[]).map((item, index) => (
            <li key={index} className="text-[#666666]">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    // Check if it's an array of GlossarySubsection objects
    if (
      content[0] &&
      typeof content[0] === "object" &&
      "subheading" in content[0]
    ) {
      return (
        <div className="space-y-4">
          {(content as GlossarySubsection[]).map((subsection, index) => (
            <div key={index}>
              {subsection.subheading && (
                <h4 className="font-inter font-semibold text-lg text-black mb-2">
                  {subsection.subheading}
                </h4>
              )}
              <ContentRenderer content={subsection.content} />
            </div>
          ))}
        </div>
      );
    }
  }

  return null;
};

const GlossaryNavigation: React.FC<{
  onTermSelect: (term: GlossaryContent) => void;
}> = ({ onTermSelect }) => {
  const allTerms = getAllGlossaryTerms();

  const groupedTerms = allTerms.reduce((acc, termSlug) => {
    const term = getGlossaryTerm(termSlug);
    if (term) {
      const firstLetter = term.title
        .replace("Glossary-", "")
        .charAt(0)
        .toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
    }
    return acc;
  }, {} as Record<string, GlossaryContent[]>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <aside className="flex flex-col text-lg gap-5 font-inter font-normal text-[#666666] min-w-80 text-wrap">
      {sortedLetters.map((letter) => (
        <div key={letter}>
          <h4 className="font-inter font-semibold text-lg text-black mb-2">
            {letter}
          </h4>
          <ul className="space-y-1 ml-4">
            {groupedTerms[letter]
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((term) => (
                <li key={term.slug}>
                  <button
                    onClick={() => onTermSelect(term)}
                    className="block text-left text-[#666666] hover:text-black hover:underline transition-colors"
                  >
                    {term.title.replace("Glossary-", "")}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default function GlossaryAllTermsPage() {
  const [selectedTerm, setSelectedTerm] = useState<GlossaryContent | null>(
    null
  );
  const allTerms = getAllGlossaryTerms();
  const totalTerms = allTerms.length;

  const handleTermSelect = (term: GlossaryContent) => {
    setSelectedTerm(term);
  };

  const handleBackToOverview = () => {
    setSelectedTerm(null);
  };

  return (
    <div className="mx-10 mt-40 flex mb-[120px]">
      <GlossaryNavigation onTermSelect={handleTermSelect} />

      <div className="mx-12">
        <div className="flex flex-col gap-4">
          <p className="font-inter font-normal text-sm text-[#666666]">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {selectedTerm ? (
            // Show selected term content
            <>
              <div className="flex items-center justify-between">
                <h1 className="font-inter font-medium text-5xl text-black">
                  {selectedTerm.title.replace("Glossary-", "")}
                </h1>
                <button
                  onClick={handleBackToOverview}
                  className="font-inter font-semibold text-lg text-[#666666] hover:text-black hover:underline"
                >
                  ← Back to Overview
                </button>
              </div>

              <div>
                {selectedTerm.sections.map((section, index) => (
                  <div key={index} className="mt-10">
                    <h2
                      className="font-inter font-semibold text-2xl text-black mb-5"
                      id={String(index)}
                    >
                      {section.heading}
                    </h2>
                    <ContentRenderer content={section.content} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Show overview content
            <>
              <h1 className="font-inter font-medium text-5xl text-black">
                Legal Glossary
              </h1>
              <p className="font-inter font-normal text-lg text-[#666666] max-w-2xl">
                Comprehensive guide to legal and dispute resolution terminology.
                Our extensive glossary covers {totalTerms} essential terms to
                help you understand key concepts in arbitration, mediation, and
                alternative dispute resolution.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import {
  GlossaryContent,
  GlossarySection,
  GlossarySubsection,
} from "@/types/glossary-type";

interface GlossaryPageProps {
  content: GlossaryContent;
}

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

export const GlossaryPage: React.FC<GlossaryPageProps> = ({ content }) => {
  return (
    <div className="mx-10 mt-40 flex">
      <aside className="flex flex-col text-lg gap-5 font-inter font-normal text-[#666666] min-w-80 text-wrap">
        {content.sections.map((section, index) => (
          <Link
            href={"#" + String(index)}
            key={index}
            className="block hover:underline"
          >
            {section.heading}
          </Link>
        ))}
      </aside>
      <div className="mx-12">
        <div className="flex flex-col gap-4">
          <p className="font-inter font-normal text-sm text-[#666666]">
            {content.lastUpdated}
          </p>
          <h1 className="font-inter font-medium text-5xl text-black">
            {content.title.replace("Glossary-", "")}
          </h1>
          <div>
            {content.sections.map((section, index) => (
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
        </div>
      </div>
    </div>
  );
};

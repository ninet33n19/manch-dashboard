import Image from "next/image";
import React from "react";

interface Dispute {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const disputes: Dispute[] = [
  {
    icon: <img src="/icons/coin.svg" className="w-5 h-5" />,
    title: "AAA-rated security",
    description:
      "Keep your money safe with our secure and trustworthy account setup.",
  },
  {
    icon: <img src="/icons/yen.svg" className="w-5 h-5" />,
    title: "Multi-currency",
    description: "Place deposits in EUR, GBP, USD and 190 more currencies.",
  },
  {
    icon: <img src="/icons/double-coin.svg" className="w-5 h-5" />,
    title: "Smart Save™",
    description:
      "Round up every purchase and automatically invest the difference.",
  },
  {
    icon: <img src="/icons/stack.svg" className="w-5 h-5" />,
    title: "Risk mitigation",
    description:
      "Spread your risk and stay secure with our one-of-a-kind solution.",
  },
];

const DisputeTypes: React.FC = () => {
  // tweak this to resize card height (in rem). Each card uses this height,
  // and the hero image height is computed as 2 * CARD_HEIGHT_REM + gap between rows (in rem).
  const CARD_HEIGHT_REM = 18; // ~18rem ≈ 288px (adjust as needed)
  const ROW_GAP_REM = 1.5; // tailwind gap-y-6 equals 1.5rem
  const heroHeightCalc = `calc(${CARD_HEIGHT_REM}rem * 2 + ${ROW_GAP_REM}rem)`;

  return (
    <section className="w-full bg-[#F5F4F3] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* two-column: left = card grid, right = hero image (fixed width on xl) */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_520px] gap-8 items-start">
          {/* Left: 2x2 card grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {disputes.map((d, i) => (
                <article
                  key={i}
                  className="relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between"
                  style={{ height: `${CARD_HEIGHT_REM}rem` }}
                >
                  {/* top-left icon */}
                  <div className="w-fit">
                    <div className="inline-flex items-center justify-center border border-gray-200 rounded-md px-2 py-1 bg-white">
                      {d.icon}
                    </div>
                  </div>

                  {/* content (bottom) */}
                  <div className="mt-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {d.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: hero image — same visual height as the two stacked cards */}
          <div className="hidden xl:block">
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-transparent"
              style={{ height: heroHeightCalc }}
            >
              <Image
                src="/assets/people.png"
                alt="Happy team collaborating"
                fill
                sizes="520px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* For smaller screens show full-width image stacked under/above (optional) */}
          <div className="block xl:hidden relative -mx-6 w-[calc(100%+3rem)] h-64 overflow-hidden rounded-2xl">
            <Image
              src="/assets/people.png"
              alt="Happy team collaborating"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisputeTypes;

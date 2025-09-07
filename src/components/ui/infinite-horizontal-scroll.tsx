"use client";

import { useEffect, useRef } from "react";
import React from "react";

// 1. SVG Icon Component for 'berry'
const BerryIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="inline-block mr-2 align-middle"
    aria-hidden="true"
  >
    <circle
      cx="11"
      cy="14"
      r="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11 9L14 6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6L14 6L14 8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9.5" cy="13" r="0.5" fill="currentColor" />
    <circle cx="12.5" cy="13" r="0.5" fill="currentColor" />
    <circle cx="11" cy="15.5" r="0.5" fill="currentColor" />
  </svg>
);

// 2. Data for the scrolling items, matching the image
const scrollItems = [
  { name: "bluebird" },
  { name: "Galaxy" },
  { name: "berry", icon: <BerryIcon /> },
  { name: "Chameleon" },
  { name: "SHIP4450" },
];

// 3. Define the types for props for better code quality
interface ScrollItem {
  name: string;
  icon?: React.ReactNode;
}

interface InfiniteHorizontalScrollProps {
  items: ScrollItem[];
  speed?: "fast" | "slow" | "normal";
  direction?: "left" | "right";
  className?: string;
}

// 4. The main InfiniteHorizontalScroll component
export function InfiniteHorizontalScroll({
  items,
  speed = "normal",
  direction = "left",
  className = "",
}: InfiniteHorizontalScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(
        ".scroller__inner",
      ) as HTMLElement;
      if (!scrollerInner) return;

      // Make a copy of the items to create the infinite loop
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, [items]);

  return (
    <div
      ref={scrollerRef}
      className={`
        scroller w-full
        data-[animated=true]:overflow-hidden
        data-[animated=true]:[-webkit-mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]
        data-[animated=true]:[mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)]
        ${className}
      `}
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller__inner py-3 flex gap-x-8 items-center data-[animated=true]:w-max data-[animated=true]:flex-nowrap data-[animated=true]:animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-gray-600 font-semibold text-2xl flex items-center justify-center whitespace-nowrap"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

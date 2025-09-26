"use client";

import { useState } from "react";
import Image from "next/image";
import HighlightedText from "../ui/highlighted-text";
import { Badge } from "../ui/badge";
import { Fraunces } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
});

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <div className="flex flex-col gap-4 p-6 rounded-3xl transition-shadow duration-300 min-w-80 max-w-80">
    <Image src={image} alt={title} width={320} height={500} />
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

const cards = [
  {
    title: "Sports Disputes",
    description:
      "Resolve sports-related conflicts efficiently through a neutral forum",
    image: "/assets/sports.png",
  },
  {
    title: "E-commerce Disputes",
    description:
      "Designed to address consumer complaints, product issues & refund failures.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "Art Disputes",
    description:
      "Address issues of authenticity, ownership, provenance, copyright & exhibition agreements.",
    image: "/assets/art.png",
  },
  {
    title: "Sports Disputes",
    description:
      "Resolve sports-related conflicts efficiently through a neutral forum",
    image: "/assets/sports.png",
  },
  {
    title: "E-commerce Disputes",
    description:
      "Designed to address consumer complaints, product issues & refund failures.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "Art Disputes",
    description:
      "Address issues of authenticity, ownership, provenance, copyright & exhibition agreements.",
    image: "/assets/art.png",
  },
  {
    title: "Sports Disputes",
    description:
      "Resolve sports-related conflicts efficiently through a neutral forum",
    image: "/assets/sports.png",
  },
  {
    title: "E-commerce Disputes",
    description:
      "Designed to address consumer complaints, product issues & refund failures.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "Art Disputes",
    description:
      "Address issues of authenticity, ownership, provenance, copyright & exhibition agreements.",
    image: "/assets/art.png",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const maxIndex = Math.max(0, cards.length - cardsPerView);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="flex flex-col gap-20 justify-center items-center mx-36 mt-[74px]">
      <div className="flex">
        <Badge
          className={`bg-[#DBF9B8] text-black rounded-[12px] size-8 ${fraunces.className}`}
        >
          मंच
        </Badge>
        <Badge className="text-sm bg-[#FBFBFB] text-[#2B2D2D]">
          Meet मंच manch
        </Badge>
      </div>
      <h1 className="text-[42px] font-inter font-medium text-center leading-tight w-full">
        The Opportunity for Justice in a{" "}
        <HighlightedText>virtual world.</HighlightedText>
      </h1>

      <div className="relative w-full max-w-6xl">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-[#2B2D2D] shadow-lg rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-900 transition-colors duration-200"
        >
          <ChevronLeftIcon className="size-6 text-white" />
        </button>

        <button
          onClick={scrollRight}
          disabled={currentIndex === maxIndex}
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-[#2B2D2D] shadow-lg rounded-full w-12 h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-900 transition-colors duration-200"
        >
          <ChevronRightIcon className="size-6 text-white" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (320 + 16)}px)`, // 320px card width + 16px gap
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

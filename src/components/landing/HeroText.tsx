import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, Play, SwatchBookIcon } from "lucide-react";

export function HeroText() {
  return (
    <div className="flex mx-10 mt-56 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-1.5">
            <h1 className="text-5xl font-inter text-[#2B2D2D] leading-tight">
              <span className="block">Dispute Resolution for</span>
              <span className="block">the Digital Generation</span>
            </h1>
          </div>

          <p className="text-base mr-32 text-[#6B7280] font-inter leading-relaxed max-w-xl">
            The all-in-one financial platform built for startups and growing
            companies.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left Group: Ratings */}
            <div className="flex items-center space-x-2.5">
              <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-black fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#2B2D2D] font-medium text-sm">
                4.9 rating
              </span>
              <ChevronRight className="w-4 h-4 text-[#2B2D2D]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <div className="bg-white rounded-2xl flex flex-col gap-4 px-5 py-4 w-56 h-fit">
          <div className="flex gap-4">
            <SwatchBookIcon />
            <p className="font-inter font-semibold text-lg text-[#2B2D2D]">
              Starter Guide
            </p>
          </div>
          <span className="font-inter font-normal text-lg text-[#2B2D2D]">
            We’ve got you, learn how to use Manch.
          </span>
          <button className="bg-[#DBF9B8] py-3 px-10">Check it out</button>
        </div>
        <div className="flex flex-col sm:flex-row items-end">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="bg-[#2B2D2D] hover:bg-[#1F2121] text-white rounded-lg px-8 py-4 text-lg font-medium flex items-center space-x-2 h-auto">
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Button>

            <div className="flex items-center space-x-2 text-[#2B2D2D] cursor-pointer group">
              <Play className="size-4 text-black ml-0.5" />
              <span className="text-lg font-medium">See Manch in action</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

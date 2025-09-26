import { BookOpen } from "lucide-react";

export const StarterGuide = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl flex flex-col gap-4 px-4 py-4 w-56 h-fit shadow-lg border border-gray-200 sm:bottom-4 sm:right-4 sm:w-52 sm:px-3 sm:py-3 md:bottom-6 md:right-6 md:w-56 md:px-4 md:py-4 lg:bottom-8 lg:right-8 lg:w-60 lg:px-5 lg:py-5">
      <div className="flex gap-3 sm:gap-2">
        <BookOpen className="w-6 h-6 text-[#2B2D2D] sm:w-5 sm:h-5" />
        <p className="font-inter font-semibold text-lg text-[#2B2D2D] sm:text-base lg:text-lg">
          Starter Guide
        </p>
      </div>
      <span className="font-inter font-normal text-base text-[#2B2D2D] sm:text-sm lg:text-base">
        We've got you, learn how to use Manch.
      </span>
      <button className="bg-[#DBF9B8] py-3 px-8 rounded-lg font-inter font-medium text-sm hover:bg-[#C8E9A8] transition-colors duration-200 sm:py-2 sm:px-6 sm:text-xs lg:py-3 lg:px-8 lg:text-sm">
        Check it out
      </button>
    </div>
  );
};

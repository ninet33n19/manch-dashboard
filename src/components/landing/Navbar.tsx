"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      // Scrolling down past a threshold
      setIsVisible(false);
    } else {
      // Scrolling up or near the top
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <nav
      className={cn(
        "fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full",
      )}
    >
      <div className="flex items-center space-x-4 md:space-x-6 rounded-2xl bg-[#2B2D2D] px-3 py-3 shadow-lg backdrop-blur-md">
        {/* Green square element */}
        <div className="w-10 h-10 bg-[#D8F9B8] rounded-lg flex-shrink-0 flex items-center justify-center">
          <span className="text-base font-bold text-black">मंच</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/the-panel" passHref className="text-white py-2.5 px-3">
            <span className="block min-[1320px]:hidden">Panel</span>
            <span className="hidden min-[1320px]:block">The Panel</span>
          </Link>
          <Link href="/academy" passHref className="text-white py-2.5 px-3">
            Academy
          </Link>
          <Link href="/blog" passHref className="text-white py-2.5 px-3">
            Blog
          </Link>
          <Link href="/contact" passHref className="text-white py-2.5 px-3">
            Contact
          </Link>
        </div>

        {/* Login / Sign Up Button */}
        <Link href="/home" passHref>
          <Button className="bg-white text-gray-900 hover:bg-gray-100/90 rounded-md h-10 px-6 py-3 font-normal text-base whitespace-nowrap">
            Login / Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
}

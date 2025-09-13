import { Instagram, Linkedin, Globe, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface FooterProps {
  footerText: string;
  className?: string;
}

const Footer = ({ footerText, className }: FooterProps) => {
  return (
    <footer className="mx-2 bg-[#E7E6E4] mt-4 rounded-2xl">
      <div className="pt-16 px-10 flex justify-between">
        <h1 className={`font-inter font-medium text-[#2B2D2D] ${className}`}>
          {footerText}
        </h1>
        <button className="flex gap-2 bg-[#2B2D2D] items-center justify-center w-48 h-12 rounded-xl">
          <img src="/icons/sparkle.svg" />
          <span className="font-inter font-medium text-white text-lg">
            Try Finns Today
          </span>
        </button>
      </div>
      <div className="pt-48 px-10">
        {/*
          - Replaced `flex justify-between` with `grid grid-cols-4 gap-8`.
          - CSS Grid is ideal for creating a column layout like this.
          - `grid-cols-4` creates four columns of equal width.
          - `gap-8` adds consistent spacing between the columns.
        */}
        <div className="grid grid-cols-4 gap-8">
          {/* Product Column */}
          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Product
            </h2>
            {/* Added `space-y-3` for vertical spacing between list items */}
            <ul className="font-inter font-medium text-lg text-[#2B2D2D] space-y-3">
              {/* Corrected "Manch" to "Finns" to match the image */}
              <li>Why Finns</li>
              <li>Platform</li>
              <li>Pricing</li>
              <li>What's new</li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Solutions
            </h2>
            <ul className="font-inter font-medium text-lg text-[#2B2D2D] space-y-3">
              <li>By product</li>
              {/* Added a flex container to align the text and the "New" tag */}
              <li className="flex items-center gap-2">
                For founders
                {/* Added the "New" tag as seen in the image */}
                <span className="bg-[#D6FFD6] text-[#008000] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  New
                </span>
              </li>
              <li>For startups</li>
              <li>For enterprises</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Company
            </h2>
            <ul className="font-inter font-medium text-lg text-[#2B2D2D] space-y-3">
              {/* Corrected casing to match the image */}
              <li>About us</li>
              <li>Contact</li>
              <li>Newsroom</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Resources
            </h2>
            <ul className="font-inter font-medium text-lg text-[#2B2D2D] space-y-3">
              <li>Blog</li>
              <li>Help</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="pt-48 pb-8">
          <div className="">
            {/* Top Row: Logo and Avatars */}
            <div className="flex justify-between items-start mb-32">
              {/* Logo */}
              <div className="flex items-center">
                {/*
                      This is a placeholder for your logo.
                      Replace it with your actual <img /> or <svg /> component.
                    */}
                <span className="text-4xl font-semibold text-[#2B2D2D]">
                  Manch
                </span>
              </div>

              {/* Overlapping Avatars */}
              {/*
                    - The `flex` container arranges the avatars horizontally.
                    - `-space-x-4` creates the overlapping effect by applying a negative margin.
                    - `border-2 border-black` adds a border that matches the background,
                      ensuring a clean visual separation between the stacked avatars.
                  */}
              <div className="flex -space-x-4">
                <Avatar className="h-12 w-12 border-2 border-black">
                  <AvatarImage
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User 1"
                  />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-black">
                  <AvatarImage
                    src="https://i.pravatar.cc/150?img=2"
                    alt="User 2"
                  />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2 border-black">
                  <AvatarImage
                    src="https://i.pravatar.cc/150?img=3"
                    alt="User 3"
                  />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Bottom Row: Copyright and Social Icons */}
            <div className="flex justify-between items-center">
              {/* Copyright Text */}
              <p className="text-sm">
                © 2025 Finns by Motiondrops.co, a premium SaaS template
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Website"
                  className="hover:text-white transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="hover:text-white transition-colors"
                >
                  {/* Using the Mail icon to represent the '@' symbol */}
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

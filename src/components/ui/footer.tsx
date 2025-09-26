import { Instagram, Linkedin, Globe, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

import { fraunces, ebGaramond } from "@/util/fonts";

interface FooterProps {
  footerText: string;
  className?: string;
}

const Footer = ({ footerText, className }: FooterProps) => {
  return (
    <footer className="mx-2 bg-transparent mt-4 rounded-2xl font-inter">
      <div className="pt-16 px-10 flex justify-between">
        <h1
          className={`font-inter font-medium text-[32px] max-w-2xl text-[#2B2D2D] ${className}`}
        >
          {footerText}
        </h1>
        <button className="flex gap-2 bg-[#2B2D2D] items-center justify-center w-48 h-12 rounded-xl">
          <img src="/icons/sparkle.svg" />
          <span className="font-medium text-white text-lg">
            Try Finns Today
          </span>
        </button>
      </div>
      <div className="pt-48 px-10 z-0 relative">
        {/* Dot grid background with aggressive blur - only affects the background */}
        <div className="absolute inset-0 bg-[url('/assets/dot-grid.svg')] bg-cover bg-center bg-no-repeat opacity-[0.26]">
          {/* Aggressive blur layers only for the dot grid background */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent blur-[8px]"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/30 to-transparent blur-[6px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[4px]"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/35 to-transparent blur-[5px]"></div>
        </div>
        <div className="grid grid-cols-4 gap-8 relative z-10 p-4">
          <div className="flex flex-col">
            <h2 className="font-medium text-2xl text-[#2B2D2D] mb-4">
              Product
            </h2>
            <ul className="font-medium text-lg text-[#666666] space-y-3">
              <li>Why Manch</li>
              <li>Platform</li>
              <li>Pricing</li>
              <li>What's new</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-medium text-2xl text-[#2B2D2D] mb-4">
              Solutions
            </h2>
            <ul className="font-medium text-lg text-[#666666] space-y-3">
              <li>By product</li>
              <li className="flex items-center gap-2">For founders</li>
              <li>For startups</li>
              <li>For enterprises</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-medium text-2xl text-[#2B2D2D] mb-4">
              Company
            </h2>
            <ul className="font-medium text-lg text-[#666666] space-y-3">
              <li>About us</li>
              <li>Contact</li>
              <li>Newsroom</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-medium text-2xl text-[#2B2D2D] mb-4">
              Resources
            </h2>
            <ul className="font-medium text-lg text-[#666666] space-y-3">
              <li>Blog</li>
              <li>Help</li>
              <li>API</li>
              <li>
                <Link href="/glossary">Glossary</Link>
              </li>
              <li>
                <Link href="/coc">Code of Conduct</Link>{" "}
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-48 pb-8 relative z-10 p-4">
          <div className="">
            <div className="flex justify-between items-start mb-32">
              <div className="flex items-center gap-2">
                <span
                  className={`text-4xl text-[#2B2D2D] ${fraunces.className} font-bold`}
                >
                  मंच
                </span>
                <span
                  className={`text-4xl text-[#2B2D2D] ${ebGaramond.className} italic`}
                >
                  manch
                </span>
              </div>

              <div className="flex -space-x-4">
                <Avatar className="h-12 w-12 border-2">
                  <AvatarImage src="/assets/avatar4.jpeg" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2">
                  <AvatarImage src="/assets/avatar2.jpeg" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2">
                  <AvatarImage src="/assets/avatar3.jpeg" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12 border-2">
                  <AvatarImage src="/assets/avatar1.jpeg" alt="User 4" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm">
                Manch is not a law firm and does not provide legal advice. No
                Attorney-Client relationship is created by use of these
                materials or services.
                <br />
                Users are encouraged to seek independent legal counsel if they
                require legal advice.
                <br />@ 2025 by Clearcase Technology Solutions Pvt Ltd. All
                Rights Reserved.
              </p>

              <div className="flex items-center gap-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors font-inter"
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

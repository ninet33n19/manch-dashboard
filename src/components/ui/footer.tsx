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
        <h1
          className={`font-inter font-medium text-[32px] max-w-2xl text-[#2B2D2D] ${className}`}
        >
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
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Product
            </h2>
            <ul className="font-inter font-medium text-lg text-[#666666] space-y-3">
              <li>Why Finns</li>
              <li>Platform</li>
              <li>Pricing</li>
              <li>What's new</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Solutions
            </h2>
            <ul className="font-inter font-medium text-lg text-[#666666] space-y-3">
              <li>By product</li>
              <li className="flex items-center gap-2">
                For founders
              </li>
              <li>For startups</li>
              <li>For enterprises</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Company
            </h2>
            <ul className="font-inter font-medium text-lg text-[#666666] space-y-3">
              <li>About us</li>
              <li>Contact</li>
              <li>Newsroom</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h2 className="font-inter font-medium text-2xl text-[#2B2D2D] mb-4">
              Resources
            </h2>
            <ul className="font-inter font-medium text-lg text-[#666666] space-y-3">
              <li>Blog</li>
              <li>Help</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="pt-48 pb-8">
          <div className="">
            <div className="flex justify-between items-start mb-32">
              <div className="flex items-center">
                <span className="text-4xl font-semibold text-[#2B2D2D] font-inter">
                  Manch
                </span>
              </div>

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

            <div className="flex justify-between items-center">
              <p className="text-sm font-inter">
                © 2025 Finns by Motiondrops.co, a premium SaaS template
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

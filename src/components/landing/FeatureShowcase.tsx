import Image from "next/image";
import { Badge } from "../ui/badge";
import HighlightedText from "../ui/highlighted-text";
import { ScanBarcodeIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-[#EDEBEA] p-8 rounded-3xl flex flex-col font-inter ${className}`}
    >
      <h2 className="text-3xl text-[#2B2D2D] mb-3 leading-tight font-inter font-medium">
        {title}
      </h2>

      <p className="text-xl text-[#666666] font-sans pb-10">{description}</p>

      <div className="mt-8 flex-grow mx-auto justify-center items-center">
        {children}
      </div>
    </div>
  );
};

const QRCodeCard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl bg-white">
      <div className="flex gap-2.5">
        <ScanBarcodeIcon />
        <span className="font-inter font-medium text-lg text-[#2B2D2D]">
          Code Scan
        </span>
      </div>
      <div className="bg-[#F7F6F6] py-8 px-[75px] rounded-2xl">
        <Image src="/assests/qr.svg" width={170} height={170} alt={""} />
      </div>
      <button className="bg-white rounded-full border py-3.5">
        Renew Code
      </button>
    </div>
  );
};

export function FeatureShowcase() {
  return (
    <div className="mt-40 mx-10 ">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex gap-1">
          <Badge className="bg-[#DBF9B8] text-black">मंच</Badge>
          <span className="text-sm">Meet Manch</span>
        </div>
        <h1 className="text-5xl text-center mt-6 w-full leading-tight font-inter font-medium">
          Disputes Resolved in Clicks,{" "}
          <HighlightedText>Not Courtroom</HighlightedText>
        </h1>
      </div>
      <div className="flex mt-20 gap-4">
        <Card
          title="Our Resolution Fees "
          description="Convert currencies using real market rates, save money on international transfers."
        >
          <Image
            src="/assests/currency.png"
            height={310}
            width={256}
            alt={""}
          />
        </Card>
        <Card
          title="Our Dispute Resolution Rules"
          description="Curious minds get rewarded — scan this QR code to read our Rules!"
        >
          <QRCodeCard />
        </Card>
        <Card
          title="Apply to be a Neutral and join our Roaster!"
          description="Keep your teams and data perfectly organized in separate workspaces."
        >
          <Image
            src="/assests/workspaces.png"
            height={310}
            width={279}
            alt={""}
          />
        </Card>
      </div>
      <div className="flex mt-4 pt-14 pl-10 bg-[#f7f6f2] justify-between rounded-3xl">
        <div className="flex flex-col gap-6 mr-8 max-w-lg">
          <h1 className="font-inter font-medium text-3xl">
            Smart Resolutions Powered by{" "}
            <HighlightedText>Smarter Technology.</HighlightedText>
          </h1>
          <p className="font-inter font-normal text-[#666666] text-xl">
            Every case is assigned its own private workplace which is a
            dedicated site where parties & arbitrators can access all relevant
            materials.
          </p>
        </div>
        <Image src="/dashboard.png" alt="" width={1000} height={1000} />
      </div>
    </div>
  );
}

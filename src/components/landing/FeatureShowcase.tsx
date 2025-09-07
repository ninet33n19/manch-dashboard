import Image from "next/image";
import { Badge } from "../ui/badge";

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-[#f7f6f2] p-8 rounded-3xl flex flex-col font-inter ${className}`}
    >
      <h2 className="text-4xl text-[#3d3d3d] mb-3 leading-tight">{title}</h2>

      <p className="text-base text-gray-500 font-sans pb-10">{description}</p>

      <div className="mt-8 flex-grow">{children}</div>
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
        <h1 className="text-5xl text-center mt-6 max-w-4xl leading-tight">
          Your money working <br /> hard as you do
        </h1>
      </div>
      <div className="flex mt-20 gap-4">
        <Card
          title="Know the cost to resolve your disputes"
          description="Convert currencies using real market rates, save money on international transfers."
          className="items-center justify-center"
        >
          <Image
            src="/assests/currency.png"
            height={310}
            width={256}
            alt={""}
          />
        </Card>
        <Card
          title="Know our Dispute Resolution Rules"
          description="Curious minds get rewarded — scan this QR code to read our Rules!"
          className="items-center justify-center"
        >
          <Image src="/assests/qr-scan.png" height={310} width={277} alt={""} />
        </Card>
        <Card
          title="Multiple teams, multiple spaces"
          description="Keep your teams and data perfectly organized in separate workspaces."
          className="items-center justify-center"
        >
          <Image
            src="/assests/workspaces.png"
            height={310}
            width={279}
            alt={""}
          />
        </Card>
      </div>
      <div className="flex mt-4 pt-14 pl-10 bg-[#f7f6f2] rounded-3xl">
        <div className="flex flex-col gap-6 mr-8 max-w-lg">
          <h1 className="font-inter text-4xl">
            Real-time case tracking with AI negotiation
          </h1>
          <p className="font-inter text-[14px]">
            Empower your negotiations with our advanced AI tools that analyze
            contract clauses, flag risks, and suggest optimized language. Gain
            real-time insights and benchmark terms against historical data,
            enabling faster, data-driven decisions and shorter deal cycles.
          </p>
        </div>
        <Image src="/dashboard.png" alt="" width={1000} height={1000} />
      </div>
    </div>
  );
}

import Image from "next/image";
import { Badge } from "../ui/badge";
import HighlightedText from "../ui/highlighted-text";
import {
  CheckIcon,
  ChevronDownIcon,
  GripVerticalIcon,
  ScanBarcodeIcon,
  SearchIcon,
} from "lucide-react";
import { Fraunces } from "next/font/google";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { ecommerceDisputesFaqData } from "@/data/ecommerce-disputes-faq-data";

const fraunces = Fraunces({
  subsets: ["latin"],
});

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  isHorizontal?: boolean;
}

const Card = ({
  title,
  description,
  children,
  className = "",
  isHorizontal = false,
}: CardProps) => {
  if (isHorizontal) {
    return (
      <div
        className={`bg-[#EDEBEA] p-8 rounded-3xl flex flex-row xl:flex-col justify-between xl:justify-start font-inter ${className} w-full`}
      >
        <div className="flex-1 xl:flex-none">
          <h2 className="text-[#2B2D2D] mb-3 leading-tight font-inter font-medium text-[26px]">
            {title}
          </h2>
          <p className="text-xl text-[#666666] font-sans">{description}</p>
        </div>
        <div className="flex-1 xl:flex-none pt-0 xl:pt-10">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#EDEBEA] p-8 rounded-3xl flex flex-col font-inter ${className} w-full`}
    >
      <div>
        <h2 className="text-[#2B2D2D] mb-3 leading-tight font-inter font-medium text-[26px]">
          {title}
        </h2>
        <p className="text-xl text-[#666666] font-sans">{description}</p>
      </div>
      <div className="pt-10">{children}</div>
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
      <div className="bg-[#F7F6F6] py-5 px-[75px] rounded-2xl flex justify-center">
        <Image src="/assets/qr.svg" width={170} height={170} alt={""} />
      </div>
      <button className="bg-white rounded-full border py-3.5">
        Renew Code
      </button>
    </div>
  );
};

const feesDisputeContent: {
  id: number;
  emoji: string;
  disputeType: string;
  selected: boolean;
}[] = [
  {
    id: 1,
    emoji: "🇺🇸",
    disputeType: "Online Arbitration",
    selected: true,
  },
  { emoji: "🇯🇵", id: 2, disputeType: "Online Mediation", selected: true },
  { emoji: "🇮🇩", id: 3, disputeType: "AI Insight", selected: true },
  { emoji: "🇦🇺", id: 4, disputeType: "Expidited Arbitration", selected: true },
];

const FeesDisputeCard = () => {
  return (
    <div className="flex flex-col gap-2.5">
      {/*Search Bar*/}
      <div className="bg-white flex p-[18px] rounded-full gap-3 w-full">
        <SearchIcon />
        <div className="flex">
          <p className="text-black font-semibold">|</p>
          <p className="font-inter font-regular text-[18px] text-[#8C8C8C]">
            Type Dispute Value
          </p>
        </div>
      </div>

      {/*Table*/}
      <Table className="bg-white rounded-xl p-4">
        <TableBody>
          {feesDisputeContent.map((content) => (
            <TableRow key={content.id}>
              <TableCell className="pl-4 py-4">{content.emoji}</TableCell>
              <TableCell className="pl-4 py-4">{content.disputeType}</TableCell>
              <TableCell className="pl-4 py-4">
                <Checkbox defaultChecked />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const WorkSpaceCard = () => {
  return (
    <div className="max-w-sm rounded-2xl p-5 font-inter">
      <div className="flex flex-col gap-2.5">
        {/* Top pill */}
        <div className="bg-[#2B2D2D] flex w-full items-center rounded-full pr-6 pl-3.5 py-3">
          <span className="text-white font-inter font-medium text-[18px] flex-1 text-center">
            Fill Application Form
          </span>
          <div className="flex items-center">
            <ChevronDownIcon className="text-white" />
          </div>
        </div>

        {/* Expertise Card (white area from the image) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4">
          <div className="text-[#666666] font-inter font-normal text-[16px] mb-4">
            Expertise
          </div>

          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GripVerticalIcon className="size-[18px] mr-2.5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img src="/icons/fintechs.svg" />
                  </div>
                  <div className="text-[18px] text-[#2B2D2] font-inter font-medium">
                    Fintechs
                  </div>
                </div>
              </div>

              {/* selected check */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center">
                  <CheckIcon />
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GripVerticalIcon className="size-[18px] mr-2.5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                    <img src="/icons/sports" />
                  </div>
                  <div className="text-[18px] text-[#2B2D2] font-inter font-medium">
                    Sports
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600">
                  ⌘ 1
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GripVerticalIcon className="size-[18px] mr-2.5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <img src="/icons/maritime.svg" />
                  </div>
                  <div className="text-[18px] text-[#2B2D2] font-inter font-medium">
                    Maritime
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md border border-gray-200 px-3 py-1 text-sm text-gray-600">
                  ⌘ 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FeatureShowcase() {
  return (
    <div className="mt-[90px] mx-10 ">
      <div className="flex flex-col justify-center items-center gap-8">
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
        <h1 className="text-[45px] text-center mt-6 w-full leading-tight font-inter font-medium text-[#2B2D2D]">
          Disputes Resolved in Clicks,{" "}
          <HighlightedText>Not Courtroom</HighlightedText>
        </h1>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 mt-20 gap-4">
        <Card
          title="Know the fees for your disputes"
          description="Convert currencies using real market rates, save money on international transfers."
          className="flex-1"
        >
          <FeesDisputeCard />
        </Card>
        <Card
          title="Our Dispute Resolution Rules"
          description="Curious minds get rewarded — scan this QR code to read our Rules!"
          className="flex-1"
        >
          <QRCodeCard />
        </Card>
        <Card
          title="Apply to be a Neutral and join our Roaster!"
          description="Keep your teams and data perfectly organized in separate workspaces."
          className="flex-1 col-span-2 xl:col-span-1"
          isHorizontal={true}
        >
          <WorkSpaceCard />
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

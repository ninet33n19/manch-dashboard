import { RockingChair, RockingChairIcon, User2Icon } from "lucide-react";
import { Badge } from "../ui/badge";

interface PlatformFeaturesCardProps {
  icon: React.ReactNode;
  badgeName: string;
  description: string;
  cardOneImage: React.ReactNode;
  cardOneText: string;
  cardTwoImage: React.ReactNode;
  cardTwoText: string;
}

const PlatformFeaturesCard = ({
  icon,
  badgeName,
  description,
  cardOneImage,
  cardOneText,
  cardTwoImage,
  cardTwoText,
}: PlatformFeaturesCardProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <div className="bg-[#D8F9B8] w-fit px-1.5 py-2 rounded-lg">
            {icon}
          </div>
          <Badge className="bg-white text-[#2B2D2D] text-base font-inter font-normal">
            {badgeName}
          </Badge>
        </div>
        <p className="font-inter font-medium text-4xl text-[#2B2D2D] max-w-lg">
          {description}
        </p>
      </div>
      <div className="flex gap-5 max-w-[850px]">
        <div className="flex flex-col gap-5">
          {cardOneImage}
          <p className="font-inter font-normal text-base text-[#666666] text-wrap">
            {cardOneText}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {cardTwoImage}
          <p className="font-inter font-normal text-base text-[#666666] text-wrap">
            {cardTwoText}
          </p>
        </div>
      </div>
    </div>
  );
};

const PlatformFeatures = () => {
  return (
    <div className="flex flex-col gap-44 mx-11 mt-44">
      <PlatformFeaturesCard
        icon=<img src="/icons/coin.svg" alt="Coin Icon" />
        badgeName="Our Platform"
        description="Multiple Language Interfaces & Integrated Secure Video Conferencing"
        cardOneImage={
          <img
            src="/assets/for-language.png"
            alt="Language Selection Interface"
            className="rounded-2xl h-60"
          />
        }
        cardOneText="Available in European languages plus Arabic and Hindi, with system administration in participants' native language"
        cardTwoImage={
          <img
            src="/assets/id-something.png"
            alt="Integrated Secure Video Conferencing"
            className="rounded-2xl h-60"
          />
        }
        cardTwoText="Fully integrated document management and video conferencing suite with virtual hearings capability"
      />
      <PlatformFeaturesCard
        icon=<User2Icon />
        badgeName="For Business"
        description="E-Signature & Reports"
        cardOneImage=<img src="/assets/01.png" className="rounded-2xl h-60" />
        cardOneText="Built-in eSignature feature for signing documents and converting  handwritten signatures to digital format"
        cardTwoImage=<img src="/assets/02.png" className="rounded-2xl h-60" />
        cardTwoText="Exportable reports of monthly cases by value and dispute type"
      />
      <PlatformFeaturesCard
        icon=<RockingChairIcon />
        badgeName="For Legal Professionals"
        description="Choice of ADR & Shared Documents"
        cardOneImage=<img src="/assets/03.png" className="rounded-2xl h-60" />
        cardOneText="Multiple ADR types including arbitration, adjudication, and  mediation with automatic method configuration"
        cardTwoImage=<img src="/assets/04.png" className="rounded-2xl h-60" />
        cardTwoText="Upload and share documents with other participants, with  encryption for downloads and confidential mediation alerts"
      />
      <PlatformFeaturesCard
        icon=<RockingChairIcon />
        badgeName="For Consumers"
        description="Strategic decisions
        are now real-time"
        cardOneImage=<img src="/assets/05.png" className="rounded-2xl h-60" />
        cardOneText="Fully integrated document management and video  conferencing suite with virtual hearings capability"
        cardTwoImage=<img src="/assets/06.png" className="rounded-2xl h-60" />
        cardTwoText="Negotiate with AI tools that help read contracts, suggest your best settlement options, flag any risks and help you choose a language."
      />
    </div>
  );
};

export default PlatformFeatures;

import { UsersIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import ArbitratorCard from "./ArbitratorCard";

const OurPanel = () => {
  return (
    <div className="flex flex-col mt-56 mx-10">
      <div className="flex items-center justify-center">
        <Badge className="bg-[#D8F9B8] font-inter font-normal text-sm text-black">
          <UsersIcon className="size-4" />
        </Badge>
        <Badge className="bg-[#FAFAF9] font-inter font-normal text-sm text-black">
          Our Panel
        </Badge>
      </div>
      <div className="mt-8 text-center">
        <p className="text-5xl font-medium font-inter">
          A trusted panel of experts guiding you through every step of the
          process
        </p>
      </div>
      <div className="mt-32">
        <ArbitratorCard
          name="Adv. Ajinkya Gaikwad"
          description="Counsel at Bombay High Court Ace Integrity Legal Solutions"
          imageUrl="/arbitators/ajinkya.png"
        />
      </div>
    </div>
  );
};

export default OurPanel;

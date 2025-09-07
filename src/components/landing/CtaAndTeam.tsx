import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function CtaAndTeam() {
  return (
    <div className="mt-56 mx-10">
      <div className="bg-[#2B2D2D] w-full py-20 rounded-4xl flex flex-col gap-10 justify-center items-center">
        <div className="flex items-center justify-center">
          <Badge className="bg-[#D8F9B8] text-[#2b2d2d] text-lg">मंच</Badge>
          <Badge className="bg-[#3C3E3E] text-white text-lg">Manch</Badge>
        </div>
        <p className="text-center text-6xl text-white max-w-4xl leading-relaxed font-inter">
          Mastering the Art & Science of Dispute Resolution
        </p>
        <Button className="bg-[#D8F9B8] text-[#2B2D2D] h-12 px-5">
          Learn More
        </Button>
      </div>
    </div>
  );
}

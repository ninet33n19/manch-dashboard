import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function CtaAndTeam() {
  return (
    <div className="mt-56 mx-10">
      <div className="bg-[#2B2D2D] w-full py-20 rounded-4xl flex flex-col gap-10 justify-center items-center">
        <div className="flex items-center justify-center">
          <Badge className="bg-[#D8F9B8] text-[#2b2d2d] text-base">मंच</Badge>
          <Badge className="bg-[#3C3E3E] text-white text-base">
            Try मंच Manch
          </Badge>
        </div>
        <p className="text-center text-5xl text-white max-w-5xl leading-tight font-inter">
          Turning disputes into agreements, online with our platform.
        </p>
        <Button className="bg-[#D8F9B8] text-[#2B2D2D] h-12 px-5">
          Learn More
        </Button>
      </div>
    </div>
  );
}

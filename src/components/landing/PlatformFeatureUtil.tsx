import { FileTextIcon, GripVerticalIcon, VideoIcon } from "lucide-react";

const OurPlatform1Util = () => {
  return (
    <div className="bg-[#E9E9E7] px-12 py-10 flex flex-col gap-10 rounded-3xl min-h-[240px] xl:min-h-[280px]">
      <div className="bg-transparent w-full h-full">
        <img src="/assets/language-slide-1.svg" />
      </div>
      <div className="bg-transparent w-full h-full">
        <img src="/assets/language-slide-2.svg" />
      </div>
    </div>
  );
};

const OurPlatform2Util = () => {
  return (
    <div className="bg-[#E9E9E7] px-12 py-10 flex flex-col gap-10 rounded-3xl min-h-[240px] xl:min-h-[280px]">
      <div className="flex items-center gap-2.5">
        <div className="p-4 rounded-full bg-[#F2F2F2] flex items-center justify-center">
          <VideoIcon className="size-6" />
        </div>
        <p className="text-[#666666] font-inter font-normal text-base">
          Integrated Secure Video Conferencing
        </p>
        <img src="/assets/video-conference.png" />
      </div>
      <div className="flex items-center gap-2.5">
        <GripVerticalIcon className="size-6 text-[#666666]" />
        <div>
          <FileTextIcon className="size-8 bg-[#D8F9B8] rounded-[6px] p-1.5" />
        </div>
        <p className="text-[#2B2D2D] font-inter font-normal text-base">
          First Hearing <span className="text-[#666666]">(ending in 1234)</span>
        </p>
      </div>
    </div>
  );
};

export { OurPlatform1Util, OurPlatform2Util };

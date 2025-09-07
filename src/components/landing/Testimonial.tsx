import Image from "next/image";

export function Testimonial() {
  return (
    <div className="mt-56 mx-10">
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-inter font-normal text-center max-w-3xl leading-relaxed">
          "A great impact of Manch has been the time-savings. We’ve shortened
          the time for settling disputes."
        </p>
        <div className="flex gap-4">
          <Image
            src="/assests/zoie.png"
            width={64}
            height={64}
            alt="Founder Zoie Disha Jain"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-inter font-semibold text-[#2B2D2D]">
              Zoie Disha Jain
            </p>
            <p className="text-lg font-normal text-[#666666]">
              Founder & CEO @MANCH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

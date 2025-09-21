import Image from "next/image";

const companies = [
  {
    name: "Berry",
    image: "/companies/berry.svg",
  },
  {
    name: "Bluebird",
    image: "/companies/bluebird.svg",
  },
  {
    name: "Chameleon",
    image: "/companies/chameleon.svg",
  },
  {
    name: "Galaxy",
    image: "/companies/galaxy.svg",
  },
  {
    name: "SHIP4450",
    image: "/companies/SHIP4450.svg",
  },
];

export function DashboardShowcase() {
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      <div className="bg-[#D8F9B8] rounded-3xl p-12">
        <Image
          src="/dashboard.png"
          alt="Dashboard Showcase"
          width={1000}
          height={1000}
        />
      </div>
      {/*<div className="flex flex-col gap-8">*/}
      {/*<InfiniteHorizontalScroll items={companies} />*/}
      {/*</div>*/}
    </div>
  );
}

import { cocData } from "@/data/coc-data";
import Link from "next/link";

const CodeOfConductPage = () => {
  return (
    <div className="mx-10 mt-40 flex">
      <aside className="flex flex-col text-lg gap-5 font-inter font-normal text-[#666666] min-w-80 text-wrap">
        {cocData.sections.map((item) => (
          <Link
            href={"#" + String(item.id)}
            key={item.id}
            className="block hover:underline"
          >
            {item.title.replace(/^\d+\)\s*/, "")}
          </Link>
        ))}
      </aside>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-4 max-w-[500px] text-wrap">
          <p className="font-inter font-normal text-sm text-[#666666]">
            {cocData.lastUpdated}
          </p>
          <h1 className="font-inter font-medium text-5xl text-black">
            {cocData.title}
          </h1>
          <div>
            {cocData.sections.map((item) => (
              <div key={item.id} className="mt-10">
                <h2
                  className="font-inter font-semibold text-2xl text-black mb-5"
                  id={String(item.id)}
                >
                  {item.title}
                </h2>
                <p className="font-inter font-normal text-lg text-[#666666] whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductPage;

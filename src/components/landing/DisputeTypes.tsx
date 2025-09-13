interface Dispute {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const disputes: Dispute[] = [
  {
    icon: <img src="/icons/coin.svg" />,
    title: "AAA-rated security",
    description:
      "Keep your money safe with our secure and trustworthy account setup.",
  },
  {
    icon: <img src="/icons/yen.svg" />,
    title: "Multi-currency",
    description: "Place deposits in EUR, GBP, USD and 190 more currencies.",
  },
  {
    icon: <img src="/icons/double-coin.svg" />,
    title: "Smart Save™",
    description:
      "Round up every purchase and automatically invest the difference.",
  },
  {
    icon: <img src="/icons/stack.svg" />,
    title: "Risk mitigation",
    description:
      "Spread your risk and stay secure with our one-of-a-kind solution.",
  },
];

// --- DisputeTypes Component ---
const DisputeTypes: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F4F3] py-16 lg:py-24">
      <div className="mx-10 px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side: Text content and dispute cards */}
          <div className="flex-1 lg:max-w-[50%] flex flex-col items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {disputes.map((dispute, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white border p-7 rounded-[28px] gap-48"
                >
                  <div className="text-gray-900 w-fit border px-1.5 py-2 rounded">
                    {dispute.icon}
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {dispute.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {dispute.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 lg:max-w-[50%] flex justify-end">
            <img src="/assests/people.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisputeTypes;

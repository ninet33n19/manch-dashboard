import React from "react";

// --- TYPE DEFINITIONS ---
type FeatureValue = string | boolean;
type PlanFeatures = {
  [key: string]: FeatureValue;
};

type Plan = {
  name: string;
  isPopular: boolean;
  features: PlanFeatures;
};

type Feature = {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

// --- SVG ICON COMPONENTS ---
const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 00-12 0m12 0a9.094 9.094 0 01-12 0m12 0v-2.25m-12 2.25v-2.25m12 0A9.094 9.094 0 006 16.5m12 0a9.094 9.094 0 01-12 0m9-9.75h.008v.008H15V6.75zm-3 0h.008v.008H12V6.75zm-3 0h.008v.008H9V6.75z"
    />
  </svg>
);

const BuildingOfficeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6"
    />
  </svg>
);

const WalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 3V9"
    />
  </svg>
);

const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-18 0h1.5m15 3.75h1.5m-18 0h1.5M12 4.5v15"
    />
  </svg>
);

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5-4.5L7.5 12l2.25 2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
    />
  </svg>
);

const ArrowUpOnSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
    />
  </svg>
);

const ArrowDownOnSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3v11.25"
    />
  </svg>
);

const ArrowPathIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001a.75.75 0 01.75.75v3.503a.75.75 0 01-1.5 0V11.25h-4.992a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75h3.503a.75.75 0 010 1.5H16.023v1.589zM21 15.75v-3.503a.75.75 0 00-1.5 0v3.503a.75.75 0 00.75.75h4.992a.75.75 0 000-1.5h-4.992zM9.348 16.023v-4.992H11.25a.75.75 0 000-1.5H7.5a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.503a.75.75 0 000-1.5h-1.5a.75.75 0 00-.75.75v3.503a.75.75 0 001.5 0v-3.503H9.348z"
    />
  </svg>
);

const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const CircleStackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6z"
    />
  </svg>
);

const CloudIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z"
    />
  </svg>
);

const LockClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

// --- MOCK DATA ---
const plansData: Plan[] = [
  {
    name: "Free",
    isPopular: false,
    features: {
      "Team Members": "3 Users",
      "Organization Management": false,
      Accounts: "1 Account",
      "Transaction Tracking": "100/mo",
      "AI Bookkeeping": "Basic",
      "API Access": "100 calls/day",
      "Export to QuickBooks": true,
      "Export to Xero": false,
      "Data Import & Sync": false,
      "Report Templates": "30",
      "Bank Integration": "2 banks",
      "Expense Categories": "50",
      "Storage Space": "5 GB",
      "Access Control": "View only",
    },
  },
  {
    name: "Starter",
    isPopular: false,
    features: {
      "Team Members": "20 Users",
      "Organization Management": false,
      Accounts: "1 Account",
      "Transaction Tracking": "1,000/mo",
      "AI Bookkeeping": "Basic",
      "API Access": "1,000 calls/day",
      "Export to QuickBooks": true,
      "Export to Xero": true,
      "Data Import & Sync": true,
      "Report Templates": "100+",
      "Bank Integration": "5 banks",
      "Expense Categories": "200",
      "Storage Space": "50 GB",
      "Access Control": "View & comment",
    },
  },
  {
    name: "Pro",
    isPopular: true,
    features: {
      "Team Members": "Unlimited",
      "Organization Management": false,
      Accounts: "Unlimited",
      "Transaction Tracking": "Unlimited",
      "AI Bookkeeping": "Advanced",
      "API Access": "10,000 calls/day",
      "Export to QuickBooks": true,
      "Export to Xero": true,
      "Data Import & Sync": true,
      "Report Templates": "1,000+",
      "Bank Integration": "Unlimited",
      "Expense Categories": "Unlimited",
      "Storage Space": "500 GB",
      "Access Control": "Full access",
    },
  },
  {
    name: "Team",
    isPopular: false,
    features: {
      "Team Members": "Unlimited",
      "Organization Management": true,
      Accounts: "Unlimited",
      "Transaction Tracking": "Unlimited",
      "AI Bookkeeping": "Unlimited",
      "API Access": "Unlimited",
      "Export to QuickBooks": true,
      "Export to Xero": true,
      "Data Import & Sync": true,
      "Report Templates": "Unlimited",
      "Bank Integration": "Unlimited",
      "Expense Categories": "Unlimited",
      "Storage Space": "2 TB",
      "Access Control": "Custom roles",
    },
  },
];

const featuresData: Feature[] = [
  { name: "Team Members", Icon: UserGroupIcon },
  { name: "Organization Management", Icon: BuildingOfficeIcon },
  { name: "Accounts", Icon: WalletIcon },
  { name: "Transaction Tracking", Icon: ChartBarIcon },
  { name: "AI Bookkeeping", Icon: CpuChipIcon },
  { name: "API Access", Icon: CodeBracketIcon },
  { name: "Export to QuickBooks", Icon: ArrowUpOnSquareIcon },
  { name: "Export to Xero", Icon: ArrowDownOnSquareIcon },
  { name: "Data Import & Sync", Icon: ArrowPathIcon },
  { name: "Report Templates", Icon: DocumentTextIcon },
  { name: "Bank Integration", Icon: CircleStackIcon },
  { name: "Expense Categories", Icon: TagIcon },
  { name: "Storage Space", Icon: CloudIcon },
  { name: "Access Control", Icon: LockClosedIcon },
];

const CheckIcon: React.FC = () => (
  <svg
    className="w-5 h-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

// --- HELPER TO RENDER FEATURE VALUE ---
const RenderFeatureValue: React.FC<{ value: FeatureValue }> = ({ value }) => {
  if (value === true) return <CheckIcon />;
  if (value === false) return <span className="text-gray-400 text-xl">-</span>;
  return <span className="text-gray-950 text-sm">{value}</span>;
};

// --- MAIN COMPONENT ---
const ComparePlans: React.FC = () => {
  return (
    <div className="text-black min-h-screen font-sans flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Compare plan features
        </h1>

        <div className="grid grid-cols-5 gap-x-4">
          {/* --- HEADER ROW --- */}
          <div className="col-span-1"></div> {/* Empty cell for alignment */}
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className="col-span-1 text-center bg-gray-50 pt-6 pb-4 rounded-t-xl"
            >
              <h2 className="text-black font-bold text-xl relative inline-block">
                {plan.name}
                {plan.isPopular && (
                  <span className="absolute -top-7 -right-2 transform translate-x-1/2 bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
              </h2>
              <button
                aria-label={`Select ${plan.name} plan`}
                className={`
                                    mt-4 w-32 py-2 rounded-lg text-sm font-semibold transition-colors duration-200
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    ${
                                      plan.isPopular
                                        ? "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800"
                                        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400"
                                    }
                                `}
              >
                Select plan
              </button>
            </div>
          ))}
          {/* --- FEATURE ROWS --- */}
          {featuresData.map(({ name, Icon }) => (
            <React.Fragment key={name}>
              {/* Feature Name Column */}
              <div className="col-span-1 flex items-center gap-3 py-4 border-b border-white/20">
                <Icon className="w-5 h-5 text-gray-900" />
                <span className="text-sm font-medium text-gray-700">
                  {name}
                </span>
              </div>
              {/* Feature Value Columns */}
              {plansData.map((plan) => (
                <div
                  key={`${plan.name}-${name}`}
                  className="col-span-1 flex items-center justify-center py-4 border-b border-white/20"
                >
                  <RenderFeatureValue value={plan.features[name]} />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;

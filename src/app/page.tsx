import { MainCard } from "@/components/dashboard/main-card";
import { ChartBarStacked } from "@/components/ui/bar-chart";
import { CalendarIcon, DollarSignIcon, EuroIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-6">
      {/* Unified grid for both cards and chart */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Cards Wrapper: Spans 2 columns on large screens to match the chart */}
        <div className="lg:col-span-2">
          {/* Inner grid to layout the cards responsively */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MainCard
              icon={<DollarSignIcon className="h-5 w-5 text-green-800" />}
              title={"Active Cases"}
              value={2300}
            />
            <MainCard
              icon={<EuroIcon className="h-5 w-5 text-green-800" />}
              title={"Recovered"}
              value={"€7,164.95"}
            />
            <MainCard
              icon={<CalendarIcon className="h-5 w-5 text-green-800" />}
              title={"Upcoming Hearings"}
              value={"2300 in 2 days"}
            />
          </div>
        </div>

        {/* Chart Wrapper: Also spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ChartBarStacked />
        </div>
      </div>
    </div>
  );
}

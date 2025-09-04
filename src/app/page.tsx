import { ActiveCasesCard } from "@/components/dashboard/main-card";
import { SettlementNotifications } from "@/components/dashboard/notification-card";
import { TasksDataTable } from "@/components/dashboard/task-table";
import { ChartBarStacked } from "@/components/ui/bar-chart";
import {
  CalendarIcon,
  DollarSignIcon,
  EuroIcon,
  PercentIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-50/50 p-4 lg:p-6">
      <div className="w-full flex flex-col items-start gap-6">
        <h1 className="self-stretch font-inter text-2xl font-normal leading-8 tracking-tight text-[#2B2D2D]">
          Claims
        </h1>

        <div className="w-full flex flex-col items-start gap-4">
          <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-4">
            <div className="flex flex-col items-start gap-4 flex-grow w-full">
              <div className="w-full grid grid-cols-4 gap-4">
                <ActiveCasesCard
                  icon={<DollarSignIcon className="size-5" />}
                  title={"Active Cases"}
                  value={2300}
                />
                <ActiveCasesCard
                  icon={<EuroIcon className="size-5" />}
                  title={"Recovered"}
                  value={"€7,164.95"}
                />
                <ActiveCasesCard
                  icon={<CalendarIcon className="size-5" />}
                  title={"Upcoming Hearings"}
                  value={"2300 in 2 days"}
                />
                <ActiveCasesCard
                  icon={<PercentIcon className="size-5" />}
                  title={"Success Rate"}
                  value={"97%"}
                />
              </div>

              <div className="w-full">
                <ChartBarStacked />
              </div>
            </div>

            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <SettlementNotifications />
            </div>
          </div>

          <div className="w-full">
            <TasksDataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

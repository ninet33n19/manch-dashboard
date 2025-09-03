"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const chartData = [
  { month: "Jan", settled: 18600, pending: 8000 },
  { month: "Feb", settled: 30500, pending: 20000 },
  { month: "Mar", settled: 23700, pending: 12000 },
  { month: "Apr", settled: 7300, pending: 19000 },
  { month: "May", settled: 20900, pending: 13000 },
  { month: "Jun", settled: 21400, pending: 14000 },
  { month: "Jul", settled: 29000, pending: 12528 },
  { month: "Aug", settled: 22000, pending: 17000 },
  { month: "Sep", settled: 25000, pending: 16000 },
  { month: "Oct", settled: 23000, pending: 18000 },
  { month: "Nov", settled: 21000, pending: 17500 },
  { month: "Dec", settled: 24000, pending: 19000 },
];

const chartConfig = {
  settled: {
    label: "Settled",
    color: "#effde2", // A lighter green for the striped part
  },
  pending: {
    label: "Pending",
    color: "#d8f9b8", // The solid, slightly darker green
  },
} satisfies ChartConfig;

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const totalValue = payload.reduce(
      (sum: number, entry: any) => sum + entry.value,
      0,
    );
    return (
      <div className="rounded-lg p-2 bg-[#2B2D2D] text-white">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex gap-3 items-center">
            <span className="text-xs uppercase text-gray-400">
              Dispute Value
            </span>
            <span className="font-medium text-white">
              {totalValue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export function ChartBarStacked() {
  return (
    <Card className="rounded-2xl border bg-white p-5">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-medium text-[#2B2D2D]">
            Overview
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Download Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <ChartContainer config={chartConfig} className="h-[242px] w-full">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 30 }}>
            {/* Define the striped pattern */}
            <defs>
              <pattern
                id="stripe-pattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <rect width="8" height="8" fill={chartConfig.settled.color} />
                <rect width="4" height="8" fill="#e0f2c7" opacity="0.7" />
              </pattern>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: "#666666", fontSize: 14 }}
            />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />

            {/* The bottom bar no longer needs a radius prop */}
            <Bar
              dataKey="settled"
              stackId="a"
              fill="url(#stripe-pattern)"
              radius={[0, 0, 8, 8]}
            />

            {/* The top bar gets a single radius prop to round the whole stack */}
            <Bar
              dataKey="pending"
              stackId="a"
              fill="var(--color-pending)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

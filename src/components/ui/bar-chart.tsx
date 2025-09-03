"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 190, mobile: 150 },
  { month: "Aug", desktop: 220, mobile: 170 },
  { month: "Sep", desktop: 250, mobile: 160 },
  { month: "Oct", desktop: 230, mobile: 180 },
  { month: "Nov", desktop: 210, mobile: 175 },
  { month: "Dec", desktop: 240, mobile: 190 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#effde2",
  },
  mobile: {
    label: "Mobile",
    color: "#def9b8",
  },
} satisfies ChartConfig;

export function ChartBarStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {/* Define the striped pattern */}
            <defs>
              <pattern
                id="stripe-pattern"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
                patternTransform="rotate(45)"
              >
                <rect width="8" height="8" fill="#effde2" />
                <rect width="4" height="8" fill="#e8f7d3" opacity="0.7" />
              </pattern>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent payload={undefined} />} />

            {/* Desktop bar with striped pattern and only bottom corners rounded */}
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="url(#stripe-pattern)"
              radius={[0, 0, 16, 16]}
            />

            {/* Mobile bar with only top corners rounded */}
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[16, 16, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    month: "Graph Analysis",
    "Total Spaces": 100,
    "Available Spaces": 80,
    "Booked Spaces": 22,
  },
];

const chartConfig = {
  TotalSpaces: {
    label: "Total Spaces",
    color: "#4CAF50",
  },
  AvailableSpaces: {
    label: "Available Spaces",
    color: "#FF9800",
  },
  BookedSpaces: {
    label: "Booked Spaces",
    color: "#F44336",
  },
} satisfies ChartConfig;

const DataChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[400px]  w-full my-2 mb-4 p-2 bg-slate-100 rounded-lg shadow-lg"
    >
      <BarChart width={800} height={400} data={chartData}>
        {/* add x axis -- month */}
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {/* add hover */}
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="Total Spaces"
          fill={chartConfig.TotalSpaces.color}
          radius={4}
        />
        <Bar
          dataKey="Available Spaces"
          fill={chartConfig.AvailableSpaces.color}
          radius={4}
        />
        <Bar
          dataKey="Booked Spaces"
          fill={chartConfig.BookedSpaces.color}
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default DataChart;
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
    month: "January",
    "Total Spaces": 100,
    "Available Spaces": 80,
    "Booked Spaces": 22,
  },
  {
    month: "February",
    "Total Spaces": 305,
    "Available Spaces": 200,
    "Booked Spaces": 43,
  },
  {
    month: "March",
    "Total Spaces": 237,
    "Available Spaces": 120,
    "Booked Spaces": 64,
  },
  {
    month: "April",
    "Total Spaces": 73,
    "Available Spaces": 190,
    "Booked Spaces": 54,
  },
  {
    month: "May",
    "Total Spaces": 209,
    "Available Spaces": 130,
    "Booked Spaces": 62,
  },
  {
    month: "June",
    "Total Spaces": 214,
    "Available Spaces": 140,
    "Booked Spaces": 70,
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

export default () => {
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

"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const DataChart = ({ chartData }: { chartData: any }) => {
  const chartConfig = {
    TotalSpaces: {
      label: "Pending Spaces",
      color: "#4CAF50",
    },
    AvailableSpaces: {
      label: "Approved Spaces",
      color: "#FF9800",
    },
    BookedSpaces: {
      label: "Total Spaces",
      color: "#F44336",
    },
  } satisfies ChartConfig;


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
          dataKey="Pending Spaces"
          fill={chartConfig.TotalSpaces.color}
          radius={4}
        />
        <Bar
          dataKey="Approved Spaces"
          fill={chartConfig.AvailableSpaces.color}
          radius={4}
        />
        <Bar
          dataKey="Total Spaces"
          fill={chartConfig.BookedSpaces.color}
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default DataChart;
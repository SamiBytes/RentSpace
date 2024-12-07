"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", "Total Applicants": 120, "Rent Approved": 90, "Rent Rejected": 30 },  
];

const chartConfig = {
  TotalApplicants: {
    label: "Total Applicants",
    color: "#4CAF50",
  },
  RentApproved: {
    label: "Rent Approved",
    color: "#FF9800",
  },
  RentRejected: {
    label: "Rent Rejected",
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
          dataKey="Total Applicants"
          fill={chartConfig.TotalApplicants.color}
          radius={4}
        />
        <Bar
          dataKey="Rent Approved"
          fill={chartConfig.RentApproved.color}
          radius={4}
        />
        <Bar
          dataKey="Rent Rejected"
          fill={chartConfig.RentRejected.color}
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
};

"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";


const DataChart = ({ chartData }: { chartData: any }) => {
  const chartConfig = {
    TotalApplicants: {
      label: "Unapproved Spaces",
      color: "#4CAF50",
    },
    RentApproved: {
      label: "Approved Spaces",
      color: "#FF9800",
    },
    RentRejected: {
      label: "Total Spaces",
      color: "#F44336",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);

  return (
    <>
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
            dataKey="Unapproved Spaces"
            fill={chartConfig.TotalApplicants.color}
            radius={4}
          />
          <Bar
            dataKey="Approved Spaces"
            fill={chartConfig.RentApproved.color}
            radius={4}
          />
          <Bar
            dataKey="Total Spaces"
            fill={chartConfig.RentRejected.color}
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
};

export default DataChart;
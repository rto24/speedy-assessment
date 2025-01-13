"use client";

import React from "react";
import { CartesianGrid, AreaChart, XAxis, Area } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { lineChartData } from "@/data/data";

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
};

const TotalActiveUsersChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6">
      <h1 className="text-xl my-2 font-bold">Total and Active Users</h1>
      <p>January - December 2024</p>
      <ChartContainer 
        config={chartConfig}
        className="w-full h-[300px]"
      >
        <AreaChart
          data={lineChartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
          <Area
            dataKey="users"
            type="linear"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-1))"
            name="Total Users"
          />
          <Area
            dataKey="activeUsers"
            type="linear"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-2))"
            name="Active Users"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}

export default TotalActiveUsersChart;
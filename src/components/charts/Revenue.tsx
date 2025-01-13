"use client"

import React from "react"
import { Pie, PieChart } from "recharts"
import { revenueData } from "@/data/data"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  ads: {
    label: "Ads",
    color: "hsl(var(--chart-2))",
  },
  partnerships: {
    label: "Partnerships",
    color: "hsl(var(--chart-3))",
  },
  content: {
    label: "Content Monetization",
    color: "hsl(var(--chart-4))",
  },
  merch: {
    label: "Merch and Events",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const RevenueDistribution: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6">
      <h1 className="text-xl my-2 font-bold">Revenue Distribution (%)</h1>
      <p>January - December 2024</p>
      <ChartContainer
        config={chartConfig}
        className="mx-auto h-[300px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={revenueData}
            dataKey="percentage"
            nameKey="source"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

export default RevenueDistribution;
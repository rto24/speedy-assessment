"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { topSongsData } from "@/data/data"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  streams: {
    label: "Streams",
  },
  "Blinding Lights": {
    label: "Blinding Lights",
    color: "#FF4500", 
  },
  "Shape of You": {
    label: "Shape of You",
    color: "#FF6347",
  },
  "Someone You Loved": {
    label: "Someone You Loved",
    color: "#FFA500",
  },
  Levitating: {
    label: "Levitating",
    color: "#32CD32",
  },
  "Bad Guy": {
    label: "Bad Guy",
    color: "#4682B4",
  },
} satisfies ChartConfig;

const TopSongs: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6">
      <h1 className="text-xl my-2 font-bold">Top Songs</h1>
      <p>Past 30 days</p>
      <ChartContainer 
        config={chartConfig}
        className="w-full h-auto"
      >
        <BarChart
          accessibilityLayer
          data={topSongsData}
          layout="vertical"
          margin={{
            left: 20,
          }}
        >
          <YAxis
            dataKey="song"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <XAxis dataKey="streams" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="streams" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default TopSongs;
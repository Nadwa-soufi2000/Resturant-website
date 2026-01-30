import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { day: "1", value: 120 },
  { day: "5", value: 180 },
  { day: "10", value: 90 },
  { day: "15", value: 260 },
  { day: "20", value: 70 },
  { day: "25", value: 40 },
]

const chartConfig = {
  value: {
    label: "الطلبات",
    color: "#F87171",
  },
} satisfies ChartConfig

export function ChartArea() {
  return (
    <Card className="xl:w-[539px] w-full h-[280px] rounded-[6px] bg-[#F9FAFB]">
      <CardHeader>
        <CardTitle className="text-right">
          أداء الطلبات خلال هذا الشهر
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <ChartContainer
          config={chartConfig}
          className="w-full xl:w-[444px] h-[196px] mx-auto"
        >
          <AreaChart
            data={chartData}
            margin={{ left: 0, right: 0 }}
          >
            {/* Gradient */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F87171" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#F87171" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />

            <YAxis hide />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />

            <Area
              type="natural"
              dataKey="value"
              stroke="#F87171"
              fill="url(#areaGradient)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
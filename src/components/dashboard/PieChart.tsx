import { Cell, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { name: "شاورما", value: 52.1, color: "#F4B183" },
  { name: "بيتزا", value: 22.8, color: "#F2994A" },
  { name: "مندي دجاج", value: 13.9, color: "#6FCF97" },
  { name: "أطباق أخرى", value: 11.2, color: "#56CCF2" },
]

const chartConfig = {} satisfies ChartConfig

export function ChartPie() {
  return (
    <Card className="flex flex-col xl:w-[432px] w-full sm:h-[280px] h-auto bg-[#F9FAFB] rounded-[6px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-right">
          الأطباق الأكثر طلباً
        </CardTitle>
      </CardHeader>

      <CardContent className="flex sm:flex-row flex-col items-center xl:justify-between md:justify-end justify-between px-6">
        {/* Legend */}
        <div className="flex flex-col justify-between text-sm sm:w-[184px] w-[170px] h-[116px]">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground w-[48px]">
                {item.value}%
              </span>
              <div className="flex justify-end items-center gap-1">
                <span>{item.name}</span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Donut chart */}
        <ChartContainer config={chartConfig} className="w-[180px] h-[180px]">
          <PieChart width={160} height={160}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={70}
              stroke="none"
            >
              {chartData.map((item, index) => (
                <Cell
                  key={`Cell-${index}`}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
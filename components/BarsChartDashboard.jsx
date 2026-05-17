"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const chartData = [
  { month: "January", Entrada: 186, Saida: 80 },
  { month: "February", Entrada: 305, Saida: 200 },
  { month: "March", Entrada: 237, Saida: 120 },
  { month: "April", Entrada: 73, Saida: 190 },
  { month: "May", Entrada: 209, Saida: 130 },
  { month: "June", Entrada: 214, Saida: 140 },
];

const chartConfig = {
  Entrada: {
    label: "Entrada",
    color: "var(--color-notification-received)",
  },
  Saida: {
    label: "Saida",
    color: "var(--color-notification-spent)",
  },
};

export function BarsChartDashboard() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] size-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar
              dataKey="Entrada"
              fill="var(--color-notification-received)"
              fillOpacity={0.7}
              radius={15}
            />
            <Bar
              dataKey="Saida"
              fill="var(--color-notification-spent)"
              fillOpacity={0.7}
              radius={15}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

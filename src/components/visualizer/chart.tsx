import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useWatch } from "react-hook-form";
import { useMemo } from "react";
import groupByMultipleLevels from "@/lib/groupByMultipleLevels";
import useAggregatedData from "@/lib/hooks/useAggregatedData";
import useChartConfig from "@/lib/hooks/useChartConfig";

export interface ChartVizualizerProps {
  data: Record<string, unknown>[];
}

export function ChartVizualizer({ data }: ChartVizualizerProps) {
  const somar = useWatch({ name: "somar" });
  const visualizarPor = useWatch({ name: "visualizarPor" });
  const detalharPor = useWatch({ name: "detalharPor" });

  const groupedData = useMemo(
    () => groupByMultipleLevels(data, visualizarPor, detalharPor),
    [data, visualizarPor, detalharPor]
  );

  const chartConfig = useChartConfig(groupedData, visualizarPor, detalharPor);
  const chartData = useAggregatedData(
    groupedData,
    somar,
    visualizarPor,
    detalharPor
  );

  return (
    <ChartContainer
      config={chartConfig as ChartConfig}
      className="min-h-[400px] w-full"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="xAxis"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip content={<ChartTooltipContent cursor hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />

        {Object.keys(chartConfig).map((key) => (
          <Bar
            key={key}
            dataKey={key}
            stackId="a"
            fill={chartConfig[key].color}
            radius={[0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

import groupByMultipleLevels from "@/lib/groupByMultipleLevels";
import useColumns from "@/lib/hooks/useColumns";
import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { DataTable } from "../data-table";
import useAggregatedData from "@/lib/hooks/useAggregatedData";

export interface TableVizualizerProps {
  data: Record<string, unknown>[];
}

function TableVisualizer({ data }: TableVizualizerProps) {
  const somar = useWatch({ name: "somar" });
  const visualizarPor = useWatch({ name: "visualizarPor" });
  const detalharPor = useWatch({ name: "detalharPor" });

  const groupedData = useMemo(
    () => groupByMultipleLevels(data, visualizarPor, detalharPor),
    [data, visualizarPor, detalharPor]
  );

  const columns = useColumns(groupedData, somar, visualizarPor, detalharPor);
  const tableContent = useAggregatedData(
    groupedData,
    somar,
    visualizarPor,
    detalharPor
  );

  return <DataTable columns={columns} data={tableContent} />;
}

export default TableVisualizer;

import { useMemo } from "react";
import { Key, isNestedGroups } from "../typings";
import { ColumnDef } from "@tanstack/react-table";

function useColumns<T extends Record<Key, any>>(
  groupedData: Map<string, T[]> | Map<string, Map<string, T[]>>,
  somarPor: Key,
  visualizarPor: Key,
  detalharPor?: Key
) {
  return useMemo(() => {
    if (!somarPor || !visualizarPor) {
      return [];
    }

    if (isNestedGroups(groupedData, detalharPor)) {
      const keys = new Set<string>();

      groupedData.forEach((nested) => {
        nested.forEach((_value, key) => {
          keys.add(key);
        });
      });

      const columns: ColumnDef<T, unknown>[] = [
        {
          accessorKey: "xAxis",
          header: visualizarPor as string,
          cell: ({ row }) => row.original?.["xAxis"] ?? "",
          footer: () => {
            return "Total";
          },
        },
      ];

      keys.forEach((key) => {
        columns.push({
          accessorKey: key + "",
          header: key,
          cell: ({ row }) => row.original?.[key] ?? "",
          footer: ({ table }) => {
            return table
              .getFilteredRowModel()
              .rows?.reduce((sum, row) => sum + (row.original?.[key] ?? 0), 0);
          },
        });
      });

      return columns;
    }

    return [
      {
        accessorKey: "xAxis",
        header: visualizarPor,
        cell: ({ row }) => row.original?.["xAxis"] ?? "",
        footer: () => {
          return "Total";
        },
      },
      {
        accessorKey: visualizarPor,
        header: somarPor,
        cell: ({ row }) => row.original?.[visualizarPor] ?? "",
        footer: ({ table }) => {
          return table
            .getFilteredRowModel()
            .rows?.reduce(
              (sum, row) => sum + (row.original?.[visualizarPor] ?? 0),
              0
            );
        },
      },
    ] as ColumnDef<T, unknown>[];
  }, [groupedData, detalharPor, somarPor, visualizarPor]);
}

export default useColumns;

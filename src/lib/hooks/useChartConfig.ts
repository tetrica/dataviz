import { useMemo } from "react";
import { Key, isNestedGroups } from "../typings";
import useGenColors from "./useGenColors";

function useChartConfig<T extends Record<Key, any>>(
  groupedData: Map<string, T[]> | Map<string, Map<string, T[]>>,
  visualizarPor: Key,
  detalharPor?: Key
) {
  const genColor = useGenColors();

  return useMemo(() => {
    if ("length" in groupedData && !groupedData.length) {
      return {
        [visualizarPor]: {
          label: "Selecione uma opção de visualização",
          color: "hsl(var(--chart-1))" as `hsl(${string})`,
        },
      };
    }

    if (!isNestedGroups(groupedData, detalharPor)) {
      return {
        [visualizarPor]: {
          label: visualizarPor,
          color: "hsl(var(--chart-1))" as `hsl(${string})`,
        },
      };
    }

    const config: {
      [key: string]: {
        label: string;
        color: `hsl(${string})`;
      };
    } = {};

    groupedData.forEach((value) => {
      const keys = new Set<string>(value.keys());
      keys.forEach((subKey) => {
        config[subKey] = {
          label: subKey,
          color: genColor(),
        };
      });
    });

    return config;
  }, [groupedData, visualizarPor, detalharPor, genColor]);
}

export default useChartConfig;

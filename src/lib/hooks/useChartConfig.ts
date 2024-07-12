import { useMemo } from "react";
import { Key, isNestedGroups } from "../typings";
import useGenColors from "./useGenColors";

function useChartConfig<T extends Record<Key, any>>(
  groupedData: Record<string, T[]> | Record<string, Record<string, T[]>>,
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

    return Object.values(groupedData).reduce(
      (accumulator, value) => {
        const keys = new Set<string>(Object.keys(value));
        keys.forEach((subKey) => {
          accumulator[subKey] = {
            label: subKey,
            color: genColor(),
          };
        });

        return accumulator;
      },
      {} as {
        [key: string]: {
          label: string;
          color: `hsl(${string})`;
        };
      }
    );
  }, [groupedData, visualizarPor, detalharPor, genColor]);
}

export default useChartConfig;

import { useMemo } from "react";
import { Key, isNestedGroups } from "../typings";
import sumGroupedByKey from "../sumGroupedByKey";
import sumByNestedKeys from "../sumGroupedByMultipleKeys";

function useAggregatedData<T extends Record<Key, any>>(
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
      return sumByNestedKeys(groupedData, somarPor);
    }

    return sumGroupedByKey(groupedData, somarPor, visualizarPor);
  }, [groupedData, somarPor, detalharPor, visualizarPor]);
}

export default useAggregatedData;

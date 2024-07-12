import groupBy from "./groupBy";
import { Key } from "./typings";

function groupByMultipleLevels<T extends Record<Key, any>>(
  data: T[],
  key: Key,
  secondLevelKey?: Key
) {
  const groupedData = groupBy(data, key);

  if (!secondLevelKey) {
    return groupedData;
  }

  const nestedGroupedData: Map<string, Map<string, T[]>> = new Map();

  for (const [key, value] of groupedData) {
    const nestedGroupedDataForKey = groupBy(value, secondLevelKey);
    nestedGroupedData.set(key, nestedGroupedDataForKey);
  }

  return nestedGroupedData;
}

export default groupByMultipleLevels;

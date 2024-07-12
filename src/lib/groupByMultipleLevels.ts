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

  return Object.entries(groupedData).reduce((accumulator, [key, value]) => {
    accumulator[key] = groupBy(value, secondLevelKey);
    return accumulator;
  }, {} as Record<string, Record<string, T[]>>);
}

export default groupByMultipleLevels;

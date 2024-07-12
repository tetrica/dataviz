import { Key } from "./typings";

function sumByNestedKeys<T extends Record<Key, any>>(
  data: Record<string, Record<string, T[]>>,
  sumKey: Key
) {
  return Object.entries(data).reduce((accumulator, [key, nestedData]) => {
    const item = {
      xAxis: key as Key,
    } as { xAxis: Key; [key: string]: number | Key };

    Object.entries(nestedData).forEach(([subKey, subValue]) => {
      const totalSum = subValue.reduce(
        (sum, entry) => sum + ((entry[sumKey] as number) || 0),
        0
      );
      item[subKey] = totalSum;
    });

    accumulator.push(item);
    return accumulator;
  }, [] as { xAxis: Key; [key: string]: number | Key }[]);
}

export default sumByNestedKeys;

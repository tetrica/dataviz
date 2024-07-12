import { Key } from "./typings";

function sumByNestedKeys<T extends Record<Key, any>>(
  data: Map<string, Map<string, T[]>>,
  sumKey: Key
) {
  const totalsByGroup: { xAxis: Key; [key: string]: number | Key }[] = [];

  data.forEach((nestedData, key) => {
    const item = {
      xAxis: key as Key,
    } as { xAxis: Key; [key: string]: number | Key };

    nestedData.forEach((value, subKey) => {
      const total = value.reduce(
        (sum, entry) => sum + ((entry[sumKey] as number) || 0),
        0
      );

      item[subKey] = total;
    });

    totalsByGroup.push(item);
  });

  return totalsByGroup;
}

export default sumByNestedKeys;

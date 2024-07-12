import { Key } from "./typings";

function sumGroupedByKey<T extends Record<Key, any>>(
  data: Record<string, T[]>,
  sumKey: Key,
  groupedBy: Key
) {
  return Object.entries(data).reduce((accumulator, [key, value]) => {
    const sum = value.reduce((acc, item) => acc + item[sumKey], 0);
    accumulator.push({ xAxis: key, [groupedBy]: sum });
    return accumulator;
  }, [] as Record<string, unknown>[]);
}

export default sumGroupedByKey;

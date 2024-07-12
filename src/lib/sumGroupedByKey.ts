import { Key } from "./typings";

function sumGroupedByKey<T extends Record<Key, any>>(
  data: Map<string, T[]>,
  sumKey: Key,
  groupedBy: Key
) {
  let total = 0;
  const totalsByGroup: Record<string, unknown>[] = [];

  data.forEach((value, key) => {
    total += value.reduce((acc, item) => acc + item[sumKey], 0);
    totalsByGroup.push({ [groupedBy]: total, xAxis: key });
  });

  return totalsByGroup;
}

export default sumGroupedByKey;

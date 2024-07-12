import { Key } from "./typings";

function groupBy<T extends Record<Key, any>>(data: T[], key: Key) {
  const groupedData: Map<string, T[]> = new Map();

  for (const item of data) {
    const keyValue = item[key];
    if (!groupedData.has(keyValue)) {
      groupedData.set(keyValue, []);
    }
    groupedData.get(keyValue)?.push(item);
  }

  return groupedData;
}

export default groupBy;

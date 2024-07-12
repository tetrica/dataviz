import { Key } from "./typings";

function groupBy<T extends Record<Key, any>>(data: T[], key: Key) {
  return data.reduce((accumulator, currentObject) => {
    const keyValue = currentObject[key];

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }

    accumulator[keyValue].push(currentObject);
    return accumulator;
  }, {} as Record<string, T[]>);
}

export default groupBy;

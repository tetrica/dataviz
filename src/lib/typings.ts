export type Key = string | number | symbol;

export function isNestedGroups<T extends Record<Key, any>>(
  data: Record<string, T[]> | Record<string, Record<string, T[]>>,
  secondLevelKey?: Key
): data is Record<string, Record<string, T[]>> {
  return secondLevelKey !== undefined;
}

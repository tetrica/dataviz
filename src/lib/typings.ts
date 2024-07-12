export type Key = string | number | symbol;

export function isNestedGroups<T extends Record<Key, any>>(
  // @ts-ignore
  data: Map<string, T[]> | Map<string, Map<string, T[]>>,
  secondLevelKey?: Key
): data is Map<string, Map<string, T[]>> {
  return secondLevelKey !== undefined;
}

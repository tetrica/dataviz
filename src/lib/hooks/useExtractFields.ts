import { useMemo } from "react";

type Field = Record<string, "number" | "string" | "other">;

function useExtractFields(data: Record<string, unknown>[]) {
  return useMemo(() => {
    const fields: Field = {};

    data.forEach((row) => {
      Object.keys(row).forEach((key) => {
        if (typeof row[key] === "number") {
          fields[key] = "number";
        } else if (typeof row[key] === "string") {
          fields[key] = "string";
        } else {
          fields[key] = "other";
        }
      });
    });

    return fields;
  }, [data]);
}

export default useExtractFields;

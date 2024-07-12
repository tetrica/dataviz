import useExtractFields from "@/lib/hooks/useExtractFields";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";

export interface FilterProps {
  data: Record<string, unknown>[];
}

function Filter({ data }: FilterProps) {
  const fields = useExtractFields(data);

  const summableFields = useMemo(() => {
    return Object.keys(fields).filter((key) => fields[key] === "number");
  }, [fields]);

  const visualizationFields = useMemo(() => {
    return Object.keys(fields).filter((key) => fields[key] !== "other");
  }, [fields]);

  return (
    <div className="flex items-center flex-wrap gap-2">
      <Item label="Somar" options={summableFields} name="somar" />
      <Item
        label="Visualizar por"
        options={visualizationFields}
        name="visualizarPor"
      />
      <Item
        label="Detalhar por"
        options={visualizationFields}
        name="detalharPor"
      />
    </div>
  );
}

export interface ItemProps {
  name: string;
  label: string;
  options?: string[];
}

function Item({ label, options, name }: ItemProps) {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="grid w-fit items-center gap-1.5">
      <Label htmlFor="picture">{label}</Label>
      <Select
        value={field.value}
        onValueChange={(value) => field.onChange(value)}
      >
        <SelectTrigger className="min-w-[140px]">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filter;

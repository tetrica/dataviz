import React, { forwardRef } from "react";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface RadioGroupItemProps {
  value: string;
  label: string;
  id: string;
}

const DatasourceOption = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ value, label, id }, ref) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem ref={ref} value={value} id={id} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
});

export default DatasourceOption;

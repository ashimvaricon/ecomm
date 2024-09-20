import { Control, FieldValues, Path } from "react-hook-form";

export type RadioOption = {
  label: string;
  value: boolean;
};

export type RadioGroupFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: RadioOption[];
  row?: boolean;
};

import { Control, FieldValues, Path } from "react-hook-form";

export type SelectOptionType = {
  value: string;
  label: string;
};

export type SelectFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  options: SelectOptionType[];
  placeholder?: string;
  isClearable?: boolean;
};

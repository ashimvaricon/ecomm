import { FieldErrors, FieldValues, UseFormRegister,Path } from "react-hook-form";

export type InputTextFieldProps<T extends FieldValues> = {
    label: string;
    fieldName: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
  };
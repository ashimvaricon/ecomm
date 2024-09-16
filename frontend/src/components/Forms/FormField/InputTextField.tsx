import { TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { InputTextFieldProps } from "../../../types/form/InputNumberField";

const InputTextField = <T extends FieldValues>({
  label,
  fieldName,
  register,
  errors,
}: InputTextFieldProps<T>) => {
  return (
    <TextField
      label={label}
      type="text"
      {...register(fieldName)}
      error={!!errors[fieldName]}
      helperText={errors[fieldName]?.message as string}
      fullWidth
    />
  );
};

export default InputTextField;

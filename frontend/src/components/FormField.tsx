import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister, FieldError, FieldValues } from "react-hook-form";

interface FormFieldProps<TFieldValues extends FieldValues> {
  label: string;
  type?: string;
  name: keyof TFieldValues;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
}

const FormField = <TFieldValues extends FieldValues>({
  label,
  type = "text",
  name,
  register,
  error,
}: FormFieldProps<TFieldValues>): React.ReactElement => {
  const errorMessage = error?.message || "";
  return (
    <TextField
      {...register(name)}
      margin="normal"
      fullWidth
      label={
        <span>
          {label} <span style={{ color: "red" }}>*</span>
        </span>
      }
      type={type}
      error={!!error}
      helperText={errorMessage}
    />
  );
};

export default FormField;

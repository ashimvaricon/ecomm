import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister, FieldError } from "react-hook-form";

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const FormField: React.FC<FormFieldProps> = ({ label, type = "text", name, register, error }) => (
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
    helperText={error?.message}
  />
);

export default FormField;

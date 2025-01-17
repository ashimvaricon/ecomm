import { Controller, FieldValues } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { DatePickerFieldProps } from "../../../types/form/DatePickerField";


const DatePickerField = <T extends FieldValues>({
  name,
  control,
  label,
  errors,
}: DatePickerFieldProps<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            value={value}
            onChange={(date: Dayjs | null) => onChange(date)}
            slotProps={{
              textField: {
                error: !!errors[name],
                helperText: errors[name]?.message,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;

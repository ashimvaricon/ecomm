import { Dayjs } from 'dayjs';
import { Control, FieldValues,Path } from "react-hook-form";


export type DatePickerFieldProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    label: string;
    defaultValue?: Dayjs | null;
    errors: FieldValues;
  };
import { Controller, FieldValues } from "react-hook-form";
import Select from "react-select";
import { SelectFieldProps } from "../../../types/form/SelectField";

const SelectField = <T extends FieldValues>({
  name,
  control,
  options,
  placeholder = "Select an option",
  isClearable = false,
}: SelectFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Select
          options={options}
          onChange={(selectedOption) => onChange(selectedOption?.value)}
          value={options.find((option) => option.value === value)}
          placeholder={placeholder}
          isClearable={isClearable}
        />
      )}
    />
  );
};

export default SelectField;

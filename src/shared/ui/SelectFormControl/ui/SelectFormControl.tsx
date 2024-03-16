import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Value } from "../../../api/model";
import { UseFormRegister } from "react-hook-form";

interface SelectFormControlProps {
  items: Value[];
  label: string;
  labelId: string;
  register: UseFormRegister<any>;
  name: string;
}

export const SelectFormControl: React.FC<SelectFormControlProps> = ({
  items,
  label,
  labelId,
  register,
  name,
}) => {
  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        defaultValue={1}
        {...register(name)}
      >
        {items.map((items) => (
          <MenuItem key={items.id} value={items.id}>
            {items.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

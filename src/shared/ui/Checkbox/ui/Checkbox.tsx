import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type CheckboxProps = {
  label?: string;
  name: string;
} & MuiCheckboxProps;

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  name,
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <MuiCheckbox
              onClick={() => setIsChecked((prev) => !prev)}
              {...field}
              value={isChecked}
              {...restProps}
            />
          )}
        />
      }
    />
  );
};

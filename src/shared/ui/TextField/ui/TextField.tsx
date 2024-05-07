import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export type TextFieldProps = {
  name: string;
} & MuiTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
  name,
  defaultValue,
  ...restProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <MuiTextField
          sx={{ width: "100%" }}
          value={value}
          onChange={({ target: { value } }) => {
            restProps.type === "number" && value.length >= 1
              ? onChange(parseInt(value))
              : onChange(value);
          }}
          {...restProps}
        />
      )}
    />
  );
};

import { Grid, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type TextFieldGridProps = {
  xs?: number;
  name: string;
  control: any;
} & TextFieldProps;

export const TextFieldGrid: React.FC<TextFieldGridProps> = ({
  xs = 4,
  name,
  control,
  defaultValue,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <TextField
            sx={{ width: "100%" }}
            value={value}
            onChange={({ target: { value } }) => {
              restProps.type === "number" && value.length > 1
                ? onChange(parseInt(value))
                : onChange(value);
            }}
            {...restProps}
          />
        )}
      />
    </Grid>
  );
};

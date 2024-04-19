import { Checkbox, CheckboxProps, FormControlLabel, Grid } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxGridProps = {
  label?: string;
  xs?: number;
} & CheckboxProps;

export const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  label,
  xs = 4,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <FormControlLabel label={label} control={<Checkbox {...restProps} />} />
    </Grid>
  );
};

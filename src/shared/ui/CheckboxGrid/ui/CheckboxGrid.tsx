import { Grid } from "@mui/material";
import React from "react";
import { CheckboxProps, Checkbox } from "../../Checkbox/ui/Checkbox";

type CheckboxGridProps = {
  xs?: number;
} & CheckboxProps;

export const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  xs = 4,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <Checkbox {...restProps} />
    </Grid>
  );
};

import React from "react";
import { Select, SelectProps } from "../../Select/ui/Select";
import { Grid } from "@mui/material";

export type SelectGridProps = {
  xs?: number;
} & SelectProps;

export const SelectGrid: React.FC<SelectGridProps> = ({
  xs = 4,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <Select {...restProps} />
    </Grid>
  );
};

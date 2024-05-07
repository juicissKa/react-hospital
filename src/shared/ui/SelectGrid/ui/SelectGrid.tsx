import React from "react";
import { Select, SelectProps } from "../../Select/ui/Select";
import { Grid } from "@mui/material";

export type SelectGridProps = {
  xs?: number;
} & SelectProps;

export const SelectGrid: React.FC<SelectGridProps> = React.forwardRef(
  ({ xs = 4, ...restProps }, ref) => {
    return (
      <Grid item xs={xs}>
        <Select {...restProps} ref={ref} />
      </Grid>
    );
  }
);

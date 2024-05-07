import React from "react";
import { TextField, TextFieldProps } from "../../TextField/ui/TextField";
import { Grid } from "@mui/material";

type TextFieldGridProps = {
  xs?: number;
} & TextFieldProps;

export const TextFieldGrid: React.FC<TextFieldGridProps> = ({
  xs = 4,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <TextField {...restProps} />
    </Grid>
  );
};

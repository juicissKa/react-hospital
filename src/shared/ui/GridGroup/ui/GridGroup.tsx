import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type GridGroupProps = {
  label?: string;
  children: ReactNode;
};

export const GridGroup: React.FC<GridGroupProps> = ({ label, children }) => {
  return (
    <Grid item xs={12}>
      {label && <Typography>{label}</Typography>}
      <Grid container>{children}</Grid>
    </Grid>
  );
};

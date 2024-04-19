import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type FormGroupProps = {
  children: ReactNode;
  label?: string;
};

export const FormGroup: React.FC<FormGroupProps> = ({ children, label }) => {
  return (
    <Grid item xs={12} style={{ marginBottom: 30 }}>
      {label && (
        <Typography
          variant="h6"
          color={"text.secondary"}
          style={{ marginBottom: 20 }}
        >
          {label}
        </Typography>
      )}
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Grid>
  );
};

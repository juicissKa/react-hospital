import React, { ReactNode, useState } from "react";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface HideableSectionProps {
  label: string;
  children: ReactNode;
}

export const HideableSection: React.FC<HideableSectionProps> = ({
  label,
  children,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleCheckboxClick = () => {
    setIsToggled((state) => !state);
  };

  return (
    <Grid item xs={12}>
      <Grid container gap={2}>
        <FormControlLabel
          label={label}
          control={<Checkbox value={isToggled} onClick={handleCheckboxClick} />}
        />
        {isToggled && (
          <Grid container spacing={2}>
            {children}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

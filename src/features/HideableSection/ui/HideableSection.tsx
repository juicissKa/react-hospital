import React, { ReactNode, useState } from "react";
import { CheckboxGrid } from "../../../shared/ui/CheckboxGrid";
import { Box, Grid } from "@mui/material";

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
        <CheckboxGrid
          label={label}
          value={isToggled}
          onClick={handleCheckboxClick}
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

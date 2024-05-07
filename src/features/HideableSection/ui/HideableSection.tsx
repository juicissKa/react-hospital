import React, { ReactNode, useState } from "react";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface HideableSectionProps {
  label: string;
  render: () => ReactNode;
  name?: string;
  defaultValues?: any;
}

export const HideableSection: React.FC<HideableSectionProps> = ({
  label,
  render,
  name,
  defaultValues,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const { unregister, setValue } = useFormContext();

  const handleCheckboxClick = () => {
    if (isToggled) {
      name && unregister(name);
    } else {
      name && defaultValues && setValue(name, defaultValues);
    }
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
            {render()}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

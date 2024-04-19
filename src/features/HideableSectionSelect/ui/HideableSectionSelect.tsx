import React, { ReactNode, useState } from "react";
import { Grid } from "@mui/material";
import { SelectGrid } from "../../../shared/ui/SelectGrid";

export interface HideableSectionSelectItem {
  id: number;
  value: string;
  component?: ReactNode;
}

interface HideableSectionSelectProps {
  label: string;
  name: string;
  items: HideableSectionSelectItem[];
}

export const HideableSectionSelect: React.FC<HideableSectionSelectProps> = ({
  label,
  name,
  items,
}) => {
  const [currentComponent, setCurrentComponent] = useState(items[0].component);

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <SelectGrid
          name={name}
          items={items.map(({ id, value }) => ({ id, value }))}
          label={label}
          labelId={`${name}-label`}
          onChange={(event) =>
            setCurrentComponent(
              items.find((item) => item.id === event.target.value)?.component
            )
          }
        />
        <Grid item xs={12}>
          {currentComponent}
        </Grid>
      </Grid>
    </Grid>
  );
};

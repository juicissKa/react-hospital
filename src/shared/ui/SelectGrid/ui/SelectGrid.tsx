import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import React from "react";
import { Value } from "../../../api/model";
import { UseFormRegister } from "react-hook-form";

type SelectGridProps = {
  items: Value[];
  label: string;
  labelId: string;
  xs?: number;
} & SelectProps;

export const SelectGrid: React.FC<SelectGridProps> = ({
  items,
  label,
  labelId,
  xs = 4,
  ...restProps
}) => {
  return (
    <Grid item xs={xs}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select labelId={labelId} label={label} defaultValue={1} {...restProps}>
          {items.map((items) => (
            <MenuItem key={items.id} value={items.id}>
              {items.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

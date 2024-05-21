import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";
import React from "react";
import { Value } from "../../../api/model";

export type SelectProps = {
  items: Value[];
  label: string;
  labelId: string;
} & MuiSelectProps;

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({ label, labelId, items, ...restProps }, ref) => {
    return (
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id={labelId} shrink={true}>
          {label}
        </InputLabel>
        <MuiSelect
          labelId={labelId}
          label={label}
          defaultValue={1}
          {...restProps}
          ref={ref}
        >
          {items?.map((items) => (
            <MenuItem key={items.id} value={items.id}>
              {items.value}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    );
  }
);

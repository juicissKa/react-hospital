import { MenuItem, Stack } from "@mui/material";
import { Select, TextField } from "mui-rff";
import React from "react";
const options: Record<
  string,
  string[]
> = require("../../../json/select-options.json");

const DisabledPersonSection = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Select
        name="disabledPersonGroup"
        label={"Группа инвалидности"}
        sx={{ width: "100%" }}
        required
      >
        {options.disabledPersonGroup.map((item, index) => (
          <MenuItem key={`disabledPersonGroup${index}`} value={index + 1}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <TextField
        name="disabledPersonTime"
        label="Срок инвалидности"
        type="number"
        required
      />
    </Stack>
  );
};

export default DisabledPersonSection;

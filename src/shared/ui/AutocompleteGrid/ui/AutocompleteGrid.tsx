import {
  Autocomplete,
  debounce,
  Grid,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";

import { useGetPatientsQuery } from "../../../api/patient/patient";
import { convertDbTimeString } from "../../../utils/time";
import queryString from "query-string";
import { PatientShortInfo } from "../../../api/patient/model/model";

type AutocompleteGridProps = {
  label: string;
  xs?: number;
  handleChange: (event: React.SyntheticEvent, value: any) => void;
  onInputChange?: (value: string) => void;
  options?: { id: number; label: string }[];
} & TextFieldProps;

export const AutocompleteGrid: React.FC<AutocompleteGridProps> = ({
  label,
  xs = 4,
  handleChange,
  onInputChange,
  options = [],
  ...restProps
}) => {
  const handleInputChange = useCallback(
    debounce((str: string) => {
      if (onInputChange) {
        onInputChange(str);
      }
    }, 400),
    []
  );

  return (
    <Grid item xs={xs}>
      <Autocomplete
        disablePortal
        onInputChange={(_, value) => {
          handleInputChange(value);
        }}
        isOptionEqualToValue={(option, value) =>
          option.id === value.id && option.label === value.label
        }
        onChange={handleChange}
        options={options}
        noOptionsText={"Ничего не найдено"}
        renderInput={(params) => (
          <TextField {...params} {...restProps} label={label} />
        )}
      />
    </Grid>
  );
};

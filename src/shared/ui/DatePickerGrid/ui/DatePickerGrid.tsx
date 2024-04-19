import { Grid } from "@mui/material";
import { DatePicker, LocalizationProvider, ruRU } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import React from "react";
import { Control, Controller } from "react-hook-form";

type DatePickerGridProps = {
  name: string;
  control: Control<any, any>;
  label?: string;
  defaultValue?: Date;
  xs?: number;
};

export const DatePickerGrid: React.FC<DatePickerGridProps> = ({
  name,
  control,
  label,
  defaultValue,
  xs = 4,
}) => {
  return (
    <Grid item xs={xs}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || null}
        render={({ field: { onChange, ...restField } }) => (
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            localeText={
              ruRU.components.MuiLocalizationProvider.defaultProps.localeText
            }
            adapterLocale={ru}
          >
            <DatePicker
              onChange={(event) => {
                onChange(event);
              }}
              label={label}
              sx={{ width: "100%" }}
              {...restField}
            />
          </LocalizationProvider>
        )}
      />
    </Grid>
  );
};

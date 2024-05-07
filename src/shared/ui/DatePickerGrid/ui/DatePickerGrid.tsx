import { Grid } from "@mui/material";
import { DatePicker, LocalizationProvider, ruRU } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import React from "react";
import { Control, Controller, useFormContext } from "react-hook-form";

type DatePickerGridProps = {
  name: string;
  label?: string;
  defaultValue?: Date;
  xs?: number;
  required?: boolean;
};

export const DatePickerGrid: React.FC<DatePickerGridProps> = ({
  name,
  label,
  defaultValue,
  xs = 4,
  required = false,
}) => {
  const { control } = useFormContext();

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
              slotProps={{ textField: { required } }}
              {...restField}
            />
          </LocalizationProvider>
        )}
      />
    </Grid>
  );
};

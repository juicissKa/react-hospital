import { DatePicker, LocalizationProvider, ruRU } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import React from "react";
import { Control, Controller } from "react-hook-form";

type DatePickerControllerType = {
  name: string;
  control: Control<any, any>;
  label?: string;
  defaultValue?: Date;
};

export const DatePickerController: React.FC<DatePickerControllerType> = ({
  name,
  control,
  label,
  defaultValue,
}) => {
  return (
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
            {...restField}
          />
        </LocalizationProvider>
      )}
    />
  );
};

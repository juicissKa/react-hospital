import { parse } from "date-fns";

export const getTimeForDatePicker = (time: string) => {
  return parse(time, "dd.MM.yyyy", new Date());
};

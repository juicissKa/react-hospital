import { parse } from "date-fns";

export const getTimeForDatePicker = (time: string) => {
  return parse(time, "dd.MM.yyyy", new Date());
};

export const convertDbTimeString = (date: string) => {
  return new Date(date).toLocaleDateString();
};

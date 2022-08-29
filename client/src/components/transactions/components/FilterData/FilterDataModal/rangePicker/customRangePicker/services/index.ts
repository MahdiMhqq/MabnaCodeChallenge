import { DateObject } from "react-multi-date-picker";

const isArray = function (a: any) {
  return !!a && a.constructor === Array;
};

export const rangePickerChange = (
  selectedDates: DateObject | DateObject[] | null,
  setValues: React.Dispatch<React.SetStateAction<(DateObject | null)[]>>
) => {
  if (
    selectedDates &&
    selectedDates.constructor === Array &&
    selectedDates.length === 2
  ) {
    setValues([selectedDates[0], selectedDates[1]]);
  }
};

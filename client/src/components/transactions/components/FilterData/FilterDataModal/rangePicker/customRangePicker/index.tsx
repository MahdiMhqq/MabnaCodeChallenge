import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { rangePickerChange } from "./services";

interface CustomRangePickerProps {
  inputClassName?: string;
  dateRange: (DateObject | null)[];
  setDateRange: React.Dispatch<React.SetStateAction<(DateObject | null)[]>>;
}

function CustomRangePicker({
  dateRange,
  setDateRange,
  inputClassName,
}: CustomRangePickerProps) {
  return (
    <DatePicker
      //@ts-ignore
      value={dateRange.filter((value) => value !== null)}
      onChange={(selectedDates) =>
        rangePickerChange(selectedDates, setDateRange)
      }
      range
      maxDate={new DateObject({ calendar: persian })}
      calendar={persian}
      locale={persian_fa}
      inputClass={inputClassName}
      className={"green"}
    />
  );
}

export default CustomRangePicker;

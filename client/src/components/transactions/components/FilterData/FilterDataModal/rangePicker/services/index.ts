import { DateTime } from "luxon";
import { DateObject } from "react-multi-date-picker";
import { formDataSetterType } from "../../types";

export const dateRangeFormatter = (dateRange: (DateObject | null)[]) => {
  let from = "~";
  let to = "~";
  let result = "";
  if (dateRange && dateRange.constructor === Array) {
    if (dateRange.length === 1) {
      from = dateRange[0]
        ? DateTime.fromSeconds(dateRange[0].unix)
            .setZone("Asia/Tehran")
            .setLocale("fa-IR")
            .toLocaleString()
        : "-";
      result = from;
    } else if (dateRange.length === 2) {
      from = dateRange[0]
        ? DateTime.fromSeconds(dateRange[0].unix)
            .setZone("Asia/Tehran")
            .setLocale("fa-IR")
            .toLocaleString()
        : "-";
      to = dateRange[1]
        ? DateTime.fromSeconds(dateRange[1].unix)
            .setZone("Asia/Tehran")
            .setLocale("fa-IR")
            .toLocaleString()
        : "-";
      result = "از " + from + " تا " + to;
    } else {
      result = "";
    }
  }
  return result;
};

export const customInputFocus = () => {
  const datePickerInput = document.querySelector(
    ".datePickerInput"
  ) as HTMLInputElement | null;

  if (datePickerInput) {
    datePickerInput.focus();
  }
};

export const onDateChange = (
  dateRange: (DateObject | null)[] | DateObject | null,
  setFormData: formDataSetterType
) => {
  let from = "";
  let to = "";
  if (dateRange && dateRange.constructor === Array) {
    if (dateRange[0] && dateRange[0].isValid)
      from = DateTime.fromSeconds(dateRange[0].unix)
        .startOf("day")
        .setZone("Asia/Tehran")
        .toUTC()
        .toISO();
    if (dateRange[1] && dateRange[1].isValid)
      to = DateTime.fromSeconds(dateRange[1].unix)
        .endOf("day")
        .setZone("Asia/Tehran")
        .toUTC()
        .toISO();
  }

  setFormData((prev) => ({
    ...prev,
    date: {
      start: from,
      end: to,
    },
  }));
};

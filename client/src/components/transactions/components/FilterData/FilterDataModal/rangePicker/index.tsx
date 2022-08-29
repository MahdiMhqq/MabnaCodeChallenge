import React, { useEffect, useState } from "react";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";

import Input from "components/UI/Input";
import CustomRangePicker from "./customRangePicker";

import { formDataSetterType, formDataType } from "../types";
import { customInputFocus, dateRangeFormatter, onDateChange } from "./services";
import icons from "utils/fonticons";

interface MyRangePickerProps {
  formData: formDataType;
  setFormData: formDataSetterType;
}

function MyRangePicker({ formData, setFormData }: MyRangePickerProps) {
  const [dateRange, setDateRange] = useState<(DateObject | null)[]>([
    null,
    null,
  ]);

  useEffect(() => {
    onDateChange(dateRange, setFormData);
  }, [dateRange]);

  return (
    <>
      <div className="">
        <CustomRangePicker
          inputClassName={"datePickerInput max-h-0"}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-semibold text-dgray text-right mb-3">
            تاریخ
          </h5>
          {(formData.date.start || formData.date.end) && (
            <button
              className="rounded-full border-2 border-danger px-2 py-1 text-[10px] font-bold text-danger"
              onClick={() => {
                setFormData((prev) => ({
                  price: { ...prev.price },
                  date: {
                    start: null,
                    end: null,
                  },
                }));
                setDateRange([null, null]);
              }}
            >
              حذف فیلتر تاریخ
            </button>
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <span className="h-8 w-8 flex items-center justify-center">
            {icons.calender("h-7 w-7 fill-dgray")}
          </span>
          <Input
            wrapperClass="grow w-full"
            type="text"
            label="انتخاب تاریخ"
            name="TicketTitle"
            id="NewTicketTicketTitle"
            direction="rtl"
            value={dateRangeFormatter(dateRange)}
            autoComplete="off"
            onClick={() => customInputFocus()}
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default MyRangePicker;

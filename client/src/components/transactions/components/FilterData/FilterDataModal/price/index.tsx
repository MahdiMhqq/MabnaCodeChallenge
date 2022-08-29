import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { Slider } from "antd";
import Input from "components/UI/Input";

import { formDataSetterType, formDataType } from "../types";

import {
  endPriceChangeHandler,
  sliderChange,
  SliderValuesInterface,
  startPriceChangeHandler,
} from "./services";

interface PriceProps {
  formData: formDataType;
  setFormData: formDataSetterType;
}

function Price({ formData, setFormData }: PriceProps) {
  const [sliderValues, setSliderValues] = useState<SliderValuesInterface>({
    start: null,
    end: null,
  });
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-semibold text-dgray text-right mb-3">
          قیمت
        </h5>
        {(formData.price.start || formData.price.end) && (
          <button
            className="rounded-full border-2 border-danger px-2 py-1 text-[10px] font-bold text-danger"
            onClick={() => {
              setFormData((prev) => ({
                date: { ...prev.date },
                price: {
                  start: null,
                  end: null,
                },
              }));
              setSliderValues({ start: null, end: null });
            }}
          >
            حذف فیلتر قیمت
          </button>
        )}
      </div>
      <div className="flex flex-col gap-3 md:gap-2 md:flex-row justify-center mx-auto">
        <NumberFormat
          //NumberFormat Props
          customInput={Input}
          thousandSeparator={true}
          suffix={" ریال"}
          //InputWraped Props
          styleClass={``}
          type="text"
          label="از"
          name="PriceStartNumber"
          id="FilterDataPriceStartNumber"
          direction="rtl"
          pattern="[0-9]*"
          inputMode="numeric"
          value={formData.price.start ?? ""}
          autoComplete="off"
          onValueChange={(values) => {
            startPriceChangeHandler(values, setFormData, setSliderValues);
          }}
        />
        <NumberFormat
          //NumberFormat Props
          customInput={Input}
          thousandSeparator={true}
          suffix={" ریال"}
          //InputWraped Props
          styleClass={``}
          type="text"
          label="تا"
          name="PriceEndNumber"
          id="FilterDataPriceEndNumber"
          direction="rtl"
          pattern="[0-9]*"
          inputMode="numeric"
          value={formData.price.end ?? ""}
          autoComplete="off"
          onValueChange={(values) => {
            endPriceChangeHandler(values, setFormData, setSliderValues);
          }}
        />
      </div>

      <Slider
        className="mt-4"
        range
        min={0}
        max={1000000000}
        step={100000}
        reverse
        defaultValue={[0, 1000000]}
        value={[sliderValues.start ?? 0, sliderValues.end ?? 0]}
        onChange={(value) => sliderChange(value, setFormData, setSliderValues)}
      />
    </div>
  );
}

export default Price;

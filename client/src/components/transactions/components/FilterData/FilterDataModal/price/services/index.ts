import { NumberFormatValues } from "react-number-format";
import { formDataSetterType, formDataType } from "../../types/index";

export interface SliderValuesInterface {
  start: number | null;
  end: number | null;
}

export const startPriceChangeHandler = (
  values: NumberFormatValues,
  setFormData: formDataSetterType,
  setSliderValues: React.Dispatch<React.SetStateAction<SliderValuesInterface>>
) => {
  const { value } = values;
  setFormData((prev) => ({
    ...prev,
    price: {
      start: value,
      end: prev.price.end,
    },
  }));
  setSliderValues((prev) => ({
    ...prev,
    start: Number(value),
  }));
};

export const endPriceChangeHandler = (
  values: NumberFormatValues,
  setFormData: formDataSetterType,
  setSliderValues: React.Dispatch<
    React.SetStateAction<SliderValuesInterface>
  >
) => {
  const { value } = values;
  setFormData((prev) => ({
    ...prev,
    price: {
      start: prev.price.start,
      end: value,
    },
  }));
  setSliderValues((prev) => ({
    ...prev,
    end: Number(value),
  }));
};

export const sliderChange = (
  values: [number, number],
  setFormData: formDataSetterType,
  setSliderValues: React.Dispatch<
    React.SetStateAction<SliderValuesInterface>
  >
) => {
  const [start, end] = values;
  setFormData((prev) => ({
    ...prev,
    price: {
      start: String(start),
      end: String(end),
    },
  }));
  setSliderValues({
    start: start,
    end: end,
  });
};

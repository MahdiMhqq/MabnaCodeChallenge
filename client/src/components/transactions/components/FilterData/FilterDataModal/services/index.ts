import { errorMessages } from "utils/appConstants";
import { formDataType, submitFormParams, v_fields } from "../types";

export const formDataInitial: formDataType = {
  price: {
    start: null,
    end: null,
  },
  date: {
    start: null,
    end: null,
  },
};

const v_price = ({ formData, setFormError }: v_fields) => {
  const {
    price: { start, end },
  } = formData;
  if (start === null && end === null) {
    setFormError((prev) => ({
      ...prev,
      price: "",
    }));
    return true;
  } else if (
    (start === "" && end === "") ||
    (start === "0" && end === "0") ||
    (start === "0" && end === "") ||
    (start === "" && end === "0")
  ) {
    setFormError((prev) => ({
      ...prev,
      price: "",
    }));
    return true;
  } else if (start!.length > 16 || end!.length > 16) {
    setFormError((prev) => ({
      ...prev,
      price: errorMessages.transactionsFilterModal.price.maxLength,
    }));
    return false;
  } else {
    setFormError((prev) => ({
      ...prev,
      price: "",
    }));
    return true;
  }
};

const v_date = ({ formData, setFormError }: v_fields) => {
  const {
    date: { start, end },
  } = formData;

  setFormError((prev) => ({
    ...prev,
    date: "",
  }));
  return true;
};

export const submitForm = async ({
  formData,
  setFormError,
  setShowModal,
  setIsFiltered,
  setQueryParams,
}: submitFormParams) => {
  const priceValidation = v_price({
    formData,
    setFormError,
  });
  const dateValidation = v_date({
    formData,
    setFormError,
  });
  if (priceValidation && dateValidation) {
    const priceRange =
      formData?.price?.start && formData?.price?.end
        ? `amount,${formData?.price?.start},${formData?.price?.end}`
        : undefined;

    const dateRange =
      formData?.date?.start && formData?.date?.end
        ? `date,${formData?.date?.start?.slice(
            0,
            10
          )},${formData?.date?.end?.slice(0, 10)}`
        : undefined;
    const rangeParam: string[] = [];
    dateRange && rangeParam.push(dateRange);
    priceRange && rangeParam.push(priceRange);
    setQueryParams((prev) => ({ ...prev, range: rangeParam }));
    setShowModal(false);
    setIsFiltered(true);
  }
};

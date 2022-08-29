import { TransactionQueryParams } from "pages/api/provider/main/data-contracts";

export interface formDataType {
  price: {
    start: string | null;
    end: string | null;
  };
  date: {
    start: string | null;
    end: string | null;
  };
}
export interface formErrorType {
  price: string;
  date: string;
  server: string;
}
export type formDataSetterType = React.Dispatch<
  React.SetStateAction<formDataType>
>;
export type formErrorSetterType = React.Dispatch<
  React.SetStateAction<formErrorType>
>;

export interface v_fields {
  formData: formDataType;
  setFormError: formErrorSetterType;
}
export interface submitFormParams {
  formData: formDataType;
  setFormError: formErrorSetterType;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setQueryParams: React.Dispatch<React.SetStateAction<TransactionQueryParams>>;
}

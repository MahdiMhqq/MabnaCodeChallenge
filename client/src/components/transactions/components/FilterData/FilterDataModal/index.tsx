import React, { useEffect, useState } from "react";

import { formDataInitial, submitForm } from "./services";

import BasicModal from "components/UI/basicModal";
import Price from "./price";
import MyRangePicker from "./rangePicker";

import { TransactionQueryParams } from "pages/api/provider/main/data-contracts";
import { formDataType } from "./types";

interface FilterDataModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setQueryParams: React.Dispatch<React.SetStateAction<TransactionQueryParams>>;
}

function FilterDataModal({
  showModal,
  setShowModal,
  setIsFiltered,
  setQueryParams,
}: FilterDataModalProps) {
  //STATES
  const [formData, setFormData] = useState<formDataType>(formDataInitial);
  const [formError, setFormError] = useState({
    price: "",
    date: "",
    server: "",
  });

  useEffect(() => {
    if (
      (formData.date.end === null || formData.date.end === "") &&
      (formData.date.start === null || formData.date.start === "") &&
      (formData.price.end === null || formData.price.end === "") &&
      (formData.price.start === null || formData.price.start === "")
    )
      setIsFiltered(false);
    else setIsFiltered(true);
  }, [formData]);

  return (
    <BasicModal
      title="فیلتر داده ها"
      showModal={showModal}
      setShowModal={setShowModal}
      onConfrim={() =>
        submitForm({
          formData,
          setFormError,
          setShowModal,
          setIsFiltered,
          setQueryParams,
        })
      }
      onCancel={() => setShowModal(false)}
      okText={"اعمال فیلتر"}
      cancelText={"بستن"}
      customClass={"FilterDataModal"}
      okBtnType={"OK"}
    >
      <div className={"w-full mb-4"}>
        <Price formData={formData} setFormData={setFormData} />
        {formError.price !== "" && (
          <p className="mt-5 text-right text-xs font-semibold text-ddanger">
            {formError.price}
          </p>
        )}
      </div>
      <div className={"w-full mb-4"}>
        <MyRangePicker formData={formData} setFormData={setFormData} />
        {formError.date !== "" && (
          <p className="mt-5 text-right text-xs font-semibold text-ddanger">
            {formError.date}
          </p>
        )}
      </div>

      {formError.server !== "" && (
        <p className="mt-5 text-right text-xs font-semibold text-ddanger">
          {formError.server}
        </p>
      )}
    </BasicModal>
  );
}

export default FilterDataModal;

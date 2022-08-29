import React, { useState } from "react";

import { TransactionQueryParams } from "pages/api/provider/main/data-contracts";

import icons from "utils/fonticons";

import FilterDataModal from "./FilterDataModal";
import { onCancelFilter } from "./services";

interface FilterDataProps {
  setQueryParams: React.Dispatch<React.SetStateAction<TransactionQueryParams>>;
  customClass?: string;
}

function FilterData({ customClass, setQueryParams }: FilterDataProps) {
  //STATES
  const [isFiltered, setIsFiltered] = useState(false);
  const [showFilterDataModal, setShowFilterModal] = useState(false);
  return (
    <>
      <FilterDataModal
        showModal={showFilterDataModal}
        setShowModal={setShowFilterModal}
        setIsFiltered={setIsFiltered}
        setQueryParams={setQueryParams}
      />

      <div
        className={`flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto ${
          customClass ?? ""
        }`}
      >
        {isFiltered && (
          <div
            className="w-full md:w-auto py-1 px-3 flex items-center justify-center gap-x-2 text-xs rounded-full transition duration-300 hover:shadow-xl cursor-pointer text-white bg-danger hover:bg-ddddanger active:bg-lldanger"
            onClick={() => onCancelFilter(setQueryParams, setIsFiltered)}
          >
            <span className="">حذف فیلتر ها</span>
            <span className="h-4 w-4 flex items-center justify-center">
              {icons.cancelFilter(`h-4 w-4 fill-white`)}
            </span>
          </div>
        )}
        <div
          className={`w-full md:w-auto py-1 px-3 flex items-center justify-center gap-x-2 text-sm  border-2 border-dg rounded-lg transition duration-300 hover:shadow-xl group cursor-pointer text-dgray bg-llgray hover:border-ddinfo hover:text-white hover:bg-ddinfo`}
          onClick={() => setShowFilterModal(true)}
        >
          <span className="">فیلتر های بیشتر</span>
          <span className="h-4 w-4 flex items-center justify-center">
            {icons.filter(`h-4 w-4 fill-dgray group-hover:fill-white`)}
          </span>
        </div>
      </div>
    </>
  );
}

export default FilterData;

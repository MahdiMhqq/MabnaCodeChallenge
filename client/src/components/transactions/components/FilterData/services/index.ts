import { TransactionQueryParams } from "pages/api/provider/main/data-contracts";

export const onCancelFilter = (
  setQueryParams: React.Dispatch<React.SetStateAction<TransactionQueryParams>>,
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setQueryParams((prev) => ({
    ...prev,
    range: undefined,
  }));
  setIsFiltered(false);
};

import { AssetFullInfo } from "../types";


export const filterData = (
  search: string,
  data: AssetFullInfo[],
  setFilteredData: React.Dispatch<React.SetStateAction<AssetFullInfo[]>>
) => {
  if (search) {
    setFilteredData(
      data?.filter(
        (record) =>
          record?.trade_symbol?.includes(search) ||
          record?.title?.includes(search)
      )
    );
  } else {
    setFilteredData(data);
  }
};

import { Api } from "pages/api/api";
import { AssetFullInfo } from "../types";

export const getTableData = (
  setData: React.Dispatch<React.SetStateAction<AssetFullInfo[]>>,
  setFilteredData: React.Dispatch<React.SetStateAction<AssetFullInfo[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  Promise.all([Api.getAllAssets(), Api.getAllTrades()])
    .then(([assetsRes, tradesRes]) => {
      const assets = assetsRes?.data?.data;
      const trades = tradesRes?.data?.data;

      const data = assets
        ?.map((asset) => {
          const trade = trades?.find(
            (trade) => trade?.entity?.id === asset?.id
          );
          if (asset?.value?.trade_symbol) {
            const assetFullInfo: AssetFullInfo = {
              id: asset?.id,
              trade_symbol: asset?.value?.trade_symbol,
              short_title: asset?.value?.short_title,
              close_price: trade?.value?.close_price ?? null,
              volume: trade?.value?.volume ?? null,
            };
            return assetFullInfo;
          } else return undefined;
        })
        .filter(
          //Only records with trade_symbol
          (record): record is AssetFullInfo => typeof record !== "undefined"
        );
      setData(data);
      setFilteredData(data);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.error("There was an Error getting trades/assets data!", err);
    });
};

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
          record?.short_title?.includes(search)
      )
    );
  } else {
    setFilteredData(data);
  }
};

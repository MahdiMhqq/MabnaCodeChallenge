import type { GetServerSideProps, InferGetStaticPropsType } from "next";

import AssetListPage from "components/AssetList";
import { Api } from "./api/api";
import { AssetFullInfo } from "components/AssetList/types";

const AssetList = ({
  assetData,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return <AssetListPage assetData={assetData} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [assetsRes, tradesRes] = await Promise.all([
    Api.getAllAssets(),
    Api.getAllTrades(),
  ]);

  const assets = assetsRes?.data?.data;
  const trades = tradesRes?.data?.data;

  const assetData = assets
    ?.map((asset) => {
      const trade = trades?.find(
        (trade) => trade?.entity?.id === asset?.entity?.id
      );
      if (asset?.value?.trade_symbol) {
        const assetFullInfo: AssetFullInfo = {
          id: asset?.entity?.id,
          trade_symbol: asset?.value?.trade_symbol,
          title: asset?.value?.title,
          close_price: trade?.value?.close_price ?? null,
          volume: trade?.value?.value ?? null,
        };
        return assetFullInfo;
      } else return undefined;
    })
    .filter(
      //Only records with trade_symbol
      (record): record is AssetFullInfo => typeof record !== "undefined"
    )
    .sort((a, b) => a?.trade_symbol.localeCompare(b?.trade_symbol));

  return {
    props: {
      assetData,
    },
  };
};

export default AssetList;

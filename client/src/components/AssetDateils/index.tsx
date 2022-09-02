import React from "react";

import Layout from "components/UI/layout";
import BreadCrumb from "./components/breadCrumb";

import {
  AssetInterface,
  BidAskInterface,
  TradeInterface,
} from "pages/api/provider/data-contracts";

import AssetInfo from "./components/AssetInfo";
import TradeInfo from "./components/TradeInfo";
import BidaskInfo from "./components/BidasksInfo";

interface AssetDateilsPageProps {
  assetInfo: AssetInterface;
  assetTrade: TradeInterface;
  bidasks: BidAskInterface;
}

function AssetDetailsPage({
  assetInfo,
  assetTrade,
  bidasks,
}: AssetDateilsPageProps) {
  return (
    <Layout title="لیست دارایی ها" withSearch={false}>
      <BreadCrumb
        customClass="mb-3"
        curr={{ title: assetInfo?.value?.trade_symbol }}
        prev={{ link: "/", title: "لیست دارایی ها" }}
      />
      <AssetInfo
        AssetInfo={assetInfo}
        TradeInfo={assetTrade}
        customClass={"mb-4"}
      />
      <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-2">
        <TradeInfo tradeInfo={assetTrade} customClass={"basis-1/2"} />
        <BidaskInfo bidasks={bidasks} customClass={"basis-1/2"} />
      </div>
    </Layout>
  );
}

export default AssetDetailsPage;

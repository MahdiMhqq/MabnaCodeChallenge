import {
  AssetInterface,
  TradeInterface,
} from "pages/api/provider/data-contracts";
import React from "react";
import { formatPrice } from "utils/global";

interface AssetInfoProps {
  AssetInfo: AssetInterface;
  TradeInfo: TradeInterface;
  customClass?: string;
}

function AssetInfo({ AssetInfo, TradeInfo, customClass }: AssetInfoProps) {
  return (
    <div
      className={`px-4 py-2 rounded-lg border border-gray bg-white w-full flex flex-col gap-y-4 justify-between ${
        customClass ?? ""
      }`}
    >
      <div className="flex items-center gap-x-4">
        <h5 className="text-info font-bold text-lg ">
          {AssetInfo?.value?.trade_symbol}
        </h5>
        <span>{formatPrice(TradeInfo?.value?.close_price)}</span>
      </div>
      <p className="text-dgray text-sm">{AssetInfo?.value?.title}</p>
    </div>
  );
}

export default AssetInfo;

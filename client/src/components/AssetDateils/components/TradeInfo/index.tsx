import { TradeInterface } from "pages/api/provider/data-contracts";
import React from "react";
import { formatPrice } from "utils/global";
import { keyTitles } from "./services";

interface TradeInfoProps {
  tradeInfo: TradeInterface;
  customClass?: string;
}

function TradeInfo({ tradeInfo, customClass }: TradeInfoProps) {
  return (
    <div className={`flex flex-col gap-y-2 ${customClass ?? ""}`}>
      <h6 className="px-4 py-2 rounded-lg border border-gray bg-white w-full font-semibold">
        اطلاعات معاملات
      </h6>
      <div className="px-4 py-2 rounded-lg border border-gray bg-white w-full flex flex-col">
        {keyTitles?.map((keyTitle, index) => (
          <div
            className="flex items-center justify-between border-b border-b-gray last:border-0 py-2"
            key={index}
          >
            <h6 className="font-medium">{keyTitle?.title ?? "-"}</h6>
            <span>{formatPrice(tradeInfo?.value[keyTitle.key])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradeInfo;

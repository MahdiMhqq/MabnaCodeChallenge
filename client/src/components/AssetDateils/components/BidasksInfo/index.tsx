import React from "react";

import { BidAskInterface } from "pages/api/provider/data-contracts";

import { formatPrice } from "utils/global";
import { keyTitles } from "./services";

interface BidaskInfoProps {
  bidasks: BidAskInterface;
  customClass?: string;
}

function BidaskInfo({ bidasks, customClass }: BidaskInfoProps) {
  return (
    <div className={`flex flex-col gap-y-2 ${customClass ?? ""}`}>
      <h6 className="px-4 py-2 rounded-lg border border-gray bg-white w-full font-semibold">
        عرضه تقاضا
      </h6>
      <div className="relative px-4 py-2 rounded-lg border border-gray bg-white w-full flex flex-col grow">
        <div className="flex justify-between">
          {keyTitles?.map((keyTitle, index) => (
            <span
              className="font-medium text-center basis-1/6 py-3 border-b border-b-gray"
              key={index}
            >
              {keyTitle?.title ?? "-"}
            </span>
          ))}
        </div>
        {bidasks?.value?.orders?.length > 0 ? (
          bidasks?.value?.orders
            ?.sort((a, b) => b.order_rank - a.order_rank)
            .map((bidask, index) => (
              <div
                className="flex justify-between border-b border-b-gray last:border-none"
                key={index}
              >
                {keyTitles?.map((keyTitle, index) => (
                  <span
                    className={`text-center basis-1/6 py-2
                  ${
                    keyTitle.key.includes("bid")
                      ? "text-danger"
                      : "text-success"
                  }
                `}
                    key={index}
                  >
                    {formatPrice(bidask[keyTitle?.key])}
                  </span>
                ))}
              </div>
            ))
        ) : (
          <p className="my-6 text-dgray text-sm mx-auto">
            اطلاعاتی جهت نمایش وجود ندارد!
          </p>
        )}
      </div>
    </div>
  );
}

export default BidaskInfo;

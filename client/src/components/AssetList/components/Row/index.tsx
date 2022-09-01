import React, { useEffect, useRef } from "react";
import { ListChildComponentProps } from "react-window";

import { AssetFullInfo } from "components/AssetList/types";

import { e2p, formatPrice } from "utils/global";
import { highLightSearch } from "./services";

import usePrevious from "hooks/usePrevious";

interface RowInterface extends ListChildComponentProps<AssetFullInfo[]> {
  search: string;
}

const Row = ({ index, style, data, isScrolling, search }: RowInterface) => {
  //Variables
  const rowData = data[index];

  //PREVIOUS VALUE
  const prevSearch = usePrevious(search);

  //REF
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isScrolling) highLightSearch(search, prevSearch, rowRef);
  }, [search, isScrolling, rowRef]);

  return (
    <div style={style} className="w-full h-11 px-4">
      <div
        className="flex items-center justify-between gap-x-3 h-11 rowData"
        ref={rowRef}
      >
        {isScrolling ? (
          <>
            <span className="w-1/6 flex items-center">
              <span className="shimmer"></span>
            </span>
            <span className="w-1/3 flex items-center">
              <span className="shimmer"></span>
            </span>
            <span className="w-1/5 flex items-center">
              <span className="shimmer"></span>
            </span>
            <span className="grow flex items-center">
              <span className="shimmer"></span>
            </span>
          </>
        ) : (
          <>
            <span className="w-1/6 rtl truncate">{e2p(rowData?.trade_symbol)}</span>
            <span className="w-1/3 rtl truncate">{e2p(rowData?.short_title ?? "")}</span>
            <span className="w-1/5">{formatPrice(rowData?.close_price)}</span>
            <span className="grow">{formatPrice(rowData?.volume)}</span>
          </>
        )}
      </div>
      <hr className="border-dgray" />
    </div>
  );
};

export default Row;

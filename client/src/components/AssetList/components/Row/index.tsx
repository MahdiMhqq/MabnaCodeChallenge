import React, { useEffect, useRef } from "react";
import { ListChildComponentProps } from "react-window";

import { AssetFullInfo } from "components/AssetList/types";

import { e2p, formatPrice } from "utils/global";
import { highLightSearch } from "./services";

import usePrevious from "hooks/usePrevious";
import Link from "next/link";

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
        <span className="w-1/3 sm:w-1/6 rtl truncate">
          {isScrolling ? (
            <span className="shimmer"></span>
          ) : (
            <Link href={`/assets/${rowData?.id}`} passHref>
              <a className="font-bold text-info hover:text-linfo cursor-pointer transition duration-200">
                {e2p(rowData?.trade_symbol)}
              </a>
            </Link>
          )}
        </span>
        <span className="hidden sm:block w-1/3 rtl truncate">
          {isScrolling ? (
            <span className="shimmer"></span>
          ) : (
            e2p(rowData?.title ?? "")
          )}
        </span>
        <span className="w-1/3 sm:w-1/5 truncate">
          {isScrolling ? (
            <span className="shimmer"></span>
          ) : (
            formatPrice(rowData?.close_price)
          )}
        </span>
        <span className="grow w-1/3 sm:w-[30%] truncate">
          {isScrolling ? (
            <span className="shimmer"></span>
          ) : (
            formatPrice(rowData?.volume)
          )}
        </span>
      </div>
      <hr className="border-dgray" />
    </div>
  );
};

export default Row;

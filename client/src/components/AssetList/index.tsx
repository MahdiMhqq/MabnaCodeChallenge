import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Layout from "components/UI/layout";
import Row from "./components/Row";
import LoadingSpinner from "components/UI/loadingSpinner";

import { AssetFullInfo } from "./types";
import { filterData, getTableData } from "./services";

function AssetListPage() {
  //STATE
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<AssetFullInfo[]>([]);
  const [data, setData] = useState<AssetFullInfo[]>([]);
  const [loading, setLoading] = useState(true);

  //LIFE CYCLE METHOD
  useEffect(() => {
    getTableData(setData, setFilteredData, setLoading);
  }, []);

  useEffect(() => {
    filterData(search, data, setFilteredData);
  }, [search]);

  return (
    <Layout
      title="لیست دارایی ها"
      withSearch={true}
      search={search}
      setSearch={setSearch}
    >
      <div className="px-4 py-2 rounded-lg border border-gray bg-white w-full flex justify-between gap-x-3 font-bold mb-4">
        <span className="w-1/6 truncate">نماد</span>
        <span className="w-1/3 truncate">نام شرکت</span>
        <span className="w-1/5 truncate">آخرین قیمت</span>
        <span className="grow truncate">ارزش معاملات</span>
      </div>
      <div className="relative w-full h-screen bg-white border border-gray rounded-lg">
        {loading && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-y-3">
            <LoadingSpinner width="1.5rem" color="#0597FA" />
            <span className="text-linfo font-medium">در حال بارگذاری...</span>
          </div>
        )}
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={filteredData?.length}
              itemSize={44}
              width={width}
              itemData={filteredData}
              direction="rtl"
              className="virtualList"
              useIsScrolling={true}
   
            overscanCount={20}
            >
              {({ index, style, data, isScrolling }) => (
                <Row
                  index={index}
                  data={data}
                  search={search}
                  style={style}
                  isScrolling={isScrolling}
                  key={index}
                />
              )}
            </List>
          )}
        </AutoSizer>
      </div>
    </Layout>
  );
}

export default AssetListPage;

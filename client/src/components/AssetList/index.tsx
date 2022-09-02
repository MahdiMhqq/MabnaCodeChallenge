import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Layout from "components/UI/layout";
import Row from "./components/Row";

import { AssetFullInfo } from "./types";
import { filterData } from "./services";

interface AssetListInterface {
  assetData: AssetFullInfo[];
}

function AssetListPage({ assetData }: AssetListInterface) {
  //STATE
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<AssetFullInfo[]>(assetData);

  //LIFE CYCLE METHOD
  useEffect(() => {
    filterData(search, assetData, setFilteredData);
  }, [search]);

  return (
    <Layout
      title="لیست دارایی ها"
      withSearch={true}
      search={search}
      setSearch={setSearch}
    >
      <div className="px-4 py-2 rounded-lg border border-gray bg-white w-full flex justify-between items-center gap-x-3 font-bold mb-2">
        <span className="w-1/3 sm:w-1/6">نماد</span>
        <span className="w-1/3 hidden sm:block">نام شرکت</span>
        <span className="w-2/5 sm:w-1/5">آخرین قیمت</span>
        <span className="grow w-1/3 sm:w-[30%]">ارزش معاملات</span>
      </div>
      <div className="relative w-full h-screen bg-white border border-gray rounded-lg">
        {filteredData?.length > 0 ? (
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
        ) : (
          <p className="my-6 text-dgray mx-auto text-center">
            اطلاعاتی جهت نمایش وجود ندارد!
          </p>
        )}
      </div>
    </Layout>
  );
}

export default AssetListPage;

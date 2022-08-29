import React, { useEffect, useState } from "react";
import faIR from "antd/lib/locale/fa_IR";
import { Table, ConfigProvider } from "antd";

import {
  columnsCreator,
  getTransactionsData,
  queryParamsCreator,
} from "./services";

import DownloadToCsv from "./components/DownloadToCsv";
import FilterData from "./components/FilterData";
import CustomPagination from "components/UI/CustomPagination";
import SearchBar from "../UI/layout/SearchBar";

import { useAppSelector } from "store/hooks";

import {
  TransactionQueryParams,
  TransactionResponse,
  TransactionResponsess,
} from "pages/api/provider/main/data-contracts";

import { tableLocale } from "utils/appConstants";
import { DEFAULT_TABLE_PAGE_SIZE } from "utils/config";

function TransactionsPage() {
  //STORE
  const userData = useAppSelector((state) => state.user);
  //STATES
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState<TransactionQueryParams>({
    offset: 0,
    order: DEFAULT_TABLE_PAGE_SIZE,
    q: undefined,
    range: undefined,
    sort: "dsc",
    paymentStatus: undefined,
  });
  const [transactionsData, setTransactionsData] =
    useState<TransactionResponsess>({
      transactions: [],
      totalCount: 0,
    });
  const [csvData, setCsvData] = useState<TransactionResponse[]>([]);

  useEffect(() => {
    getTransactionsData(
      userData,
      queryParams,
      setLoading,
      setCsvData,
      setTransactionsData
    );
  }, [queryParams]);

  return (
    <>
      <div className="mb-4 flex items-center gap-3 w-full justify-center flex-col sm:flex-row sm:justify-end">
        <SearchBar
          apiLoading={loading}
          queryParams={queryParams}
          setQueryParams={setQueryParams}
          customClass={"w-full md:w-auto md:ml-auto order-1"}
        />
        <FilterData
          customClass="w-full md:w-auto order-3 sm:order-2"
          setQueryParams={setQueryParams}
        />
        <DownloadToCsv
          data={csvData}
          customClass="w-full md:w-auto flex-shrink-[2] order-2 sm:order-3"
        />
      </div>
      <ConfigProvider locale={faIR}>
        <div>
          <Table
            rowKey={(record) => record.id}
            sticky={true}
            bordered={true}
            showHeader={true}
            loading={loading}
            pagination={{
              position: ["bottomCenter"],
              hideOnSinglePage: true,
              defaultPageSize: DEFAULT_TABLE_PAGE_SIZE,
              itemRender: (page, type) =>
                CustomPagination(
                  page,
                  Number(transactionsData.totalCount),
                  type
                ),
              showSizeChanger: false,
              total: Number(transactionsData.totalCount),
            }}
            size={"middle"}
            scroll={{
              x: "max-content",
              y: "70vh",
            }}
            columns={columnsCreator()}
            dataSource={transactionsData.transactions}
            locale={tableLocale}
            onChange={(pagination, filters, sorter) => {
              queryParamsCreator(pagination, filters, sorter, setQueryParams);
            }}
          />
        </div>
      </ConfigProvider>
    </>
  );
}

export default TransactionsPage;

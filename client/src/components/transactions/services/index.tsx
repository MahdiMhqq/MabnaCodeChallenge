import {
  ColumnsType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from "antd/lib/table/interface";
import PaymenStatus from "components/UI/paymenStatus";
import { API } from "pages/api/api";
import {
  TransactionQueryParams,
  TransactionResponse,
  TransactionResponsess,
} from "pages/api/provider/main/data-contracts";
import { userStoreInterface } from "store/types";

import {
  DateToMilis,
  e2p,
  formatDateCSV,
  formatDateTable,
  formatPrice,
} from "utils/global";

export const columnsCreator = () => {
  const columns: ColumnsType<TransactionResponse> = [
    {
      title: "شناسه پرداخت",
      dataIndex: "paymentId",
      className: "w-24",
      ellipsis: true,
      render: (value) => {
        return <p className="w-24 truncate">{value}</p>;
      },
    },
    {
      title: "مبلغ (ریال)",
      dataIndex: "amount",
      className: "w-1/6",
      render: (value) => {
        return formatPrice(value);
      },
    },
    {
      title: "تاریخ",
      dataIndex: "date",
      className: "w-[6.5rem]",
      sorter: (a: TransactionResponse, b: TransactionResponse) =>
        DateToMilis(b.date) - DateToMilis(a.date),
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend", "ascend"],
      render: (value, record) => {
        return <p className="w-[6.5rem]">{formatDateTable(value)}</p>;
      },
    },
    {
      title: "توضیحات",
      dataIndex: "desc",
      className: "w-52",
      ellipsis: true,
      render: (value) => {
        return <div className="w-52 overflow-hidden truncate">{value}</div>;
      },
    },
    {
      title: "وضعیت پرداخت",
      dataIndex: "paymentStatus",
      className: "w-[7.5rem]",
      filters: [
        {
          text: "پرداخت موفق",
          value: "SUCCESS",
        },
        {
          text: "لفو شده",
          value: "ABORT",
        },
        {
          text: "رها شده",
          value: "LEFT",
        },
        {
          text: "ایجاد شده",
          value: "CREATED",
        },
        {
          text: "پرداخت ناموفق",
          value: "FAILURE",
        },
      ],
      render: (text, record) => <PaymenStatus status={record.paymentStatus} />,
    },
    {
      title: "شناسه ارجاع",
      dataIndex: "referenceId",
      className: "w-[5.5rem]",
      ellipsis: true,
      render: (value) => {
        return <p className="w-[5.5rem] truncate">{e2p(value)}</p>;
      },
    },
  ];
  return columns;
};

interface paymentStatusConditionInterface {
  text: string;
  value: "CREATED" | "SUCCESS" | "ABORT" | "LEFT" | "FAILURE";
}
type paymentStatusConditionsType = paymentStatusConditionInterface[];

const paymentStatusConditions: paymentStatusConditionsType = [
  {
    text: "پرداخت موفق",
    value: "SUCCESS",
  },
  {
    text: "لفو شده",
    value: "ABORT",
  },
  {
    text: "رها شده",
    value: "LEFT",
  },
  {
    text: "ایجاد شده",
    value: "CREATED",
  },
  {
    text: "پرداخت ناموفق",
    value: "FAILURE",
  },
];

const paymentStatusCSV = (status: string): string => {
  return (
    paymentStatusConditions.find((i) => i.value === status)?.text ?? "FAILURE"
  );
};

export const csvDataPrepare = (
  pagination?: TablePaginationConfig,
  extra?: TableCurrentDataSource<TransactionResponse>,
  transactions?: TransactionResponse[]
) => {
  let filteredData: TransactionResponse[] = [];
  if (pagination && extra) {
    const { current, pageSize, defaultPageSize } = pagination;
    const currentData = extra.currentDataSource;
    const startIndex = (current ? current - 1 : 0) * (defaultPageSize ?? 0);
    const endIndex = startIndex + (pageSize ?? 25);
    filteredData = currentData.slice(startIndex, endIndex);
  } else if (transactions) {
    filteredData = transactions?.slice(0, 25);
  }
  return filteredData.map((data) => ({
    ...data,
    date: formatDateCSV(data?.date ?? ""),
    paymentStatus: paymentStatusCSV(data?.paymentStatus ?? ""),
  }));
};

export const getTransactionsData = (
  userData: userStoreInterface,
  queryParams: TransactionQueryParams,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCsvData: React.Dispatch<React.SetStateAction<TransactionResponse[]>>,
  setTransactionsData: React.Dispatch<
    React.SetStateAction<TransactionResponsess>
  >
) => {
  setLoading(true);
  API.dashboardApiV1TransactionsRetrieve(
    {
      ...queryParams,
    },
    {
      headers: {
        Authorization: `Token ${userData.token}`,
      },
    }
  )
    .then((res) => {
      const transData = res?.data;
      setTransactionsData(transData);
      setCsvData(csvDataPrepare(undefined, undefined, transData.transactions));
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.error(err);
    });
};

export const queryParamsCreator = (
  pagination: TablePaginationConfig,
  filters: Record<string, FilterValue | null>,
  sorter:
    | SorterResult<TransactionResponse>
    | SorterResult<TransactionResponse>[],
  setQueryParams: React.Dispatch<React.SetStateAction<TransactionQueryParams>>
) => {
  const paginationParams = paginationQueryCreator(pagination);
  const filtersParams = filtersQueryCreator(filters);
  const sortParams = sortQueryCreator(sorter);

  setQueryParams((prev) => ({
    ...prev,
    ...paginationParams,
    ...filtersParams,
    ...sortParams,
  }));
};

const paginationQueryCreator = (pagination: TablePaginationConfig) => {
  return {
    offset: (pagination?.current ?? 0) * (pagination?.pageSize ?? 0),
    order: pagination?.pageSize ?? 0,
  };
};

const filtersQueryCreator = (filters: Record<string, FilterValue | null>) => {
  const objectKeys = Object.keys(filters);
  if (objectKeys.length > 0) {
    const paymentStatus: { [key: string | number]: FilterValue | undefined } =
      {};
    objectKeys.forEach((value) => {
      paymentStatus[value] = filters[value] ?? undefined;
    });
    return paymentStatus;
  } else {
    return { paymentStatus: undefined };
  }
};

const sortQueryCreator = (
  sorter:
    | SorterResult<TransactionResponse>
    | SorterResult<TransactionResponse>[]
) => {
  if (!Array.isArray(sorter)) {
    return {
      sort:
        sorter.order === undefined
          ? undefined
          : sorter.order === "descend"
          ? "dsc"
          : "asc",
    };
  } else {
    return { sort: undefined };
  }
};

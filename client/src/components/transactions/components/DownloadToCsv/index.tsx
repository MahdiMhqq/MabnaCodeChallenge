import { TransactionResponse } from "pages/api/provider/main/data-contracts";
import React from "react";
import { CSVLink } from "react-csv";

import icons from "utils/fonticons";

interface DownloadToCsvProps {
  data: TransactionResponse[];
  customClass?: string;
}

const csvHeaders = [
  {
    label: "شناسه پرداخت",
    key: "paymentId",
  },
  {
    label: "مبلغ (ریال)",
    key: "amount",
  },
  {
    label: "تاریخ",
    key: "date",
  },
  {
    label: "توضیحات",
    key: "desc",
  },
  {
    label: "وضعیت پرداخت",
    key: "paymentStatus",
  },
  {
    label: "شناسه ارجاع",
    key: "referenceId",
  },
];

function DownloadToCsv({ data, customClass }: DownloadToCsvProps) {
  return (
    <CSVLink
      data={data}
      headers={csvHeaders}
      filename={"transactions-exported.csv"}
      className={`py-1 px-3 flex items-center justify-center gap-x-2 text-sm text-dgray bg-llgray border-2 border-dg rounded-lg transition duration-300 hover:border-lprimary hover:text-white hover:bg-lprimary hover:shadow-xl group cursor-pointer sm:h-8 md:h-auto ${
        customClass ?? ""
      }`}
      target="_blank"
    >
      <span className="block sm:hidden md:block">ایجاد خروجی</span>
      <span className="h-4 w-4 flex items-center justify-center">
        {icons.excel("h-4 w-4 fill-dgray group-hover:fill-white")}
      </span>
    </CSVLink>
  );
}

export default DownloadToCsv;

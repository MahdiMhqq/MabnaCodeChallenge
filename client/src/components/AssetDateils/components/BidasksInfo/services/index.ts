import { BidasksOrder } from "pages/api/provider/data-contracts";

interface titleInterface {
  key: keyof BidasksOrder;
  title: string;
}

export const keyTitles: titleInterface[] = [
  {
    key: "ask_count",
    title: "دستور",
  },
  {
    key: "ask_volume",
    title: "تعداد",
  },
  {
    key: "ask_price",
    title: "خرید",
  },
  {
    key: "bid_price",
    title: "فروش",
  },
  {
    key: "bid_volume",
    title: "تعداد",
  },
  {
    key: "bid_count",
    title: "دستور",
  },
];

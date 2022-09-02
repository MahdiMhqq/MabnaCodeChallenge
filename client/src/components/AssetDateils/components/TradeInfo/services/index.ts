import { TradeValue } from "pages/api/provider/data-contracts"

interface titleInterface {
    key: keyof TradeValue;
    title: string;
}

export const keyTitles:titleInterface[] = [
    {
        key: "close_price",
        title: "پایانی"
    },
    {
        key: "high_price",
        title: "بیشترین"
    },
    {
        key: "low_price",
        title: "کمترین"
    },
    {
        key: "open_price",
        title: "اولین"
    },
    {
        key: "real_close_price",
        title: "آخرین"
    },
    {
        key: "volume",
        title: "حجم"
    },
    {
        key: "value",
        title: "ارزش"
    },
]
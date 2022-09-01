export const formatPrice = (price: string | number | null) => {
  return price
    ? e2p(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    : "-";
};

export const e2p = (s: string | number) => {
  if (typeof s == "number") s = s.toString();
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
};
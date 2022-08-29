export const formatPrice = (price: string) => {
  return e2p(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
};

export const p2e = (s: string) =>
  s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());

export const a2e = (s: string) =>
  s.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

export const e2p = (s: string | number) => {
  if (typeof s == "number") s = s.toString();
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
};
export const e2a = (s: string) =>
  s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
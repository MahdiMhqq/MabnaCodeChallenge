export interface AssetFullInfo {
  id: string;
  trade_symbol: string;
  title: string | undefined;
  close_price: number | null;
  volume: number | null;
}

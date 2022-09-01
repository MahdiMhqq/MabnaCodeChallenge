interface AssetsEntity {
  id: string;
  meta: {
    type: string;
  };
}

interface AssetValue {
  title: string;
  english_title: string;
  short_title?: string;
  english_short_title?: string;
  trade_symbol: string;
  english_trade_symbol: string;
}

interface AssetMeta {
  version: number;
  state: string;
  insert_date_time: string;
  type: string;
}

export interface AssetInterface {
  entity: AssetsEntity;
  type: string;
  id: string;
  value: AssetValue;
  meta: AssetMeta;
}

export interface AssetDataResponse {
  data: AssetInterface[];
}

interface TradeValue {
  open_price: number;
  high_price: number;
  low_price: number;
  real_close_price: number;
  volume: number;
  value: number;
  trade_count: number;
  close_price: number;
  close_price_change: number;
  close_price_change_percent: number;
}

export interface TradeInterface {
  entity: AssetsEntity;
  type: string;
  id: string;
  meta: AssetMeta;
  value: TradeValue;
}

export interface TradesDataResponse {
  data: TradeInterface[];
}



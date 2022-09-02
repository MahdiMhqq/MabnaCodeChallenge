interface AssetsEntity {
  id: string;
  meta: {
    type: string;
  };
}

interface AssetValue {
  title: string;
  trade_symbol: string;
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

export interface TradeValue {
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

export interface BidasksOrder {
  ask_count: number;
  ask_price: number;
  ask_volume: number;
  bid_count: number;
  bid_price: number;
  bid_volume: number;
  order_rank: number;
}

interface BidaskValue {
  end_date_time: string;
  start_date_time: string;
  orders: BidasksOrder[]
}
export interface BidAskInterface {
  entity: AssetsEntity;
  type: string;
  id: string;
  meta: AssetMeta;
  value: BidaskValue;
}

export interface BidAskDataResponse {
  data: BidAskInterface[];
}

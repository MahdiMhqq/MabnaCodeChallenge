/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AssetDataResponse,
  BidAskDataResponse,
  TradesDataResponse,
} from "./data-contracts";

import { HttpClient, RequestParams } from "./http-client";

export class API<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  getAllAssets = (params: RequestParams = {}) => {
    return this.request<AssetDataResponse, any>({
      path: `/assets`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };

  getAsset = (query: { assetId: string }, params: RequestParams = {}) => {
    return this.request<AssetDataResponse, any>({
      path: `/assets/${query.assetId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  };

  getAllTrades = (params: RequestParams = {}) => {
    return this.request<TradesDataResponse, any>({
      path: `/trades`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };

  getTrade = (query: { assetId: string }, params: RequestParams = {}) => {
    return this.request<TradesDataResponse, any>({
      path: `/trades?asset_id=${query.assetId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };

  getBidAsk = (query: { assetId: string }, params: RequestParams = {}) => {
    return this.request<BidAskDataResponse, any>({
      path: `/bidasks?asset_id=${query.assetId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };
}

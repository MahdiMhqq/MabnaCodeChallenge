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

import { AssetDataResponse, TradesDataResponse } from "./data-contracts";

import { HttpClient, RequestParams } from "./http-client";

export class API<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  
  getAllAssets = (
    params: RequestParams = {}
  ) => {
    return this.request<AssetDataResponse, any>({
      path: `/assets`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };

  getAllTrades = (
    params: RequestParams = {}
  ) => {
    return this.request<TradesDataResponse, any>({
      path: `/trades`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  };
}

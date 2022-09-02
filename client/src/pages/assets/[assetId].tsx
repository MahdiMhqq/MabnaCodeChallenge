import React from "react";
import { GetServerSideProps, InferGetStaticPropsType } from "next";

import AssetDetailsPage from "components/AssetDateils";

import { Api } from "pages/api/api";

const AssetDetails = ({
  assetInfo,
  assetTrade,
  bidasks,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <AssetDetailsPage
      assetInfo={assetInfo}
      assetTrade={assetTrade}
      bidasks={bidasks}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const assetId = context?.query?.assetId;
  if (!assetId || Array.isArray(assetId)) {
    return {
      notFound: true,
    };
  }

  const [assetRes, tradeRes, bidaskRes] = await Promise.all([
    Api.getAsset({ assetId }),
    Api.getTrade({ assetId }),
    Api.getBidAsk({ assetId }),
  ]);

  return {
    props: {
      assetInfo: assetRes?.data?.data[0] ?? null,
      assetTrade: tradeRes?.data?.data[0] ?? null,
      bidasks: bidaskRes?.data?.data[0] ?? null,
    },
  };
};

export default AssetDetails;

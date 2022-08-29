import Layout from "components/UI/layout";
import React, { useState } from "react";

function AssetListPage() {
  const [search, setSearch] = useState("");
  return (
    <Layout
      title="لیست دارایی ها"
      withSearch={true}
      search={search}
      setSearch={setSearch}
    >
      hei there
    </Layout>
  );
}

export default AssetListPage;

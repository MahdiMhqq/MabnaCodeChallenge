import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import Header from "./header";
import LoadingSpinner from "../loadingSpinner";

interface LayoutProps {
  title: string;
  withSearch?: boolean;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

function Layout({
  title,
  children,
  search,
  setSearch,
  withSearch = false,
}: LayoutProps) {
  //STATES
  const [loading, setLoading] = useState(false);

  //ROUTER
  const router = useRouter();

  //Loading effect
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start();
      setLoading(true);
    };
    const handleRouteEnd = () => {
      NProgress.done();
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          {title
            ? title + ` | ${process?.env?.NEXT_PUBLIC_DASH_APP_NAME}`
            : `${process?.env?.NEXT_PUBLIC_DASH_APP_NAME}`}
        </title>
      </Head>
      <Header
        title={title}
        search={search}
        setSearch={setSearch}
        withSearch={withSearch}
        customClass=""
      />
      <div className="px-6 py-4 min-h-screen bg-background">
        {loading && (
          <>
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg z-[1500]`}
            ></div>
            <div
              className={`block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1501]`}
            >
              <LoadingSpinner width="2rem" color="#04035e" />
            </div>
          </>
        )}
        {children}
      </div>
    </>
  );
}

export default Layout;

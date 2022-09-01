import "nprogress/nprogress.css";
import "assets/styles/NProgressCustom.scss";

import "assets/styles/globals.scss";

import type { AppProps } from "next/app";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

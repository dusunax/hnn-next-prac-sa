import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "@/styles/input.css";

import { DefaultLayout } from "@/layouts/default-layout";
import FontProvider from "@/common/font-provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <Head>
        <title>hnn-next-prac-sa</title>
        <meta name="description" content="HNN - project Migrating to Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </FontProvider>
  );
}

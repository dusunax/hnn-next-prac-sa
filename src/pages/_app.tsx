import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";
import "@/styles/input.css";

import { DefaultLayout } from "@/layouts/default-layout";
import FontProvider from "@/common/font-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </FontProvider>
  );
}

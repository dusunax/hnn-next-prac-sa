import Head from "next/head";

import MainComponent from "@/components/main/main-component";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hnn-next-prac-sa</title>
        <meta name="description" content="HNN - project Migrating to Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainComponent />
    </>
  );
}

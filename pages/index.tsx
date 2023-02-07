import Head from "next/head";
import Image from "next/image";
import { Main } from "../components/main/Main";
import { PageWrapper } from "../components/bg-wrapper/PageWrapper";
import { Header } from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Webtronics</title>
        <meta name="description" content="Webtronics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main />

      <PageWrapper />
    </>
  );
}

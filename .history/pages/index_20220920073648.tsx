import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Carosel from "../components/Carosel";
const Home: NextPage = () => {
  return (
    <div className="bg-white-50 flex min-h-screen">
      <Head>
        <title>BGS</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <div className="max-w-screen flex max-h-screen flex-col items-center justify-center ">
        <Carosel />
      </div>
    </div>
  );
};

export default Home;

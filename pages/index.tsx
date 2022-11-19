import type { NextPage } from "next";
import Head from "next/head";
import Information from "../components/Information";
import Envelope from "../components/Envelope";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiffany & Cyrus | 24/01/23</title>
        <meta property="og:title" content="You are invited! 24 Jan 2023" />
        <meta property="og:image" content="og.jpg" />
        <link rel="icon" href="/wedding.png" />
      </Head>

      <Envelope>
        <Information />
      </Envelope>
    </>
  );
};

export default Home;

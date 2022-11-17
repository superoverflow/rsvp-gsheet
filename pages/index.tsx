import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";
import Envelope from "../components/Envelope";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiffany & Cyrus | 24/01/23</title>
        <meta property="og:title" content="You are invited! 24 Jan 2023" />
        <meta property="og:image" content="og.jpg" />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👰🏻‍♀️</text></svg>"
        />
      </Head>

      <Envelope>
        <Link href="/rsvp">
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          >
            RSVP ❤️
          </Button>
        </Link>
      </Envelope>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { Center } from "@mantine/core";
import RsvpForm from "../components/Rsvp";

const Rsvp: NextPage = () => {
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
      <Center mt={150}>
        <RsvpForm />
      </Center>
    </>
  );
};

export default Rsvp;

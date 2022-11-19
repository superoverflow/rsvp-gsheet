import type { NextPage } from "next";
import Head from "next/head";
import { Flex } from "@mantine/core";
import RsvpForm from "../components/RsvpForm";

const Rsvp: NextPage = () => {
  return (
    <>
      <Head>
        <title>RSVP</title>
        <meta property="og:title" content="You are invited! 24 Jan 2023" />
        <meta property="og:image" content="og.jpg" />
        <link rel="icon" href="/wedding.png" />
      </Head>
      <Flex
        style={{
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RsvpForm />
      </Flex>
    </>
  );
};

export default Rsvp;

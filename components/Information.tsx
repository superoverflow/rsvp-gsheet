import Link from "next/link";
import { Button, Text, Flex } from "@mantine/core";
import { BrandInstagram, BrandGithub } from "tabler-icons-react";

const Information = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="md"
      style={{ backgroundColor: "rgb(255, 255, 255)", width: "100%" }}
    >
      <Text
        mt="lg"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{ fontFamily: "Greycliff CF, sans-serif" }}
        fz="lg"
        fw={700}
      >
        Tiffany & Cyrus
      </Text>
      <Text style={{ color: "#006994" }}>24 Jan 2023 π εΉ΄εδΈ</Text>
      <Text style={{ color: "#006994" }}>ε±ζε°θιεΊ π¨ εθ§ι¨ι1θ</Text>
      <Text style={{ color: "#006994" }}>11:30 ζ­ε π</Text>
      <Text style={{ color: "#006994" }}>12:30 ιζ π₯</Text>

      <Link style={{ flexGrow: 1 }} href="/rsvp">
        <Button
          mt="lg"
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        >
          ζζ­€εθ¦ β€οΈ
        </Button>
      </Link>

      <Flex m="sm">
        <Link href="https://www.instagram.com/tiffany_and_cyrus/">
          <BrandInstagram color="#ed6ea0" />
        </Link>
        <Link href="https://github.com/superoverflow/rsvp-gsheet">
          <BrandGithub color="#ec8c69" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Information;

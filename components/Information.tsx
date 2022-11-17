import Link from "next/link";
import { Button, Text, Flex } from "@mantine/core";

const Information = () => {
  return (
    <Flex
      direction='column'
      align='center'
      gap='md'
      style={{ backgroundColor: "rgb(255, 255, 255, 0.85)", width: "100%" }}
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
      <Text>🗓 24 Jan 2023 🗓</Text>
      <Text>凱悅尚萃酒店 🏨 北角邨里1號</Text>
      <Text>11:30 恭候 🕚</Text>
      <Text>12:30 酒會 🥂</Text>


      <Link href="/rsvp">
        <Button mt="lg"
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        >
          敬請回覆 ❤️
        </Button>
      </Link>
    </Flex>
  );
};

export default Information;

import type { NextPage } from "next";
import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  NumberInput,
  Group,
  Center,
  LoadingOverlay,
  Space
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "react-query";

export type SheetForm = {
  name: string;
  attend: boolean;
  guests: number;
  message: string;
};

const handleSubmit = async (values: SheetForm) => {
  const rawResponse = await fetch("/api/submit", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const content = await rawResponse.json();
  console.log({ content });
};

const Rsvp: NextPage = () => {
  const form = useForm({
    initialValues: {
      name: "",
      attend: true,
      guests: 1,
      message: "",
    },

    validate: {
      name: (value) => (value ? null : "點稱呼？"),
    },
  });

  const submitForm = useMutation({
    mutationFn: (values: SheetForm) => handleSubmit(values),
  });

  return (
    <Center
      sx={{
        height: 800,
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("background.jpg")`,
        backgroundSize: "cover",
      }}
      mx="auto"
    >
      <LoadingOverlay visible={submitForm.isLoading} overlayBlur={2} />
      <Space h={600} />
      <form onSubmit={form.onSubmit((values) => submitForm.mutate(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="高姓大名"
          {...form.getInputProps("name")}
        />

        <Checkbox
          mt="md"
          label="我會出席！"
          {...form.getInputProps("attend", { type: "checkbox" })}
        />

        <NumberInput
          label="No. of guests"
          placeholder="幾位？"
          {...form.getInputProps("guests")}
        />

        <Textarea
          label="Message"
          placeholder="仲有乜想講？"
          minRows={4}
          {...form.getInputProps("message")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Thank you!</Button>
        </Group>
        {submitForm.isSuccess ? <div>Got it!</div> : null}
      </form>
    </Center>
  );
};

export default Rsvp;

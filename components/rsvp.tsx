import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  NumberInput,
  Group,
  Center,
  LoadingOverlay,
  Space,
  Notification,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconX } from "@tabler/icons";
import { useMutation } from "react-query";

export type SheetForm = {
  name: string;
  attend: boolean;
  guests: number;
  message: string;
};

const SubmitSuccessAlert = () => {
  return (
    <Notification disallowClose icon={<IconCheck size={18} />} color="teal">
      Thanks! I will get back to you soon 😘
    </Notification>
  );
};
const SubmitErrorAlert = () => {
  return (
    <Notification
      disallowClose
      icon={<IconX size={18} />}
      color="red"
      title="Aw, snap!"
    >
      Tell me that it didn&apos;t work
    </Notification>
  );
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

const Rsvp = () => {
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
    <Center>
      <LoadingOverlay visible={submitForm.isLoading} overlayBlur={2} />
      <Stack>
        <Text m="lg" tt="uppercase" fw={700} align="center">
          24 Jan 23 ❤️ Save the date
        </Text>
        <Space h={135} />
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
            <Button variant="light" type="submit">
              Thank you!
            </Button>
          </Group>
          <Space />
        </form>
        {submitForm.isSuccess ? (
          <SubmitSuccessAlert />
        ) : submitForm.isError ? (
          <SubmitErrorAlert />
        ) : (
          <Space h={60} />
        )}
        <Space h={60} />
      </Stack>
    </Center>
  );
};

export default Rsvp;

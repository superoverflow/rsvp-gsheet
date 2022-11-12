import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Box,
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
      Thanks! Will get back to you 😘
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
        <Box mt="sm">
          <Text tt="uppercase" fw={500} align="center" color="navy">
            24 Jan 2023 ❤️ Save the date
          </Text>
          <Text fw={500} align="center" color="navy">
            Hyatt Centric 🏨 1 North Point Estate Ln
          </Text>
          <Text fw={500} align="center" color="navy">
            11:30 Welcome 💁🏻‍♂️ 12:30 Cocktail 🥂
          </Text>
        </Box>
        <Box mt="lg" mb="sm">
          <Space h={75} />
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
          </form>
        </Box>
        {submitForm.isSuccess ? (
          <SubmitSuccessAlert />
        ) : submitForm.isError ? (
          <SubmitErrorAlert />
        ) : (
          <Space h={50} />
        )}
      </Stack>
    </Center>
  );
};

export default Rsvp;

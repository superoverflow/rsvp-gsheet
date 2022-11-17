import {
  TextInput,
  Textarea,
  Checkbox,
  Button,
  NumberInput,
  Group,
  Stack,
  LoadingOverlay,
  Notification,
  Space,
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
      多謝! 我好快會覆返你 😘
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
      技術問題 😅 請與我聯絡
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
    <Stack
      style={{
        padding: "10px",
        width: "320px",
        height: "490px",
        backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0.80)), url('/background.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LoadingOverlay visible={submitForm.isLoading} overlayBlur={2} />
      <Text fw={600} mt="sm" align="center">
        24 Jan 2023 💍 Save the date
      </Text>
      <form onSubmit={form.onSubmit((values) => submitForm.mutate(values))}>
        <TextInput
          withAsterisk
          label="姓名"
          placeholder="高姓大名"
          {...form.getInputProps("name")}
        />

        <Checkbox
          mt="sm"
          label="我會出席！"
          {...form.getInputProps("attend", { type: "checkbox" })}
        />

        <NumberInput mt="sm" label="幾位？" {...form.getInputProps("guests")} />

        <Textarea
          mt="sm"
          label="留言"
          placeholder="仲有乜想講？"
          minRows={4}
          {...form.getInputProps("message")}
        />

        <Group position="right" mt="sm" >
          <Button variant="light" type="submit">
            Thank you!
          </Button>
        </Group>
      </form>

      {submitForm.isSuccess ? (
        <SubmitSuccessAlert />
      ) : submitForm.isError ? (
        <SubmitErrorAlert />
      ) : (
        <Space h={60} />
      )}

    </Stack>
  );
};

export default Rsvp;

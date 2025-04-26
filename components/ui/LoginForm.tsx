import React from "react";
import type { SizeTokens } from "tamagui";
import { Button, Form, H4, Input, Spinner } from "tamagui";

export function LoginForm(props: { size: SizeTokens }) {
  const [status, setStatus] = React.useState<
    "off" | "submitting" | "submitted"
  >("off");

  React.useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form
      gap="$2"
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      borderColor="$borderColor"
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottomLeftRadius={8}
      borderBottomRightRadius={8}
    >
      <H4>{status[0].toUpperCase() + status.slice(1)}</H4>
      <Input size="$4" borderWidth={2} placeholder="Enter email" />
      <Input
        size="$4"
        borderWidth={2}
        placeholder="Enter password"
        secureTextEntry
      />

      <Form.Trigger asChild disabled={status !== "off"}>
        <Button icon={status === "submitting" ? () => <Spinner /> : undefined}>
          Submit
        </Button>
      </Form.Trigger>
    </Form>
  );
}

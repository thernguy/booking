import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Form, Group, H4, Input, Spinner } from "tamagui";

export default function Register() {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigation = useRouter();
  const gotoLogin = () => {
    navigation.replace("/");
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    
  };

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form
      gap="$4"
      onSubmit={() => setStatus("submitting")}
      borderWidth={1}
      flex={1}
      style={{ padding: 16 }}
    >
      <H4>Register</H4>
      <Input placeholder="Full Name" width="100%" />
      <Input placeholder="Email" width="100%" />
      <Input placeholder="Password" width="100%" secureTextEntry />
      <Input placeholder="Confirm Password" width="100%" secureTextEntry />
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button
          icon={status === "submitting" ? () => <Spinner /> : undefined}
          theme={"accent"}
        >
          Submit
        </Button>
      </Form.Trigger>
      <Button onPress={gotoLogin} size="$3" marginLeft={"auto"}>
        Already have an account? Login
      </Button>
    </Form>
  );
}

import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Form, Group, H4, Input, Spinner } from "tamagui";

export default function Login() {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigation = useRouter();

  const gotoRegister = () => {
    navigation.replace("/register");
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {}


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
      onSubmit={handleSubmit}
      borderWidth={1}
      flex={1}
      style={{ padding: 16 }}
    >
      <H4>Login</H4>
      <Input placeholder="Email" width="100%" 
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
       />
      <Input placeholder="Password" width="100%" secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
       />
      <Form.Trigger asChild disabled={status !== "off"}>
        <Button
          icon={status === "submitting" ? () => <Spinner /> : undefined}
          theme={"accent"}
        >
          Submit
        </Button>
      </Form.Trigger>
      <Button onPress={gotoRegister} size="$3" marginLeft={"auto"}>
        Don't have an account? Register
      </Button>
    </Form>
  );
}

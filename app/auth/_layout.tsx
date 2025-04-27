import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Doc Time",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack>
  );
}

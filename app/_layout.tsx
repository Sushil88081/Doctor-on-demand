import { Stack } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/signup" options={{ title: "Signup" }} />
      <Stack.Screen name="home" options={{ title: "Signup" }} />
      <Stack.Screen name="doctor" options={{ title: "Signup" }} /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

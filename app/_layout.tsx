import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="signup" options={{ headerShown: true }} />
        <Stack.Screen name="login" options={{ headerShown: true }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}

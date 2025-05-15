import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function AppLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false}}>
        {/* <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/signup" options={{ title: "Signup" }} />
      <Stack.Screen name="home" options={{ title: "Signup" }} />
      <Stack.Screen name="doctor" options={{ title: "Signup" }} /> */}
        {/* <Stack.Screen 
  name="doctor" 
  options={{ 
    headerShown:false, // Alternative method
  }} 
/> */}

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}

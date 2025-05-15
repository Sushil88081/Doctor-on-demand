import { View, Text, StyleSheet } from "react-native";
import Notification from "../notifications";

export default function Tab() {
  return (

      <Notification />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

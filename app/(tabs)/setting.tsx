import { View, Text, StyleSheet } from "react-native";

import Setting from "../setting";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Setting />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

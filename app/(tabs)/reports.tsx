import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../home";

export default function Tab() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <Text>Tab 1</Text>
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

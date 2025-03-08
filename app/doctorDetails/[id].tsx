import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import TopCard from "./components/topCard";

function DoctorDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details of user {id} </Text>
      <TopCard />
    </View>
  );
}
export default DoctorDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import DoctorCard from "./components/doctorListCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const DoctorPage = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <ScrollView style={styles.scrollView}>
            <DoctorCard />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

export default DoctorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    width: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

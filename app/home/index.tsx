import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import BookConsultationCard from "./components/Card";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Background } from "./components/background";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <ScrollView style={styles.scrollView}>
            {/* Background Image and content */}
            <Background />

            {/* Consultation Card */}
            <BookConsultationCard />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

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

export default HomeScreen;

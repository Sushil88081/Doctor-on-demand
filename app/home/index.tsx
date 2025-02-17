import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BookConsultationCard from "./components/Card";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BookConsultationCard />
      <br />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;

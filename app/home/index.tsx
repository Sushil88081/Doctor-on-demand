import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BookConsultationCard from "./components/Card";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BookConsultationCard />
      <br />
      {/* <DoctorListCard /> */}
      {/* <Collapsible title="sushil" /> */}
      {/* <ExternalLink href="./index.tsx" /> */}
      {/* <HapticTab children /> */}
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

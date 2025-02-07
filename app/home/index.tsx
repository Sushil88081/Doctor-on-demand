import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CarouselComponent from "../../components/home/Card";
import BookConsultationCard from "../../components/home/Card";
import DoctorListCard from "../../components/home/doctorListCard";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BookConsultationCard />
      <br />
      <DoctorListCard />
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

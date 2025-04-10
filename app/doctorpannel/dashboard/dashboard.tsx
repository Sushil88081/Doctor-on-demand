// app/dashboard/DoctorDashboardScreen.tsx
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";

const DoctorDashboardScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Doctor Dashboard</Text>
      <TouchableHighlight
        underlayColor={"white"}
        style={{
          width: "100%",
        }}
        onPress={() => {
          router.navigate("/doctorpannel/appointment");
        }}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Appointments</Text>
          <Text style={styles.cardValue}>42</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today’s Appointments</Text>
        <Text style={styles.cardValue}>5</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pending Approvals</Text>
        <Text style={styles.cardValue}>2</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Patients Consulted</Text>
        <Text style={styles.cardValue}>18</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28a745",
  },
});

export default DoctorDashboardScreen;

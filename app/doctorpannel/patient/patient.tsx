// app/patients/PatientDetailsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const patients = [
  {
    id: "1",
    name: "Aryan Sharma",
    age: 28,
    gender: "Male",
    lastVisit: "2025-04-10",
    diagnosis: "Fever & Cough",
  },
  {
    id: "2",
    name: "Neha Verma",
    age: 35,
    gender: "Female",
    lastVisit: "2025-04-09",
    diagnosis: "Allergy",
  },
  {
    id: "3",
    name: "Ravi Kumar",
    age: 40,
    gender: "Male",
    lastVisit: "2025-04-08",
    diagnosis: "Headache",
  },
];

const PatientDetailsScreen = () => {
  const renderPatient = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>
        Age: {item.age} | Gender: {item.gender}
      </Text>
      <Text style={styles.info}>Last Visit: {item.lastVisit}</Text>
      <Text style={styles.diagnosis}>Diagnosis: {item.diagnosis}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Full History</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patient History</Text>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={renderPatient}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold" },
  info: { fontSize: 14, color: "#555", marginTop: 4 },
  diagnosis: { fontSize: 14, marginTop: 8, fontStyle: "italic" },
  button: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default PatientDetailsScreen;

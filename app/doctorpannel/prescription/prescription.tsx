// app/prescription/PrescriptionFormScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const PrescriptionFormScreen = () => {
  const [patientName, setPatientName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medicine, setMedicine] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!patientName || !symptoms || !diagnosis || !medicine) {
      Alert.alert("Missing Fields", "Please fill all required fields.");
      return;
    }

    // Send to backend here...

    Alert.alert("Success", "Prescription submitted!");
    setPatientName("");
    setSymptoms("");
    setDiagnosis("");
    setMedicine("");
    setNotes("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Prescription Form</Text>

      <Text style={styles.label}>Patient Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Ravi Kumar"
        value={patientName}
        onChangeText={setPatientName}
      />

      <Text style={styles.label}>Symptoms</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. fever, cough"
        value={symptoms}
        onChangeText={setSymptoms}
      />

      <Text style={styles.label}>Diagnosis</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Viral Infection"
        value={diagnosis}
        onChangeText={setDiagnosis}
      />

      <Text style={styles.label}>Medicines</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Paracetamol 500mg - 1 tab thrice daily"
        value={medicine}
        onChangeText={setMedicine}
      />

      <Text style={styles.label}>Additional Notes</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Any advice or precautions"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Prescription</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 4,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default PrescriptionFormScreen;

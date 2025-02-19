import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Define types for doctor data
type Doctor = {
  id: number;
  name: string;
  designation: string;
  availability: "Online" | "Offline";
  fees: string;
  timeSchedule: string;
  imageUrl: string;
};

// Data for doctors
const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    designation: "Cardiologist",
    availability: "Online",
    fees: "₹500",
    timeSchedule: "10:00 AM - 6:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    designation: "Dermatologist",
    availability: "Offline",
    fees: "₹700",
    timeSchedule: "9:00 AM - 5:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
  {
    id: 3,
    name: "Dr. Alice Johnson",
    designation: "Pediatrician",
    availability: "Online",
    fees: "₹600",
    timeSchedule: "11:00 AM - 7:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
  {
    id: 4,
    name: "Dr. Alice Johnson",
    designation: "Pediatrician",
    availability: "Online",
    fees: "₹600",
    timeSchedule: "11:00 AM - 7:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
  {
    id: 5,
    name: "Dr. Alice Johnson",
    designation: "Pediatrician",
    availability: "Online",
    fees: "₹600",
    timeSchedule: "11:00 AM - 7:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
  {
    id: 6,
    name: "Dr. Alice Johnson",
    designation: "Pediatrician",
    availability: "Online",
    fees: "₹600",
    timeSchedule: "11:00 AM - 7:00 PM",
    imageUrl: "https://via.placeholder.com/150", // Replace with doctor image URL
  },
];

// Doctor Card Component
const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const handleBookNow = () => {
    console.log(`Booking appointment with ${doctor.name}`);
    // Add navigation or booking logic here
  };

  return (
    <>
      <View style={styles.card}>
        <Image source={{ uri: doctor.imageUrl }} style={styles.doctorImage} />
        <View style={styles.details}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.designation}>{doctor.designation}</Text>
          <Text
            style={[
              styles.availability,
              doctor.availability === "Online" ? styles.online : styles.offline,
            ]}
          >
            {doctor.availability}
          </Text>
          <Text style={styles.fees}>Fees: {doctor.fees}</Text>
          <Text style={styles.timeSchedule}>
            Timings: {doctor.timeSchedule}
          </Text>
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={handleBookNow}
          >
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

// Main Component
const App: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Top Doctors
      </Text>
      {doctorsData.map((doctor) => (
        <>
          <DoctorCard key={doctor.id} doctor={doctor} />
        </>
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  designation: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  availability: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  online: {
    color: "green",
  },
  offline: {
    color: "red",
  },
  fees: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  timeSchedule: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  bookNowButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  bookNowText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default App;

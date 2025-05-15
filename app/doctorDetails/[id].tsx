import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ActivityIndicator, 
  SafeAreaView,
  Platform,
  ScrollView
} from "react-native";
import axios from "axios";
import TopCard from "./components/topCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const DoctorDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const URI = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    if (id) {
      axios
        .get(`${URI}/doctor/${id}`)
        .then((response) => {
          setDoctor(response.data);
          setError(null);
        })
        .catch((error) => {
          console.error("Error fetching doctor details", error);
          setError("Failed to load doctor details");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4b6cb7" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!doctor) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Doctor not found</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileSection}>
            <Image 
              source={{ uri: doctor.image }} 
              style={styles.image} 
              defaultSource={require('../../assets/images/bookmedicine.jpg')}
            />
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialization}</Text>
          </View>

          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={20} color="#4b6cb7" />
              <Text style={styles.label}>Availability: {doctor.availability}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Ionicons name="wallet-outline" size={20} color="#4b6cb7" />
              <Text style={styles.label}>Fee: ₹{doctor.fee}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Ionicons name="mail-outline" size={20} color="#4b6cb7" />
              <Text style={styles.label}>Email: {doctor.email}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Ionicons name="call-outline" size={20} color="#4b6cb7" />
              <Text style={styles.label}>Phone: {doctor.phone}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={20} color="#4b6cb7" />
              <Text style={styles.label}>
                Schedule: {new Date(doctor.schedule).toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Book Appointment Card */}
          <TopCard />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'android' ? 30 : 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#f44336',
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 10 : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  specialization: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  detailsSection: {
    padding: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    color: '#444',
    flex: 1,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default DoctorDetailsScreen;
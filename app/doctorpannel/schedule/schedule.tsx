import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Checkbox } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const daysOfWeek = [
  { day: "Monday", short: "MON" },
  { day: "Tuesday", short: "TUE" },
  { day: "Wednesday", short: "WED" },
  { day: "Thursday", short: "THU" },
  { day: "Friday", short: "FRI" },
  { day: "Saturday", short: "SAT" },
  { day: "Sunday", short: "SUN" },
];

const DoctorScheduleScreen = () => {
  const [availability, setAvailability] = useState<{ [day: string]: boolean }>(
    {}
  );
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const toggleDay = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSave = () => {
    // Here you would send the availability + timeSlot to backend
    const scheduleData = {
      doctor_id: 1, // Replace with actual doctor ID
      days: Object.entries(availability)
        .filter(([_, isAvailable]) => isAvailable)
        .map(([day]) => day),
      date: date.toISOString().split("T")[0],
      start_time: startTime.toTimeString().split(" ")[0],
      end_time: endTime.toTimeString().split(" ")[0],
    };
    
    console.log("Saving schedule:", scheduleData);
    Alert.alert("Saved", "Availability schedule saved!");
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.heading}>Set Your Availability</Text>
        
        {/* Date Selection */}
        <Text style={styles.sectionTitle}>Select Date</Text>
        <TouchableOpacity 
          style={styles.dateTimeBox}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateTimeText}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}

        {/* Days Selection */}
        <Text style={styles.sectionTitle}>Available Days</Text>
        <View style={styles.daysContainer}>
          {daysOfWeek.map(({ day, short }) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                availability[day] && styles.dayButtonSelected,
              ]}
              onPress={() => toggleDay(day)}
            >
              <Text style={[
                styles.dayText,
                availability[day] && styles.dayTextSelected
              ]}>
                {short}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Time Selection */}
        <Text style={styles.sectionTitle}>Working Hours</Text>
        
        <View style={styles.timeRow}>
          <View style={styles.timeInputContainer}>
            <Text style={styles.timeLabel}>From</Text>
            <TouchableOpacity 
              style={styles.timeBox}
              onPress={() => setShowStartTimePicker(true)}
            >
              <Text style={styles.timeText}>{formatTime(startTime)}</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.timeInputContainer}>
            <Text style={styles.timeLabel}>To</Text>
            <TouchableOpacity 
              style={styles.timeBox}
              onPress={() => setShowEndTimePicker(true)}
            >
              <Text style={styles.timeText}>{formatTime(endTime)}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {showStartTimePicker && (
          <DateTimePicker
            value={startTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(event, selectedTime) => {
              setShowStartTimePicker(false);
              if (selectedTime) {
                setStartTime(selectedTime);
              }
            }}
          />
        )}

        {showEndTimePicker && (
          <DateTimePicker
            value={endTime}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(event, selectedTime) => {
              setShowEndTimePicker(false);
              if (selectedTime) {
                setEndTime(selectedTime);
              }
            }}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Schedule</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#2c3e50",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 12,
    marginTop: 16,
  },
  dateTimeBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dfe6e9",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  dateTimeText: {
    fontSize: 16,
    color: "#2d3436",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dayButton: {
    width: "14%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    elevation: 1,
  },
  dayButtonSelected: {
    backgroundColor: "#3498db",
    borderColor: "#3498db",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7f8c8d",
  },
  dayTextSelected: {
    color: "#fff",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  timeInputContainer: {
    width: "48%",
  },
  timeLabel: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 6,
  },
  timeBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dfe6e9",
    borderRadius: 10,
    padding: 16,
    elevation: 2,
  },
  timeText: {
    fontSize: 16,
    color: "#2d3436",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 16,
    borderRadius: 10,
    marginTop: 24,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DoctorScheduleScreen;
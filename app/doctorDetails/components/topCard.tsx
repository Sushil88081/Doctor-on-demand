import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

// Define types for the data
interface Day {
  day: string;
  date: string;
}

interface TimeSlot {
  time: string;
}

export default function TopCard() {
  // Define state types
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Days and Time Slots
  const days: Day[] = [
    { day: "Sunday", date: "10 Mar" },
    { day: "Monday", date: "11 Mar" },
    { day: "Tuesday", date: "12 Mar" },
    { day: "Wednesday", date: "13 Mar" },
    { day: "Thursday", date: "14 Mar" },
    { day: "Friday", date: "15 Mar" },
    { day: "Saturday", date: "16 Mar" },
  ];

  const timeSlots: string[] = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "FFFFFF",
          borderRadius: 20,
          padding: 20,
          // shadowColor: "#000",
          // shadowOffset: { width: 0, height: 2 },
          // shadowOpacity: 0.1,
          // shadowRadius: 4,
          // elevation: 3, // Android shadow
        }}
      >
        {/* Doctor Details */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            source={require("../../../assets/images/home.png")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Cardiologist
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>Specialization</Text>
            <Text style={{ fontSize: 16, color: "green", fontWeight: "bold" }}>
              ₹500
            </Text>
          </View>
        </View>

        {/* About Us */}
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20 }}>
          About Us
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod
          tempor incididunt ut laore et dolore magna aliqua. Ut enim ad minim
          veniam...
          <Text style={{ color: "blue" }}> Read more</Text>
        </Text>

        {/* Select Day */}
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20 }}>
          Select Appointment Day
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
          }}
        >
          {days.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedDay(item.day);
                setSelectedTime(null); // Reset time if a new day is selected
              }}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: selectedDay === item.day ? "#007BFF" : "#ddd",
                backgroundColor: selectedDay === item.day ? "#007BFF" : "white",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: selectedDay === item.day ? "white" : "black",
                }}
              >
                {item.day} ({item.date})
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Select Time Slot */}
        <View
          style={{ height: 1, backgroundColor: "#ddd", marginVertical: 15 }}
        />
        {selectedDay && (
          <>
            <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 20 }}>
              Select Time Slot
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 10,
              }}
            >
              {timeSlots.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedTime(time)}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: selectedTime === time ? "#007BFF" : "#ddd",
                    backgroundColor:
                      selectedTime === time ? "#007BFF" : "white",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: selectedTime === time ? "white" : "black",
                    }}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {/* Book Appointment Button */}
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: selectedDay && selectedTime ? "#007BFF" : "#ddd",
            padding: 15,
            borderRadius: 50,
            alignItems: "center",
          }}
          disabled={!selectedDay || !selectedTime} // Disable if day or time is not selected
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            {selectedDay && selectedTime
              ? `Book for ${selectedDay} at ${selectedTime}`
              : "Select a Day & Time"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

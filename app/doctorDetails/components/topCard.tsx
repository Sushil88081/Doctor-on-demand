import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

// Define types for the data
interface Day {
  day: string;
  date: string;
}

export default function TopCard() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Function to generate the next 7 days dynamically
  const generateNext7Days = (): Day[] => {
    const today = new Date();
    const daysArr: Day[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const day = date.toLocaleDateString("en-US", { weekday: "short" }); // Sun, Mon, etc.
      const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short", // May, Jun, etc.
      });

      daysArr.push({ day, date: formattedDate });
    }

    return daysArr;
  };

  const days: Day[] = generateNext7Days();

  const timeSlots: string[] = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          margin: 16,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>
          Select Appointment Day
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {days.map((item, index) => {
              const selected = selectedDay === item.day;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedDay(item.day);
                    setSelectedTime(null);
                  }}
                  activeOpacity={0.7}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 14,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: selected ? "#007BFF" : "#ccc",
                    backgroundColor: selected ? "#007BFF" : "#f8f8f8",
                  }}
                >
                  <Text
                    style={{
                      color: selected ? "white" : "#333",
                      fontWeight: "600",
                      fontSize: 15,
                    }}
                  >
                    {item.day} • {item.date}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {selectedDay && (
          <>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                marginTop: 24,
                marginBottom: 12,
              }}
            >
              Select Time Slot
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                {timeSlots.map((time, index) => {
                  const selected = selectedTime === time;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedTime(time)}
                      activeOpacity={0.7}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: selected ? "#28a745" : "#ccc",
                        backgroundColor: selected ? "#28a745" : "#f8f8f8",
                      }}
                    >
                      <Text
                        style={{
                          color: selected ? "white" : "#333",
                          fontWeight: "600",
                          fontSize: 15,
                        }}
                      >
                        {time}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </>
        )}

        <TouchableOpacity
          disabled={!selectedDay || !selectedTime}
          activeOpacity={0.8}
          onPress={()=>{
            router.push("/doctor/components/appointmentBook")
          }}
          style={{
            marginTop: 30,
            backgroundColor: selectedDay && selectedTime ? "#007BFF" : "#ccc",
            paddingVertical: 14,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            {selectedDay && selectedTime
              ? `Book for ${selectedDay} at ${selectedTime}`
              : "Select Day & Time"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

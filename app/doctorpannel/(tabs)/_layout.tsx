import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="apps-outline" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="patient"
        options={{
          title: "Patients",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="prescription"
        options={{
          title: "Prescriptions",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedules",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar-clear-outline" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color="black" />  
          ),
        }}
      />
    </Tabs>
  );
}

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

type MenuItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const ProfilePage = () => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "1",
      title: "My Saved",
      icon: <MaterialIcons name="bookmark-border" size={24} color="#333" />,
      onPress: () => router.push("/saved"),
    },
    {
      id: "2",
      title: "Appointments",
      icon: <FontAwesome name="calendar" size={24} color="#333" />,
      onPress: () => router.push("/appointments"),
    },
    {
      id: "3",
      title: "Payment Method",
      icon: <MaterialIcons name="payment" size={24} color="#333" />,
      onPress: () => router.push("/payment"),
    },
    {
      id: "4",
      title: "FAQs",
      icon: <MaterialIcons name="help-outline" size={24} color="#333" />,
      onPress: () => router.push("/faqs"),
    },
    {
      id: "5",
      title: "Logout",
      icon: <AntDesign name="logout" size={24} color="#ff4444" />,
      onPress: () => {
        // Handle logout logic here
        console.log("User logged out");
        router.replace("/login");
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Feather name="user" size={60} color="#fff" />
        </View>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text
              style={[
                styles.menuText,
                item.title === "Logout" && styles.logoutText,
              ]}
            >
              {item.title}
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#777",
  },
  menuContainer: {
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
    color: "blue",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  logoutText: {
    color: "#ff4444",
  },
});

export default ProfilePage;

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store";

const { width, height } = Dimensions.get('window');

type MenuItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const ProfilePage = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "2",
      title: "Book Consultation",
      icon: <FontAwesome name="calendar" size={24} color="#333" />,
      onPress: () => router.push("/doctor"),
    },
    {
      id: "3",
      title: "Order Medicine",
      icon: <MaterialIcons name="payment" size={24} color="#333" />,
      onPress: () => router.push("/ordermedicine"),
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
        console.log("User logged out");
        router.replace("/login");
      },
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
          backgroundColor="#4a90e2"
        />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Feather name="user" size={60} color="#fff" />
            </View>
            <Text style={styles.userName}>{user?.name || 'Guest User'}</Text>
            <Text style={styles.userEmail}>{user?.email || 'guest@example.com'}</Text>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={item.onPress}
                activeOpacity={0.6}
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
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#ccc"
                />
              </TouchableOpacity>
            ))}
          </View>
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
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: Platform.OS === 'android' ? 30 : 20,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#4a90e2",
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#3a7bc8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    fontFamily: Platform.OS === 'android' ? 'Roboto-Medium' : undefined,
  },
  userEmail: {
    fontSize: 16,
    color: "#e0e0e0",
    marginTop: 5,
    textAlign: "center",
    fontFamily: Platform.OS === 'android' ? 'Roboto-Regular' : undefined,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
    elevation: 3,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: Platform.OS === 'android' ? 0.5 : 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    width: 40,
    alignItems: "center",
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
    fontFamily: Platform.OS === 'android' ? 'Roboto-Medium' : undefined,
  },
  logoutText: {
    color: "#ff4444",
    fontFamily: Platform.OS === 'android' ? 'Roboto-Medium' : undefined,
  },
});

export default ProfilePage;
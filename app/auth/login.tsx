import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";

// Mock function to simulate API login
const mockLoginApi = async (email: string, password: string) => {
  // Example user roles based on email (replace this with real API call)
  const users = {
    "patient@example.com": "patient",
    "doctor@example.com": "doctor",
    "admin@example.com": "admin",
  };

  return new Promise<{ role: string }>((resolve, reject) => {
    setTimeout(() => {
      if (users[email]) {
        resolve({ role: users[email] });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const router = useRouter();

  // Handle input changes
  const handleInputChange = (field: string, text: string) => {
    setValue((prev) => ({ ...prev, [field]: text }));
  };

  // Handle Login Button
  const handleLogin = async () => {
    const { email, password } = value;

    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      const response = await mockLoginApi(email, password);

      // Redirect based on user role
      if (response.role === "patient") {
        router.navigate("/(tabs)");
      } else if (response.role === "doctor") {
        router.push("/doctorpannel");
      } else if (response.role === "admin") {
        router.push("/admin");
      }
    } catch (error) {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={styles.image}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="Enter Your Email"
          style={styles.textInput}
          value={value.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <TextInput
          placeholder="Enter Your Password"
          style={styles.textInput}
          value={value.password}
          secureTextEntry
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <Mybutton title={"Login"} onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Login;

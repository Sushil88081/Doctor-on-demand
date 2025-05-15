import { View, Text, Image, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { signupUser } from "./authSlice";
import { Picker } from "@react-native-picker/picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    role: "",
  });

  const handleChange = (key: string, val: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const handleClick = () => {
    if (!value.name || !value.email || !value.password || !value.mobile || !value.address || !value.role) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }

    dispatch(signupUser(value))
      .unwrap()
      .then(() => {
        Alert.alert("Success", "User registered successfully!");
        router.push("/auth/login");
      })
      .catch((err) => {
        Alert.alert("Error", err);
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/login.jpg")}
          style={styles.image}
        />
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Enter Your Name"
            value={value.name}
            onChangeText={(text) => handleChange("name", text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Your Email"
            value={value.email}
            onChangeText={(text) => handleChange("email", text)}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Enter Your Password"
            value={value.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Your Mobile Number"
            value={value.mobile}
            onChangeText={(text) => handleChange("mobile", text)}
            keyboardType="phone-pad"
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Your Address"
            value={value.address}
            onChangeText={(text) => handleChange("address", text)}
            style={styles.input}
          />

          <Picker
            selectedValue={value.role}
            onValueChange={(itemValue) => handleChange("role", itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Doctor" value="doctor" />
            <Picker.Item label="Patient" value="patient" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>

          <Mybutton 
            title={loading ? "Signing Up..." : "Signup"} 
            onPress={handleClick} 
            disabled={loading} 
          />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 16,
  },
  picker: {
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
});
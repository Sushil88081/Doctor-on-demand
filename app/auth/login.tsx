import { View, Text, Image, TextInput, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  // Handle input changes
  const handleInputChange = (field: any, value: any) => {
    setValue((prev) => ({
      ...prev,
      [field]: value, // Dynamically set the field (email or password)
    }));
  };

  // Handle the login button click
  const handleLogin = () => {
    const { email, password } = value;

    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    console.log("Login Data:", value);

    router.push("/home");
  };

  return (
    <View>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",

          resizeMode: "cover",
        }}
      />
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Login
        </Text>
        <TextInput
          placeholder="Enter Your Email"
          style={styles.textInput}
          value={value.email}
          onChangeText={(value) => handleInputChange("email", value)}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={styles.textInput}
          value={value.password}
          secureTextEntry
          onChangeText={(value) => handleInputChange("password", value)}
        />
        <Mybutton title={"Login"} onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    outlineColor: "blue",
  },
});
export default Login;

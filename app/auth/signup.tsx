import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const Signup = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleClick = () => {
    console.log("click ");
    // router.navigate("/login");
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
      <View style={{ paddingHorizontal: 5 }}>
        <TextInput
          placeholder="Enter Your Name"
          style={{
            padding: 10,
            marginVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            padding: 10,
            marginVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="Enter Your Mobile Number"
          style={{
            padding: 10,
            marginVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="Enter Your Address"
          style={{
            padding: 10,
            marginVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <Mybutton title={"Signup"} onPress={handleClick} />
      </View>
    </View>
  );
};

export default Signup;

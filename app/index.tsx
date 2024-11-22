import Mybutton from "@/components/mybutton";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("click ");
    router.navigate("/login");
  };
  return (
    <View>
      <Mybutton title={"continue"} onPress={handleClick} />
    </View>
  );
};

export default HomePage;

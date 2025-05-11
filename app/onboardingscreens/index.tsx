import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const OnBoardingsScreen1 = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
       
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1661341423936-40b48564a5bf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFkeSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"  
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Find a lot of specialist doctors in one place
        </Text>
        <AntDesign
          name="rightcircle"
          size={40}
          color="blue"
          onPress={() => {
            router.push("/onboardingscreens/onboarding2");
          }}
        />
      </View>
    </View>
  );
};

export default OnBoardingsScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    paddingTop: 0,
    margin: 0,
  },
  textContainer: {
    flexDirection: "row", // Align text and icon horizontally
    justifyContent: "space-between", // Space between the text and icon
    alignItems: "center", // Align vertically
    paddingHorizontal: 20, // Optional for padding around the container
    marginTop: 20, // Optional to add space from the image
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    padding: 5,
  },
});

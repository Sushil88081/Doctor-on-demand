import React from "react";
import { View, Text, StyleSheet, Image, Platform, SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Mybutton from "@/components/mybutton";

const OnBoardingsScreen3 = () => {
  const router = useRouter();
  const handleClick = (title: string) => {
    if (title === "Login") {
      router.navigate("/auth/login");
    } else {
      router.navigate("/auth/signup");
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/welcome.png")}
          style={styles.image}
          resizeMode="contain"
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Let's get started!</Text>
          <Text style={styles.subtitleText}>Login to stay healthy and fit</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Mybutton
            title="Login"
            onPress={() => handleClick("Login")}
          />
          <View style={styles.buttonSpacer} />
          <Mybutton
            title="Signup"
            onPress={() => handleClick("signup")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingsScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: Platform.select({
      ios: 20,
      android: 30,
    }),
  },
  image: {
    width: '100%',
    height: Platform.select({
      ios: '60%',
      android: '50%',
    }),
    marginTop: Platform.select({
      ios: 0,
      android: 20,
    }),
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonSpacer: {
    height: 15,
  },
});
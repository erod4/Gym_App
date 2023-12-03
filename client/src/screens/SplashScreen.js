import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigator.navigate("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const animation = useRef(null);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0096C7",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          ref={animation}
          source={require("../../assets/animation.json")}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

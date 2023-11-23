import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomBackButton = ({ navigation, route, options, back }) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ padding: 0, justifyContent: "center", alignItems: "center" }}
    >
      <FontAwesomeIcon icon={"fa-xmark"} color="black" size={25} />
    </TouchableOpacity>
  );
};

export default CustomBackButton;

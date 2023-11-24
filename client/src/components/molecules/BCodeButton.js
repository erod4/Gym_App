import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const BCodeButton = () => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate("BarcodeScanner");
      }}
      style={{
        paddingRight: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={"fa-barcode"} color="black" size={25} />
    </TouchableOpacity>
  );
};

export default BCodeButton;

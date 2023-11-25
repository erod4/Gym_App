import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { trigger } from "react-native-haptic-feedback";
import { InteractionContext } from "../../store/actions/clientActions/Interaction";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const ExcerSetting = ({ name, icon, onPress }) => {
  const { setActive } = useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    setting: {
      padding: 15,
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderColor: isDarkMode ? "#ddd" : "#555",
    },
    name: {
      flex: 1,
      textAlign: "center",
      fontWeight: "700",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
  });

  return (
    <TouchableOpacity
      style={styles.setting}
      onPress={() => {
        onPress();
        setActive("");
        trigger("notificationSuccess");
      }}
    >
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ExcerSetting;

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SettingsSliderContext } from "../../store/actions/clientActions/SettingsSlider";

const ExcerSetting = ({ name, icon, onPress }) => {
  const { closeSettingsSlider } = useContext(SettingsSliderContext);

  return (
    <TouchableOpacity
      style={styles.setting}
      onPress={() => {
        onPress();
        closeSettingsSlider();
      }}
    >
      <FontAwesomeIcon size={18} icon={icon} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  setting: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
  },
  name: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "500",
  },
});
export default ExcerSetting;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TimerSliderContext } from "../../store/actions/clientActions/TimerSlider";
import { trigger } from "react-native-haptic-feedback";
import { InteractionContext } from "../../store/actions/clientActions/Interaction";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const OptionsButton = ({ id }) => {
  const { setActive } = useContext(InteractionContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const handleOpen = () => {
    trigger("notificationSuccess");
    setActive("OPTIONS", id);
  };

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20, position: "absolute", right: 0 }}
      onPress={handleOpen}
    >
      <FontAwesomeIcon
        color={isDarkMode ? "#ddd" : "#000"}
        icon={"fa-ellipsis-vertical"}
      />
    </TouchableOpacity>
  );
};

export default OptionsButton;

import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

import {
  InteractionContext,
  SettingsSliderContext,
} from "../../store/actions/clientActions/Interaction";

import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TimerContext } from "../../store/actions/clientActions/Timer";
import { SaveContext } from "../../store/actions/clientActions/SaveWorkout";
import { trigger } from "react-native-haptic-feedback";

const OpenTimerButton = () => {
  const { isTimerActive, seconds } = useContext(TimerContext);
  const { stopSaving } = useContext(SaveContext);

  const { setActive, setTimerActive, display } = useContext(InteractionContext);
  const handleOpen = () => {
    trigger("notificationSuccess");
    setActive("");
    setTimerActive("flex");
    stopSaving();
  };
  const timerMins = Math.floor(seconds / 60);
  const timerSecs = seconds % 60;
  const formattedTimerMinutes = String(timerMins).padStart(2, "0");
  const formattedTimerSeconds = String(timerSecs).padStart(2, "0");

  return (
    <TouchableOpacity
      onPress={handleOpen}
      style={{
        backgroundColor: "#ddd",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
      }}
    >
      {isTimerActive ? (
        <Text>
          {formattedTimerMinutes} : {formattedTimerSeconds}
        </Text>
      ) : (
        <FontAwesomeIcon color="#111" icon={"fa-clock"} />
      )}
    </TouchableOpacity>
  );
};

export default OpenTimerButton;

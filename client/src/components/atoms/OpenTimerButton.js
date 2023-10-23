import { View, Text } from "react-native";
import React, { useContext } from "react";
import {
  TimerSliderContext,
  useTimerSliderContext,
} from "../../store/actions/clientActions/TimerSlider";
import { SettingsSliderContext } from "../../store/actions/clientActions/SettingsSlider";
import {
  WeightSliderContext,
  useWeightSliderContext,
} from "../../store/actions/clientActions/WeightSlider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TimerContext } from "../../store/actions/clientActions/Timer";

const OpenTimerButton = () => {
  const { isTimerActive, seconds } = useContext(TimerContext);
  const { openTimerSlider } = useContext(TimerSliderContext);
  const { closeSettingsSlider } = useContext(SettingsSliderContext);
  const { closeWeightSlider } = useContext(WeightSliderContext);
  const handleOpen = () => {
    openTimerSlider();
    closeSettingsSlider();
    closeWeightSlider();
  };
  const timerMins = Math.floor(seconds / 60);
  const timerSecs = seconds % 60;
  const formattedTimerMinutes = String(timerMins).padStart(2, "0");
  const formattedTimerSeconds = String(timerSecs).padStart(2, "0");

  return (
    <TouchableOpacity onPress={handleOpen}>
      {isTimerActive ? (
        <View
          style={{ borderRadius: 10, padding: 5, backgroundColor: "#0077ff" }}
        >
          <Text>
            {formattedTimerMinutes} : {formattedTimerSeconds}
          </Text>
        </View>
      ) : (
        <FontAwesomeIcon color="#0077ff" icon={"fa-clock"} />
      )}
    </TouchableOpacity>
  );
};

export default OpenTimerButton;

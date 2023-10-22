import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTimerSliderContext } from "../../store/actions/clientActions/TimerSlider";
import { useWeightSliderContext } from "../../store/actions/clientActions/WeightSlider";

const OptionsButton = ({ open, id }) => {
  const { closeTimerSlider } = useTimerSliderContext();

  const { closeWeightSlider } = useWeightSliderContext();

  const handleOpen = () => {
    open(id);
    closeTimerSlider();
    closeWeightSlider();
  };

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20, position: "absolute", right: 0 }}
      onPress={handleOpen}
    >
      <FontAwesomeIcon color="#1c1c1c" icon={"fa-ellipsis-vertical"} />
    </TouchableOpacity>
  );
};

export default OptionsButton;

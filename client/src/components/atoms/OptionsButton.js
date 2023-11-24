import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TimerSliderContext } from "../../store/actions/clientActions/TimerSlider";
import { WeightSliderContext } from "../../store/actions/clientActions/WeightSlider";
import { SettingsSliderContext } from "../../store/actions/clientActions/SettingsSlider";

const OptionsButton = ({ id }) => {
  const { handleTimer } = useContext(TimerSliderContext);
  const { openSettingsSlider } = useContext(SettingsSliderContext);
  const { closeWeightSlider } = useContext(WeightSliderContext);

  const handleOpen = () => {
    openSettingsSlider(id);
    handleTimer(false);
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

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const OptionsButton = ({ open, id }) => {
  const handleOpen = () => {
    open(id);
  };
  return (
    <TouchableOpacity onPress={handleOpen}>
      <FontAwesomeIcon color="#1c1c1c" icon={"fa-ellipsis-vertical"} />
    </TouchableOpacity>
  );
};

export default OptionsButton;

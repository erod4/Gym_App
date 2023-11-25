import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { SaveContext } from "../../store/actions/clientActions/SaveWorkout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InteractionContext } from "../../store/actions/clientActions/Interaction";
import { trigger } from "react-native-haptic-feedback";

const ExcerciseHeaderLeft = () => {
  const { startSaving } = useContext(SaveContext);
  const { setActive, setTimerActive } = useContext(InteractionContext);
  const handlePress = () => {
    trigger("notificationSuccess");
    setActive("");
    setTimerActive("none");
    startSaving();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#2dc653",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontWeight: "700", color: "#fff" }}>Finish</Text>
    </TouchableOpacity>
  );
};

export default ExcerciseHeaderLeft;

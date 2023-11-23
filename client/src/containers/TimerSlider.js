import { View, Text, Button } from "react-native";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import {
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";

import StopWatch from "./StopWatch";
import {
  TimerSliderContext,
  useTimerSliderContext,
} from "../store/actions/clientActions/TimerSlider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useSettingsSliderContext } from "../store/actions/clientActions/SettingsSlider";
import BottomSheet from "@gorhom/bottom-sheet";

const TimerSlider = ({ activeId }) => {
  const { isTimerSliderActive, closeTimerSlider } =
    useContext(TimerSliderContext);
  const bottomSheetRef = useRef < BottomSheet > null;

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  return (
    <>
      <TouchableOpacity style={styles.panelHandle} onPress={openBottomSheet}>
        <Text style={styles.text}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.container}>
          {/* Your content for the bottom sheet */}
          <Text>Awesome 🎉</Text>

          {/* Example close button */}
          <TouchableOpacity style={styles.exit} onPress={closeBottomSheet}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};
const styles = StyleSheet.create({
  exit: {
    position: "absolute",
    top: 0,
    right: 0,
  },

  panelHandle: {
    padding: 20,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});
export default TimerSlider;

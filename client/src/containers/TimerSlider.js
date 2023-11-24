import { View, Text, Button } from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  const { isTimerSliderActive, handleTimer } = useContext(TimerSliderContext);
  const bottomSheetRef = useRef(null);
  useEffect(() => {
    if (isTimerSliderActive) {
      openBottomSheet();
    } else {
      closeBottomSheet(); // Optionally close the bottom sheet when isTimerSliderActive becomes false
    }
  }, [isTimerSliderActive]);
  // variables
  const snapPoints = useMemo(() => ["50%"], []);

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
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{ zIndex: 1, backgroundColor: "#fff" }}
        enablePanDownToClose={true}
        onClose={() => {
          handleTimer(false);
        }}
      >
        <View style={styles.container}>
          <StopWatch />
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
  container: { flex: 1, backgroundColor: "#fff", zIndex: 1 },
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

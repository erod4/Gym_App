import { View, Text, Button, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { Animated, StyleSheet } from "react-native";
import { trigger } from "react-native-haptic-feedback";
import ExcerSetting from "../components/atoms/ExcerSetting";
import { EditContext } from "../store/actions/clientActions/EditWorkout";
import { InteractionContext } from "../store/actions/clientActions/Interaction";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const OptionsSlider = ({ activeId }) => {
  const { setActive } = useContext(InteractionContext);
  const { openEdit } = useContext(EditContext);
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      flex: 1,
      position: "relative",
      ...StyleSheet.absoluteFillObject,
      zIndex: 10,
      flexDirection: "column",
    },
    container: {
      backgroundColor: isDarkMode ? "#253341" : "#fff",

      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      paddingVertical: 15,
    },
    text: {
      fontWeight: "700",
      fontSize: 17,
      color: isDarkMode ? "#ddd" : "#000",
    },
    butonContainer: {
      width: "100%",
    },
    button: {
      borderTopWidth: 0.5,
      borderColor: isDarkMode ? "#ddd" : "#555",
      width: "100%",
      padding: 15,
      paddingHorizontal: 90,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      width: "100%",
      textAlign: "center",
      fontWeight: "700",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
  });
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Options</Text>
        </View>

        <View style={styles.butonContainer}>
          <ExcerSetting
            icon={"fa-pen-to-square"}
            name={"Edit"}
            onPress={openEdit}
          />
          <ExcerSetting icon={"fa-trash-can"} name={"Delete"} />

          <View>
            <Pressable
              onPress={() => {
                setActive("");
                trigger("notificationSuccess");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OptionsSlider;

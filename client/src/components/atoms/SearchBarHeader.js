import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CustomBackButton from "./CustomBackButton";
import BCodeButton from "../molecules/BCodeButton";

const SearchBarHeader = ({ navigation, route, options, back }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ddd",
      borderWidth: 1,
      flex: 1,
      height: 30,
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 10,
    },
    containerLeft: { paddingRight: 5 },
    containerRight: {
      flex: 1,
    },
  });
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingTop: 70,
        width: "100%",
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#fff",
      }}
    >
      <CustomBackButton back={back} navigation={navigation} route={route} />

      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <FontAwesomeIcon icon={"fa-magnifying-glass"} color="#555" />
        </View>
        <View style={styles.containerRight}>
          <TextInput
            placeholder="Search All Foods..."
            placeholderTextColor={"#555"}
          />
        </View>
      </View>

      <BCodeButton />
    </View>
  );
};

export default SearchBarHeader;

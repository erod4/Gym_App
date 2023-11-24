import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CustomBackButton from "./CustomBackButton";
import BCodeButton from "../molecules/BCodeButton";
import { NutritionContext } from "../../store/actions/clientActions/Nutrition";

const SearchBarHeader = ({ navigation, route, options, back }) => {
  const { fetchSearch, clearSearch } = useContext(NutritionContext);
  const [input, setInput] = useState("");
  const handleChange = (t) => {
    setInput(t);
  };
  const handleClear = () => {
    setInput("");
  };
  useEffect(() => {
    if (input.length > 0) {
      fetchSearch(input);
    } else if (input.length == 0) {
      clearSearch();
    }
  }, [input]);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ddd",
      borderWidth: 1,
      flex: 1,
      height: 30,
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 20,
    },
    containerLeft: { paddingRight: 5 },
    containerRight: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: "#0096c7",
    },
    containerCenter: {
      flex: 1,
    },
  });
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginTop: 70,
          marginBottom: 10,
          paddingHorizontal: 5,
          width: "90%",
          paddingVertical: 10,
          borderRadius: 10,
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      >
        <CustomBackButton back={back} navigation={navigation} route={route} />

        <View style={styles.container}>
          <View style={styles.containerLeft}>
            <FontAwesomeIcon icon={"fa-magnifying-glass"} color="#0096c7" />
          </View>
          <View style={styles.containerCenter}>
            <TextInput
              placeholder="Search All Foods..."
              placeholderTextColor={"#555"}
              value={input}
              onChangeText={handleChange}
            />
          </View>
          {input.length > 0 && (
            <Pressable style={styles.containerRight} onPress={handleClear}>
              <FontAwesomeIcon icon={"fa-xmark"} color="#0096c7" />
            </Pressable>
          )}
        </View>

        <BCodeButton />
      </View>
    </View>
  );
};

export default SearchBarHeader;

import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { AppearenceContext } from "../../store/actions/clientActions/Appearence";

const NutritionCategory = ({ name, cal, protein, carbs, fat }) => {
  const { isDarkMode } = useContext(AppearenceContext);
  const [expand, setExpand] = useState(false);

  const navigator = useNavigation();

  const handlePress = () => {
    setExpand(!expand);
  };
  const handleAddFoodPress = () => {
    navigator.navigate("AddFood", { name });
  };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(0, 150, 199, 0.3)",
      borderRadius: 15,
      borderWidth: 0.7,
      overflow: "hidden",
      borderColor: isDarkMode ? "#ddd" : "#000",
    },
    containerLeft: {
      paddingHorizontal: 10,
      backgroundColor: "rgba(0, 150, 199, 0.25)",
      flex: 1,

      justifyContent: "center",
      alignItems: "center",
    },
    containerRight: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 5,

      alignItems: "center",
    },
    containerRightLeftest: {
      width: "75%",
    },
    containerRightTop: {
      fontWeight: "700",
      fontSize: 15,
      color: isDarkMode ? "#ddd" : "#000",
    },
    containerRightBottom: {
      flexDirection: "row",
      gap: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.containerLeft}
          onPress={handleAddFoodPress}
        >
          <FontAwesomeIcon icon={"fa-plus"} color="#0096c7" />
        </TouchableOpacity>
        <Pressable style={styles.containerRight} onPress={handlePress}>
          <View style={styles.containerRightLeftest}>
            <Text style={styles.containerRightTop}>{name}</Text>

            <View style={styles.containerRightBottom}>
              <Text style={{ color: isDarkMode ? "#ddd" : "#000" }}>
                {cal} kcal
              </Text>
              <Text style={{ color: isDarkMode ? "#ddd" : "#000" }}>
                {protein}g protein
              </Text>
              <Text style={{ color: isDarkMode ? "#ddd" : "#000" }}>
                {carbs}g carbs
              </Text>
              <Text style={{ color: isDarkMode ? "#ddd" : "#000" }}>
                {fat}g fat
              </Text>
            </View>
          </View>
          <FontAwesomeIcon
            icon={!expand ? "fa-chevron-down" : "fa-chevron-up"}
            color="#0096c7"
          />
        </Pressable>
      </View>
      {expand && (
        <View
          style={{
            width: "100%",
            borderTopWidth: 1,
            borderColor: "#aaa",
            paddingVertical: 10,
          }}
        >
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </View>
      )}
    </View>
  );
};

export default NutritionCategory;

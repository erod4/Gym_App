import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NutritionContext } from "../../store/actions/clientActions/Nutrition";

const FoodItem = ({ data, custom }) => {
  const { getFoodData } = useContext(NutritionContext);
  const navigator = useNavigation();
  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      backgroundColor: "rgba(0, 150, 199, 0.25)",
      paddingHorizontal: 5,
      borderRadius: 10,
    },
    containerLeft: { flexDirection: "column", flex: 1, gap: 5 },
    containerRight: {
      justifyContent: "center",
    },
    containerRightText: {
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "700",
      textAlignVertical: "center",
      paddingLeft: 5,
    },
    textUpperContainer: { flexDirection: "row" },
    textUpper: { fontWeight: "500" },
    textLower: {},
  });
  const handlePress = () => {
    getFoodData(data.fdcId);
    navigator.navigate("FoodPreview", {
      name: data?.description,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerLeft}>
        <View style={styles.textUpperContainer}>
          <Text style={styles.textUpper}>{data?.description}</Text>
        </View>
        <Text style={styles.textLower}>
          {data?.finalFoodInputFoods[0] ? (
            <>
              {data?.finalFoodInputFoods[0]?.value}
              {data?.finalFoodInputFoods[0]?.unit}
            </>
          ) : (
            <>
              {data?.servingSize}
              {data?.servingSizeUnit}
            </>
          )}
          {!data?.finalFoodInputFoods[0] && !data?.servingSize && (
            <>{"1 Serving"}</>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;

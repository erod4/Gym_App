import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const FoodItem = ({ data, custom }) => {
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
  return (
    <TouchableOpacity style={styles.container} key={data?.id}>
      <View style={styles.containerLeft}>
        <View style={styles.textUpperContainer}>
          <Text style={styles.textUpper}>{data?.brandName}</Text>
          <Text style={styles.textUpper}>{data?.description}</Text>
        </View>
        <Text style={styles.textLower}>
          {data?.finalFoodInputFoods[0] ? (
            <>
              {data?.finalFoodInputFoods[0]?.value}
              {data?.finalFoodInputFoods[0]?.unit}
            </>
          ) : (
            <>{"1 serving"}</>
          )}
        </Text>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.containerRightText}>USDA</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;

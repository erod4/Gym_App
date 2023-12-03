import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const FoodPreviewCategory = ({ category, input, data, borderTopWidth }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 5,
      height: 40,
      paddingHorizontal: 5,
      borderTopWidth: borderTopWidth ? 0.5 : 0,
    },
    containerLeft: {},
    category: {
      fontWeight: "700",
    },
    containerRight: {
      width: "20%",
    },
    data: {
      fontWeight: "500",
    },
    dataInput: {
      borderWidth: 0.5,
      borderRadius: 10,
      flex: 1,
      textAlign: "right",
      paddingRight: 5,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.containerRight}>
        {input ? (
          <TextInput
            style={styles.dataInput}
            placeholder="1"
            keyboardType="numeric"
            keyboardAppearance="dark"
          />
        ) : (
          <Text style={styles.data}>{data}</Text>
        )}
      </View>
    </View>
  );
};

export default FoodPreviewCategory;

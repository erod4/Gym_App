import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import StartButton from "../containers/StartButton";
import NutritionNav from "../components/atoms/NutritionNav";
import NutritionDailyProgress from "../components/molecules/NutritionDailyProgress";
import NutritionCategory from "../components/molecules/NutritionCategory";

const Nutrition = () => {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    macrosContainer: {
      top: 0,
      width: "90%",
      backgroundColor: "#fff",
      height: "35%",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingTop: 60,
    },
    foodContainer: {
      paddingVertical: 20,
      gap: 50,
      width: "100%",
    },
  });
  return (
    <View style={styles.page}>
      <View style={styles.macrosContainer}>
        <View style={{ flex: 1, borderWidth: 0.7, borderRadius: 10 }}>
          <NutritionNav />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <NutritionDailyProgress
              name={"Energy"}
              currVal={300}
              goalValue={2000}
              units={"kcal"}
            />
            <NutritionDailyProgress
              name={"Protein"}
              currVal={100}
              goalValue={200}
              units={"g"}
            />
            <NutritionDailyProgress
              name={"Net Carbs"}
              currVal={20}
              goalValue={250}
              units={"g"}
            />
            <NutritionDailyProgress
              name={"Fat"}
              currVal={140}
              goalValue={150}
              units={"g"}
            />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.foodContainer}
        style={{ flex: 1, backgroundColor: "rgba(254,254,254,1.0)" }}
      >
        <NutritionCategory
          name={"Breakfast"}
          cal={0}
          protein={0}
          carbs={0}
          fat={0}
        />
        <NutritionCategory
          name={"Lunch"}
          cal={0}
          protein={0}
          carbs={0}
          fat={0}
        />
        <NutritionCategory
          name={"Dinner"}
          cal={0}
          protein={0}
          carbs={0}
          fat={0}
        />
      </ScrollView>
    </View>
  );
};

export default Nutrition;

import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import StartButton from "../containers/StartButton";
import NutritionNav from "../components/atoms/NutritionNav";
import NutritionDailyProgress from "../components/molecules/NutritionDailyProgress";
import NutritionCategory from "../components/molecules/NutritionCategory";
import { AppearenceContext } from "../store/actions/clientActions/Appearence";

const Nutrition = () => {
  const { isDarkMode } = useContext(AppearenceContext);
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems: "center",
      backgroundColor: isDarkMode ? "#192734" : "#fff",
    },
    macrosContainer: {
      top: 0,
      width: "90%",
      backgroundColor: isDarkMode ? "#192734" : "#fff",
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
        <View
          style={{
            flex: 1,
            borderWidth: 0.7,
            borderColor: isDarkMode ? "#ddd" : "#000",

            borderRadius: 10,
            backgroundColor: isDarkMode ? "#253341" : "#fff",
          }}
        >
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
        style={{ flex: 1, backgroundColor: isDarkMode ? "#192734" : "#fff" }}
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

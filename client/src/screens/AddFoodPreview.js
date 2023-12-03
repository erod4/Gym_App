import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { NutritionContext } from "../store/actions/clientActions/Nutrition";
import FoodPreviewSelector from "../components/molecules/FoodPreviewSelector";

const AddFoodPreview = ({ route }) => {
  const { itemNutrition } = useContext(NutritionContext);
  const nutrients = itemNutrition?.foodNutrients;
  let protein = "";
  let fat = "";
  let carbs = "";
  let fiber = "";
  let calories = "";
  // Loop through the foodNutrients array
  if (nutrients) {
    for (const nutrient of nutrients) {
      switch (nutrient?.nutrient?.name) {
        case "Protein":
          protein = `${nutrient.amount} ${nutrient.nutrient.unitName}`;
          break;
        case "Total lipid (fat)":
          fat = `${nutrient.amount} ${nutrient.nutrient.unitName}`;
          break;
        case "Carbohydrate, by difference":
          carbs = `${nutrient.amount} ${nutrient.nutrient.unitName}`;
          break;
        case "Fiber, total dietary":
          fiber = `${nutrient.amount} ${nutrient.nutrient.unitName}`;
          break;
        case "Energy":
          calories = `${nutrient.amount} ${nutrient.nutrient.unitName}`;
        default:
          // Handle other nutrients if needed
          break;
      }
    }
  }
  let servingSize = 0;
  let servingSizeUnit = "";

  if (itemNutrition?.servingSize) {
    servingSize = itemNutrition.servingSize;
    servingSizeUnit = itemNutrition.servingSizeUnit;
  } else if (itemNutrition?.inputFoods[0]) {
    servingSize = itemNutrition.inputFoods[0].ingredientWeight;
  } else if (!itemNutrition?.inputFoods[0] && !itemNutrition?.servingSize) {
    servingSize = 1;
    servingSizeUnit = "Serving";
  }
  const proteinPerWeight =
    servingSize > 0
      ? Number(protein.split(" ")[0]) / servingSize
      : Number(protein.split(" ")[0]);
  const carbsPerWeight =
    servingSize > 0
      ? Number(carbs.split(" ")[0]) / servingSize
      : Number(carbs.split(" ")[0]);
  const fatPerWeight =
    servingSize > 0
      ? Number(fat.split(" ")[0]) / servingSize
      : Number(fat.split(" ")[0]);
  const fiberPerWeight =
    servingSize > 0
      ? Number(fiber.split(" ")[0]) / servingSize
      : Number(fiber.split(" ")[0]);
  return (
    <View>
      <FoodPreviewSelector serving={`${servingSize} ${servingSizeUnit} `} />
    </View>
  );
};

export default AddFoodPreview;

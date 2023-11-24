import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { NutritionContext } from "../store/actions/clientActions/Nutrition";
import { ScrollView } from "react-native-gesture-handler";
import FoodItem from "../components/molecules/FoodItem";

const AddFood = ({ route }) => {
  const { fetchSearch, results, loading } = useContext(NutritionContext);
  const handleChange = () => {};
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: -10,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 40,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#fff",
          paddingTop: 10,
          width: "90%",
        }}
        contentContainerStyle={{ justifyContent: "center" }}
      >
        <Text style={{ paddingVertical: 5, fontWeight: "500" }}>Results</Text>
        {results?.length == 0 && (
          <Text style={{ width: "100%" }}>0 Results Found</Text>
        )}
        {results?.length > 0 ? (
          <View style={{ gap: 5 }}>
            {results.map((res) => (
              <FoodItem data={res} key={res.id} />
            ))}
          </View>
        ) : (
          <>
            {loading && (
              <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator size={"large"} color={"#0096c7"} />
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AddFood;

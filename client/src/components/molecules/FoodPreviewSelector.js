import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FoodPreviewCategory from "../atoms/FoodPreviewCategory";

const FoodPreviewSelector = ({ serving }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const currentDate = new Date();

    // Get the current time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    // Format the time as a string
    const formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
    setTime(formattedTime);
  }, []);
  return (
    <View>
      <FoodPreviewCategory input={true} category={"Amount"} />
      <FoodPreviewCategory
        input={false}
        category={"Serving Size"}
        data={serving}
        borderTopWidth={true}
      />
      <FoodPreviewCategory
        input={false}
        category={"Group"}
        borderTopWidth={true}
        data={"Breakfast"}
      />
      <FoodPreviewCategory
        input={false}
        data={time}
        category={"Time Stamp"}
        borderTopWidth={true}
      />
    </View>
  );
};

export default FoodPreviewSelector;

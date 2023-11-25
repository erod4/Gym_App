import React, { useContext, useEffect, useState } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import Svg, { Circle, Rect, Text as SvgText } from "react-native-svg";
import { InteractionContext } from "../../store/actions/clientActions/Interaction";
const Barbell = ({ plateWeights, includeBarbell }) => {
  const width = Dimensions.get("window").width;
  const { id } = useContext(InteractionContext);
  const barbellWeight = () => {
    if (includeBarbell) {
      return 45;
    } else {
      return 0;
    }
  };

  const [platesOnEachSide, setPlatesOnEachSide] = useState([]);

  useEffect(() => {
    const bar = barbellWeight();
    let remainingWeight = (id - bar) / 2;

    const updatedPlatesOnEachSide = [];
    for (let weight of plateWeights) {
      const numberOfPlates = Math.floor(remainingWeight / weight);

      if (numberOfPlates > 0) {
        updatedPlatesOnEachSide.push({ weight, count: numberOfPlates });

        remainingWeight -= numberOfPlates * weight;
      }
    }
    setPlatesOnEachSide(updatedPlatesOnEachSide);
  }, [plateWeights, id, includeBarbell]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: width,

        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.bbLeft}>
        {platesOnEachSide.reverse().map((plate, index) => {
          const { count, weight } = plate;
          const weightElements = [];

          // Create weight elements based on count
          for (let i = 0; i < count; i++) {
            weightElements.push(
              <View key={i} style={styles.plate}>
                <Text style={styles.text}>{weight}</Text>
              </View>
            );
          }

          return weightElements;
        })}
      </View>
      {includeBarbell && <View style={styles.barbell} />}
      {!includeBarbell && <View style={styles.noBarbell} />}
      <View style={styles.bbRight}>
        {platesOnEachSide.reverse().map((plate, index) => {
          const { count, weight } = plate;
          const weightElements = [];

          // Create weight elements based on count
          for (let i = 0; i < count; i++) {
            weightElements.push(
              <View key={i} style={styles.plate}>
                <Text style={styles.text}>{weight}</Text>
              </View>
            );
          }

          return weightElements;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barbell: {
    flex: 1,
    height: 10,
    backgroundColor: "grey",
  },
  noBarbell: {
    width: 10,
  },
  bbLeft: {
    height: 60,

    width: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
  },
  bbRight: {
    height: 60,

    width: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },
  plate: {
    backgroundColor: "blue",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
  },
  text: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "900",
  },
});
export default Barbell;

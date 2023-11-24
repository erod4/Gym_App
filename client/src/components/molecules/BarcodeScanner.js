import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const BarcodeScanner = () => {
  const navigator = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigator.navigate("AddFood");
        }}
        style={{
          position: "absolute",
          top: 50,
          right: 10,
          padding: 10,
          zIndex: 1,
        }}
      >
        <View style={{ borderRadius: 10, backgroundColor: "#fff" }}>
          <FontAwesomeIcon icon={"fa-xmark"} color="#111" size={20} />
        </View>
      </Pressable>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.overlay}>
        <View
          style={{
            justifyContent: "center",
            width: 275,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "700",
              fontSize: 15,
            }}
          >
            Scan Barcode
          </Text>
          <Text
            style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}
          >
            Keep the barcode in the frame to scan it.
          </Text>
        </View>
        <View style={styles.scanBox} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  },
  scanBox: {
    width: 250,
    height: 200,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the opacity as needed
    position: "relative",
  },
});

export default BarcodeScanner;

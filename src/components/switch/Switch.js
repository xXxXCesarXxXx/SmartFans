import React, { useState } from "react";
import { Alert, StyleSheet, Switch, Text, View } from "react-native";
import SubTitle from "../navigation/SubTitle";

export default function SwitchScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Alert.alert(
      "Ventilador",
      `El ventilador está ${!isEnabled ? "encendido" : "apagado"}`,
    );
  };

  return (
    <View style={styles.container}>
      <SubTitle name="Interruptor" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>
          El ventilador está {isEnabled ? "encendido" : "apagado"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "70%",
  },
  switchText: {
    fontSize: 18,
    color: "white",
    marginRight: 10,
  },
});

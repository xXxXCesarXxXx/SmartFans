import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SubTitle from "../navigation/SubTitle";

export default function Temperature() {
  const [onTemperature, setOnTemperature] = useState("");
  const [offTemperature, setOffTemperature] = useState("");

  const handleSave = () => {
    if (onTemperature && offTemperature) {
      Alert.alert(
        "Configuración Guardada",
        `El ventilador se encenderá a ${onTemperature}°C y se apagará a ${offTemperature}°C`,
      );
      //Lógica para guardar las temperaturas en una base de datos o enviar al servidor
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SubTitle name="Configuración de Temperatura" />

      <View style={styles.form}>
        <Text style={styles.label}>
          Temperatura para encender el ventilador (°C):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 25"
          placeholderTextColor="#727272"
          keyboardType="numeric"
          value={onTemperature}
          onChangeText={setOnTemperature}
        />
        <Text style={styles.label}>
          Temperatura para apagar el ventilador (°C):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 20"
          placeholderTextColor="#727272"
          keyboardType="numeric"
          value={offTemperature}
          onChangeText={setOffTemperature}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  form: {
    width: "90%",
    marginTop: "20%",
    marginBottom: "64%",
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "white",
    borderWidth: 1,
    borderColor: "#727272",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
});

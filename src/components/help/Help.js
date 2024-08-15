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

export default function Help() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (name && email && message) {
      Alert.alert("Gracias", "Tu mensaje ha sido enviado");
      // Lógica para enviar el mensaje a un servidor o correo
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Alert.alert("Error", "Por favor, completa todos los campos");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SubTitle name="Ayuda y Soporte" />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#727272"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#727272"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Mensaje"
          placeholderTextColor="#727272"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Enviar</Text>
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
    marginTop: 50,
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
  textArea: {
    height: 150,
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "white",
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#727272",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 55,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: "59%",
  },
  buttonText: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 18,
  },
});

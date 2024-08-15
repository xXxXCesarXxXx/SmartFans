import { Feather } from "@expo/vector-icons";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import appFirebase from "../../../FireBase";
import SubTitle from "../navigation/SubTitle";

const auth = getAuth(appFirebase);

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const register = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      Alert.alert("Registro Exitoso", "Tu cuenta ha sido creada.", [
        {
          text: "OK",
          onPress: () => props.navigation.navigate("Login"),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la cuenta. Inténtalo más tarde.");
      console.log(error);
    }
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView
      style={styles.body}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <SubTitle name="Registrarse" />
        </View>
        <View style={styles.inputContainer}>
          <InputField
            title="Email"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            containerStyle={styles.inputContainerMail}
            inputStyle={styles.input}
            placeholderTextColor={styles.placeholder.color}
          />
          <InputField
            title="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={secureTextEntry}
            containerStyle={styles.inputContainerPassword}
            inputStyle={styles.input}
            placeholderTextColor="#888"
            rightIcon={
              <TouchableOpacity
                onPress={toggleSecureTextEntry}
                style={styles.icon}
              >
                <Feather
                  name={secureTextEntry ? "eye-off" : "eye"}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            }
          />
          <InputField
            title="Confirmar Contraseña"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={secureTextEntry}
            containerStyle={styles.inputContainerPassword}
            inputStyle={styles.input}
            placeholderTextColor="#888"
            rightIcon={
              <TouchableOpacity
                onPress={toggleSecureTextEntry}
                style={styles.icon}
              >
                <Feather
                  name={secureTextEntry ? "eye-off" : "eye"}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity style={styles.buttonLogin} onPress={register}>
            <Text style={styles.textButton}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingTop: 10 }}
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
              ¿Ya tienes cuenta? Inicia sesión aquí
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const InputField = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  inputStyle,
  placeholderTextColor,
  rightIcon,
}) => (
  <View style={containerStyle}>
    <Text style={styles.inputTitle}>{title}</Text>
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon}
    </View>
  </View>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerMail: {
    marginTop: 10,
    width: 320,
  },
  inputContainerPassword: {
    marginTop: 22,
    width: 320,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#727272",
    borderRadius: 2,
    backgroundColor: "#121212",
  },
  input: {
    flex: 1,
    height: 50,
    color: "white",
    paddingHorizontal: 15,
  },
  inputTitle: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 16,
  },
  placeholder: {
    color: "gray",
    fontSize: 17,
  },
  buttonLogin: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 55,
    borderWidth: 1,
    borderColor: "gray",
    width: 320,
    marginTop: 30,
    justifyContent: "center",
  },
  textButton: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    padding: 10,
  },
});

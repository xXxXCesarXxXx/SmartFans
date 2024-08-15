import { Feather } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  Image,
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

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      Alert.alert("Iniciando sesión", "Accediendo...");
      props.navigation.navigate("Menu");
    } catch (error) {
      Alert.alert("Error", "Inténtalo más tarde");
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
          <SubTitle name="Inicia Sesión" />
        </View>
        <View style={styles.container1}>
          <View style={{ backgroundColor: "#121212", flex: 1 }}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                Alert.alert("Registro con Google", "Intentalo mas tarde")
              }
            >
              <View style={styles.buttonContent1}>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "20%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/Google.png")}
                    style={styles.Google}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 30,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                  }}
                >
                  <Text style={styles.buttonText1}>Continuar con Google</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                Alert.alert("Registro con Facebook", "Intentalo mas tarde")
              }
            >
              <View style={styles.buttonContent1}>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "20%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/FacebookIcon.png")}
                    style={styles.Facebook}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 30,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                  }}
                >
                  <Text style={styles.buttonText1}>Continuar con Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button1}
              onPress={() =>
                Alert.alert("Registro con Apple", "Intentalo mas tarde")
              }
            >
              <View style={styles.buttonContent1}>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "20%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/AppleIcon.png")}
                    style={styles.Apple}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#121212",
                    height: "100%",
                    width: "80%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 30,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                  }}
                >
                  <Text style={styles.buttonText1}>Continuar con Apple</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separation} />
        <InputField
          title="Email o nombre de usuario"
          placeholder="Email o nombre de usuario"
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
        <TouchableOpacity style={styles.buttonLogin} onPress={logueo}>
          <Text style={styles.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ paddingTop: 10 }}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{ color: "white", fontSize: 15 }}>
            ¿No tienes cuenta? Regístrate aquí
          </Text>
        </TouchableOpacity>
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
  bodyApi: {
    width: "100%",
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
  buttonLoginApi: {
    backgroundColor: "#121212",
    borderColor: "#727272",
    borderRadius: 100,
    height: 55,
    width: 320,
    marginVertical: 8,
    borderWidth: 1,
    justifyContent: "center",
  },
  textButtonApi: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonLogin: {
    backgroundColor: "white",
    borderRadius: 100,
    height: 55,
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
  separation: {
    width: 320,
    height: 1,
    backgroundColor: "gray",
    marginVertical: 20,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  button1: {
    backgroundColor: "#121212",
    borderRadius: 100,
    height: 55,
    width: 350,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#727272",
  },
  buttonContent1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttonText1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  Google: {
    width: 30,
    height: 30,
  },
  Facebook: {
    width: 30,
    height: 30,
  },
  Apple: {
    width: 35,
    height: 35,
  },
});

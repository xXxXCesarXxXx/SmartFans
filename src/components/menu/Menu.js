import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SubTitle from "../navigation/SubTitle";

export default function Menu({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Cerrar Sesión",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <SubTitle name="Menú Principal" />
      </View>
      <View style={{ marginTop: 30, backgroundColor: "#121212", flex: 1 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Temperature")}
        >
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }}
            >
              <Text style={styles.buttonText}>Configuración</Text>
            </View>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "30%",
                justifyContent: "center",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
              }}
            >
              <Image
                source={require("../../../assets/images/termometroIcon.png")}
                style={styles.iconTemperature}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Switch")}
        >
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }}
            >
              <Text style={styles.buttonText}>Interruptor</Text>
            </View>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "30%",
                justifyContent: "center",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
              }}
            >
              <Image
                source={require("../../../assets/images/Interruptor.png")}
                style={styles.iconSwitch}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Help")}
        >
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }}
            >
              <Text style={styles.buttonText}>Ayuda</Text>
            </View>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "30%",
                justifyContent: "center",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
              }}
            >
              <Image
                source={require("../../../assets/images/HelpIcon.png")}
                style={styles.iconHelp}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <View style={styles.buttonContent}>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 100,
                borderBottomLeftRadius: 100,
              }}
            >
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </View>
            <View
              style={{
                backgroundColor: "#121212",
                height: "100%",
                width: "30%",
                justifyContent: "center",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
              }}
            >
              <Image
                source={require("../../../assets/images/Cerrar.png")}
                style={styles.iconLogout}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  button: {
    backgroundColor: "#121212",
    borderRadius: 100,
    height: 100,
    width: 320,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#727272",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  iconTemperature: {
    width: 60,
    height: 60,
  },
  iconSwitch: {
    width: 51,
    height: 50,
  },
  iconHelp: {
    width: 60,
    height: 60,
  },
  iconLogout: {
    width: 55,
    height: 55,
  },
});

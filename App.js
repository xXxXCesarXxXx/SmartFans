import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import Help from "./src/components/help/Help";
import Login from "./src/components/login/Login";
import Menu from "./src/components/menu/Menu";
import Register from "./src/components/register/Register";
import Switch from "./src/components/switch/Switch";
import Temperature from "./src/components/temperature/Temperature";

export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    Jim: require("./assets/fonts/JimNightshade-Regular.ttf"),
  });
  if (!fontsLoaded) return null;

  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#121212",
            height: 200,
          },
          headerTitleStyle: {
            fontFamily: "Jim",
            fontSize: 75,
            paddingTop: 45,
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerTitle: "SmartFans",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Switch" component={Switch} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#121212" />
      <MyStack />
    </NavigationContainer>
  );
}

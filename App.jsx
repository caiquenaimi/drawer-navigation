import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Contact from "./src/screens/Contact";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

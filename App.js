import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View } from "react-native";
import { Login } from "./src/screens/login";
import { Profile } from "./src/screens/profile";
import { Register } from "./src/screens/register";
import { Books } from "./src/screens/books";
import { Counter } from "./src/screens/counter";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "red",
            },
          }}
          name="register"
          component={Register}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

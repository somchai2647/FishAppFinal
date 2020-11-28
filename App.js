import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./src/screens/Login"
import HomeScreen from "./src/screens/Home"
import checkList from "./src/screens/checkList"
import addPond from "./src/screens/addPond"
import PondScreen from "./src/screens/Pond"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="addPond" mode="card" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="checkList" component={checkList} options={{ headerShown: false }} />
        <Stack.Screen name="addPond"  component={addPond} options={{ headerShown: false }} />
        <Stack.Screen name="Pond" component={PondScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
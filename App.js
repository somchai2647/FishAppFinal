import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./src/screens/Login"
import HomeScreen from "./src/screens/Home"
import checkList from "./src/screens/checkList"
import addPond from "./src/screens/addPond"
import PondScreen from "./src/screens/Pond"
import pondDetail from "./src/screens/pondDetail"
import resultPond from "./src/screens/resultPond"
import Contact from "./src/screens/Contact"
import ShopScreen from "./src/screens/Shop"
 
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" mode="card" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
        <Stack.Screen name="checkList" component={checkList} options={{ headerShown: false }} />
        <Stack.Screen name="addPond" component={addPond} options={{ headerShown: false }} />
        <Stack.Screen name="resultPond" component={resultPond} options={{ headerShown: false }} />
        <Stack.Screen name="pondDetail" component={pondDetail} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
        <Stack.Screen name="Pond" component={PondScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
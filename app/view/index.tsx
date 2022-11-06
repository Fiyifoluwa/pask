import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough from './Walkthrough';
import MainScreen from './MainScreen';
import ItemScreen from './ItemScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
    </Stack.Navigator>
  );
};
export default AppStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough from './Walkthrough';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Walkthrough" component={Walkthrough} />
    </Stack.Navigator>
  );
};
export default AppStack;

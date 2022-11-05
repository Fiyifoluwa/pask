import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef } from 'app/utils/rootNavigation';
import AppStack from 'app/view';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}
      ref={navigationRef}
    >
      <App />
    </NavigationContainer>
  );
};

export default RootNavigator;

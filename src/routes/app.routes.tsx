import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { Home } from '@screens';
import { NavigationContainer } from '@react-navigation/native';

export type AppRoutesList = {
  Home: undefined;
};

export type AppStackNavigatorRoutesProps =
  NativeStackNavigationProp<AppRoutesList>;

const Stack = createNativeStackNavigator<AppRoutesList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

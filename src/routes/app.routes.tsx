import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { Home, NewTask } from '@screens';
import { NavigationContainer } from '@react-navigation/native';

export type AppRoutesList = {
  Home: undefined;
  NewTask: undefined;
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
        <Stack.Screen name="NewTask" component={NewTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

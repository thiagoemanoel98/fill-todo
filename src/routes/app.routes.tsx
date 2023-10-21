import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { Home, NewTask, ShowTask } from '@screens';
import { NavigationContainer } from '@react-navigation/native';
import { Task } from '@models';

export type AppRoutesList = {
  Home: undefined;
  NewTask: undefined;
  ShowTask: { task: Task };
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
        <Stack.Screen name="ShowTask" component={ShowTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

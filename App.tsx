import React from 'react';

import { ActivityIndicator, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import themeStyle from '@styles/themeStyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoutes } from '@routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={themeStyle.colors.$blue_lightest}
      />
      <AppRoutes />
      <Toast />
    </SafeAreaProvider>
  );
}

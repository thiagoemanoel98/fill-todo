import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { Button, Icon, InputCard, Text } from '@components';
import themeStyle from '@styles/themeStyle';

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
    <View style={styles.container}>
      <Text variant="Label" color="$blue_dark">
        Open up App.js to start working on your app!
      </Text>

      <Button onClick={() => {}} />
      <Button onClick={() => {}} type="danger" />

      <Icon name="CancelIcon" color="$blue_light" />

      <Button
        onClick={() => {}}
        type="danger"
        leftIcon="AddIcon"
        rightIcon="ESCIcon"
      />

      <Button onClick={() => {}} type="default" rightIcon="ESCIcon" />

      <Button onClick={() => {}} type="danger" leftIcon="AddIcon" />

      <StatusBar style="auto" />

      <InputCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.colors.$blue_lightest,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

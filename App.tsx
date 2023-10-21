import React from 'react';

import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { Button, Card, Icon, InputCard, Switch, Text } from '@components';
import themeStyle from '@styles/themeStyle';
import { Screen } from 'src/components/Screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
        backgroundColor={themeStyle.colors.$blue_light}
      />

      <Screen alignItems="center" hasPaddingTop={false}>
        <Card
          text="Log in to the online banking platform and pay the electricity, water, and internet bills by their respective due dates"
          status="todo"
          createdAt={new Date()}
        />
        <Card
          text="Log in to the online banking platform and pay the electricity, water, and internet bills by their respective due dates"
          status="done"
          createdAt={new Date()}
        />

        <Switch enable={true} />

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

        <InputCard />
      </Screen>
    </SafeAreaProvider>
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

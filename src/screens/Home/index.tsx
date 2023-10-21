import {
  Button,
  Card,
  Icon,
  InputCard,
  Screen,
  Switch,
  Text
} from '@components';
import React from 'react';

export function Home() {
  return (
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
  );
}

import React from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';

import * as S from './styles';
import { Button, Card, Screen, Switch, Text } from '@components';
import { useHomeData } from './hooks/useHomeData';
import { Task } from '@models';
import { Shadow } from '@utils';

export function Home() {
  const { tasks } = useHomeData();

  function renderItem({ item }: ListRenderItemInfo<Task>) {
    // calcular se ta expirado -> la dentro

    return <Card text={item.text} status={'todo'} createdAt={new Date()} />;
  }

  return (
    <Screen alignItems="center">
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={S.FlatlistBottom}
      />
      <S.BottomArea>
        <S.SwitchArea>
          <Switch enable={false} />
          <Text variant="Label" color="$blue_dark" marginLeft="small">
            Show done
          </Text>
        </S.SwitchArea>

        <Button title="New" leftIcon="AddIcon" onClick={() => {}} />
      </S.BottomArea>
    </Screen>
  );
}

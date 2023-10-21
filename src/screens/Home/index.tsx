import React from 'react';

import { Card, Screen } from '@components';
import { useHomeData } from './hooks/useHomeData';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Task } from '@models';

export function Home() {
  const { tasks, tasksFiltered } = useHomeData();

  function renderItem({ item }: ListRenderItemInfo<Task>) {
    return <Card text={item.text} status={'todo'} createdAt={new Date()} />;
  }

  return (
    <Screen alignItems="center">
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

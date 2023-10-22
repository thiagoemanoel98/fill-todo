import React from 'react';

import { FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';

import * as S from './styles';
import { Button, Card, Screen, Spacer, Switch, Text } from '@components';
import { useHomeData } from './hooks/useHomeData';
import { Task } from '@models';
import { Shadow } from '@utils';
import { AppScreenProps } from '@routes';
import { ListEmpty } from './components/ListEmpty';

export function Home({ navigation }: AppScreenProps<'Home'>) {
  const { tasks, getStatusOfTask } = useHomeData();

  function renderItem({ item }: ListRenderItemInfo<Task>) {
    const status = getStatusOfTask(item);

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ShowTask', { task: item })}
      >
        <Card text={item.text} status={status} createdAt={new Date()} />
      </TouchableOpacity>
    );
  }

  return (
    <Screen alignItems="center">
      <Spacer height="large" />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={S.FlatlistBottom}
        ListEmptyComponent={<ListEmpty />}
      />

      <S.BottomArea>
        <S.SwitchArea>
          <Switch enable={false} />
          <Text variant="Label" color="$blue_dark" marginLeft="small">
            Show done
          </Text>
        </S.SwitchArea>

        <S.ButtonArea style={Shadow.applyShadow}>
          <Button
            title="New"
            leftIcon="AddIcon"
            onClick={() => navigation.navigate('NewTask')}
          />
        </S.ButtonArea>
      </S.BottomArea>
    </Screen>
  );
}

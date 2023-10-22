import React, { useCallback } from 'react';

import * as S from './styles';

import { Text } from '../Text';
import { Icon } from '../Icon';
import { Task, TaskStatus } from '@models';
import { convertDatetimeStringToDate } from '@utils';

interface Props {
  status: TaskStatus;
  task: Task;
}

export function Card({ task, status }: Props) {
  const getDifferenceOfDays = useCallback(() => {
    const dateTime = convertDatetimeStringToDate(task.todoDate, task.todoTime);
    const currentDate = new Date();

    if (isNaN(dateTime.getTime())) {
      console.log('Data invalida');
      return '0';
    }

    const differenceInMilliseconds = Number(dateTime) - Number(currentDate);
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    if (Math.abs(differenceInDays) >= 1) {
      return Math.abs(Math.floor(differenceInDays)) + ' days';
    } else {
      const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
      return Math.abs(Math.floor(differenceInHours)) + ' hours';
    }
  }, [task]);

  return (
    <S.Container status={status}>
      <S.SideLeft status={status}>
        {status === 'done' ? (
          <Text variant="Body" color="$white" textAlign="justify">
            {task.text}
          </Text>
        ) : (
          <Text variant="Body" color="$blue_dark">
            {task.text}
          </Text>
        )}
      </S.SideLeft>

      <S.SideRight>
        {status === 'done' ? (
          <Icon name="CheckBoldIcon" color="$blue_dark" size={18} />
        ) : status === 'todo' ? (
          <Text variant="Caption">In {getDifferenceOfDays()}</Text>
        ) : (
          <Text variant="Caption" color="$danger">
            {getDifferenceOfDays()} ago
          </Text>
        )}
      </S.SideRight>
    </S.Container>
  );
}

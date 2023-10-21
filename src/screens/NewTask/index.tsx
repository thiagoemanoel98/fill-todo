import React, { useState } from 'react';

import {
  Button,
  FormInputCard,
  InputCard,
  Screen,
  Spacer,
  Text
} from '@components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewTaskSchema, newTaskSchema } from './newTaskSchema';
import * as S from './styles';

import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import { Platform, Pressable, View } from 'react-native';

const CurrentDate = new Date();

export function NewTask() {
  const [date, setDate] = useState(CurrentDate);

  const [time, setTime] = useState(
    new Date(CurrentDate.getTime() + 3 * 60 * 60 * 1000)
  );

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showTimePicker, setShowTimePicker] = useState(false);

  function formateDateToDDMMYYYY(data: Date): string {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  function formateHourMinute(data: Date): string {
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');

    return `${hora}:${minuto}`;
  }

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeTime = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentDate);
  };

  const { control, formState, handleSubmit } = useForm<NewTaskSchema>({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      text: ''
    },
    mode: 'onChange'
  });

  return (
    <Screen hasPaddingBottom={true}>
      <S.Content>
        <Text variant="Label" marginBottom="sm" marginTop="large" fontSize={12}>
          Describe the task
        </Text>

        <FormInputCard control={control} name="text" />

        <Spacer height="large" />

        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Select the date
        </Text>

        <Pressable onPress={() => setShowDatePicker((prev) => !prev)}>
          <View pointerEvents="none">
            <InputCard
              editable={false}
              placeholder=""
              value={formateDateToDDMMYYYY(date)}
            />
          </View>
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            minimumDate={new Date()}
            onChange={onChangeDate}
          />
        )}

        <Spacer height="large" />

        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Select the time
        </Text>

        <Pressable onPress={() => setShowTimePicker((prev) => !prev)}>
          <View pointerEvents="none">
            <InputCard
              editable={false}
              placeholder=""
              value={formateHourMinute(time)}
            />
          </View>
        </Pressable>

        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="spinner"
            minimumDate={new Date()}
            onChange={onChangeTime}
          />
        )}
      </S.Content>
      <S.ButtonArea>
        <Button
          title="Cancel"
          onClick={() => {}}
          type="danger"
          leftIcon="CancelIconBold"
        />

        <Button
          title="Save"
          onClick={() => {}}
          type="default"
          leftIcon="CheckBoldIcon"
        />
      </S.ButtonArea>
    </Screen>
  );
}

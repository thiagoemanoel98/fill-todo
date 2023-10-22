import React from 'react';

import {
  Button,
  FormInputCard,
  InputCard,
  Screen,
  Spacer,
  Text
} from '@components';
import * as S from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable, View } from 'react-native';
import { useNewTaskData } from './hooks/useNewTaskData';
import { AppScreenProps } from '@routes';
import { formateDateToDDMMYYYY, formateHourMinute } from '@utils';

export function NewTask({ navigation }: AppScreenProps<'NewTask'>) {
  const {
    control,
    date,
    time,
    showDatePicker,
    showTimePicker,
    formState,
    saveData,
    handleSubmit,
    onChangeDate,
    onChangeTime,
    setShowTimePicker,
    setShowDatePicker
  } = useNewTaskData();

  return (
    <Screen hasPaddingBottom={true} hasGoBackIcon={true} scrollable={true}>
      <S.Content>
        <Text variant="Label" marginBottom="sm" marginTop="large" fontSize={12}>
          Describe the task
        </Text>

        <FormInputCard control={control} name="text" />

        <Spacer height="large" />

        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Select the date
        </Text>

        <Pressable onPress={() => setShowDatePicker(!showDatePicker)}>
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
            //minimumDate={new Date()}
            onChange={onChangeDate}
          />
        )}

        <Spacer height="large" />

        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Select the time
        </Text>

        <Pressable onPress={() => setShowTimePicker(!showTimePicker)}>
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
            //minimumDate={new Date()}
            onChange={onChangeTime}
          />
        )}
      </S.Content>
      <S.ButtonArea>
        <Button
          title="Cancel"
          onClick={navigation.goBack}
          type="danger"
          leftIcon="CancelIconBold"
        />

        <Button
          title="Save"
          onClick={handleSubmit(saveData)}
          type={!formState.isValid ? 'disabled' : 'default'}
          isDisabled={!formState.isValid}
          leftIcon="CheckBoldIcon"
        />
      </S.ButtonArea>
    </Screen>
  );
}

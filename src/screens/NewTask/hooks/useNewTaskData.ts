import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useCallback } from 'react';
import { Platform } from 'react-native';
import { NewTaskSchema, newTaskSchema } from '../newTaskSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNewTaskStore, useTaskStore } from '@store';
import { Task } from '@models';
import uuid from 'react-native-uuid';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppStackNavigatorRoutesProps } from '@routes';
import { useToast } from 'react-native-toast-notifications';

const CurrentDate = new Date();

export const useNewTaskData = () => {
  const toast = useToast();

  const navigation = useNavigation<AppStackNavigatorRoutesProps>();
  const [addTask] = useTaskStore((state) => [state.addTask]);
  const [
    date,
    time,
    showDatePicker,
    showTimePicker,
    setShowDatePicker,
    setShowTimePicker,
    changeDate,
    changeTime
  ] = useNewTaskStore((state) => [
    state.date,
    state.time,
    state.showDatePicker,
    state.showTimePicker,
    state.setShowDatePicker,
    state.setShowTimePicker,
    state.changeDate,
    state.changeTime
  ]);

  const { control, formState, handleSubmit } = useForm<NewTaskSchema>({
    resolver: zodResolver(newTaskSchema),
    defaultValues: {
      text: ''
    },
    mode: 'onChange'
  });

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    changeDate(currentDate);
  };

  const onChangeTime = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(Platform.OS === 'ios');
    changeTime(currentDate);
  };

  function saveData({ text }: NewTaskSchema) {
    const data: Task = {
      id: String(uuid.v4()),
      text,
      todoDate: date.toLocaleDateString(),
      todoTime: time.toLocaleTimeString(),
      done: false
    };
    addTask(data);
    toast.show('Task registered successfully!', {
      type: 'success',
      duration: 3000
    });
    navigation.goBack();
  }

  useFocusEffect(
    useCallback(() => {
      changeTime(new Date(CurrentDate.getTime() + 2 * 60 * 60 * 1000));
    }, [changeTime])
  );

  return {
    onChangeDate,
    onChangeTime,
    changeDate,
    setShowDatePicker,
    setShowTimePicker,
    handleSubmit,
    saveData,
    formState,
    time,
    showDatePicker,
    showTimePicker,
    control,
    date
  };
};

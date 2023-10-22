import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform } from 'react-native';
import { NewTaskSchema, newTaskSchema } from '../newTaskSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTaskStore } from '@store';
import { Task } from '@models';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigatorRoutesProps } from '@routes';
import { useToast } from 'react-native-toast-notifications';

const CurrentDate = new Date();

export const useNewTaskData = () => {
  const toast = useToast();

  const navigation = useNavigation<AppStackNavigatorRoutesProps>();
  const [addTask] = useTaskStore((state) => [state.addTask]);

  const [date, setDate] = useState(CurrentDate);

  const [time, setTime] = useState(
    new Date(CurrentDate.getTime() + 1 * 60 * 60 * 1000)
  );

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

  return {
    onChangeDate,
    onChangeTime,
    setDate,
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

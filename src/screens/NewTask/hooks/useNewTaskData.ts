import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Platform } from 'react-native';
import { NewTaskSchema, newTaskSchema } from '../newTaskSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CurrentDate = new Date();

export const useNewTaskData = () => {
  const [date, setDate] = useState(CurrentDate);

  const [time, setTime] = useState(
    new Date(CurrentDate.getTime() + 3 * 60 * 60 * 1000)
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

  function saveData({ text }: NewTaskSchema) {
    console.log(text);
  }

  return {
    onChangeDate,
    onChangeTime,
    formateDateToDDMMYYYY,
    formateHourMinute,
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
